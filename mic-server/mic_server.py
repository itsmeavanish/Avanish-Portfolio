# mic_server.py

import asyncio
import json
import numpy as np
import pyaudio
import websockets

CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100

# ✅ Handles a single websocket connection
async def mic_stream(websocket):
    p = pyaudio.PyAudio()
    stream = p.open(format=FORMAT,
                    channels=CHANNELS,
                    rate=RATE,
                    input=True,
                    frames_per_buffer=CHUNK)

    try:
        while True:
            data = np.frombuffer(stream.read(CHUNK, exception_on_overflow=False), dtype=np.int16)
            rms = np.sqrt(np.mean(np.square(data)))
            level = min(rms / 5000, 1.0)
            await websocket.send(json.dumps({"level": level}))
            await asyncio.sleep(0.05)
    finally:
        stream.stop_stream()
        stream.close()
        p.terminate()

# ✅ This MUST take TWO arguments
async def handler(websocket, path):
    print("🎧 Client connected")
    await mic_stream(websocket)

# ✅ Starts WebSocket server
async def main():
    print("🟢 Starting mic WebSocket server on ws://localhost:6789")
    server = await websockets.serve(handler, "localhost", 6789)
    await server.wait_closed()

if __name__ == "__main__":
    asyncio.run(main())
