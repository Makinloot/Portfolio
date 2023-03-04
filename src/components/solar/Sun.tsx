import { useFrame, useLoader } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, TextureLoader } from "three";
import { useRef } from "react";

import texture from "../../assets/textures/sun.jpg";

const Sun = () => {
  const [sun] = useLoader(TextureLoader, [texture]);
  const sunRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

  useFrame(() => {
    sunRef.current!.rotation.y += 0.0003;
    sunRef.current!.rotation.x += 0.0003;
  });

  return (
    <>
      <ambientLight intensity={0} />
      <pointLight args={[0xffffff, 1, 2000, 1]} position={[10, 10, -30]} />
      <mesh ref={sunRef} position={[10, 10, -30]}>
        <sphereBufferGeometry args={[5, 64, 64]} />
        <meshBasicMaterial map={sun} />
      </mesh>
    </>
  );
};

export default Sun;
