export const createNoisePattern = (time, position) => {
  const noiseScale = 1.5;
  const x = position.x * noiseScale + time ;
  const y = position.y * noiseScale + time ;
  const z = 0;
  
  return (Math.sin(x)  + Math.sin(y) / 2);
};