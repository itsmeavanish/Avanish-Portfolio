import { useState, useEffect, useRef } from "react";

export const useMicLevel = () => {
  const [level, setLevel] = useState(0);
  const wsRef = useRef(null);
  const reconnectTimer = useRef(null);

  useEffect(() => {
    const connect = () => {
      wsRef.current = new WebSocket("ws://localhost:6789");

      wsRef.current.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          setLevel(data.level || 0);
        } catch (err) {
          console.error("Mic level parse error", err);
        }
      };

      wsRef.current.onclose = () => {
        console.warn("🔌 Mic WebSocket closed. Reconnecting in 1s...");
        reconnectTimer.current = setTimeout(connect, 1000); // Retry after 1s
      };

      wsRef.current.onerror = (err) => {
        console.error("Mic WebSocket error", err);
        wsRef.current?.close(); // Trigger reconnect via onclose
      };
    };

    connect();

    return () => {
      wsRef.current?.close();
      clearTimeout(reconnectTimer.current);
    };
  }, []);

  return level;
};
