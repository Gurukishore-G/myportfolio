export function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffb5c0" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#d4b5ff" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.4}
        color="#ffffff"
      />
    </>
  );
}