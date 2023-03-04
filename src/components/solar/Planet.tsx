import { useFrame, useLoader } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, TextureLoader, Vector3 } from "three";
import { useRef, useEffect } from "react";

import { PlanetTypes } from "../../data";

const Planet: React.FC<PlanetTypes> = ({ center, radius, speed, size, texture, cloudsTexture, orbit }) => {
  const position = new Vector3();
  const meshRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);
  const [sphereTexture] = useLoader(TextureLoader, [texture]);

  useFrame(({ clock }) => {
    const { top } = document.body.getBoundingClientRect();
    let angle = top / (clock.elapsedTime + speed);
    position.set(
      center.x + radius * Math.cos(angle),
      center.y + radius * Math.sin(angle + orbit),
      center.z + radius * Math.sin(angle)
    );
    meshRef.current!.position.copy(position);
    meshRef.current!.rotation.x += 0.001;
    meshRef.current!.rotation.y += 0.001;
  });

  // if planet is earth return it with clouds texture
  if (cloudsTexture) {
    const [clouds] = useLoader(TextureLoader, [cloudsTexture]);
    const cloudsRef = useRef<Mesh<BufferGeometry, Material | Material[]>>(null);

    useFrame(() => {
      cloudsRef.current!.position.copy(position);
      cloudsRef.current!.rotation.x += 0.001;
      cloudsRef.current!.rotation.y += 0.001;
    });

    return (
      <>
        <mesh ref={meshRef}>
          <sphereGeometry args={[size, 64, 64]} />
          <meshStandardMaterial map={sphereTexture} />
        </mesh>
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[size + 0.01, 32, 32]} />
          <meshStandardMaterial
            map={clouds}
            transparent={true}
            opacity={0.6}
            depthWrite={true}
          />
        </mesh>
      </>
    );
  }

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial map={sphereTexture} />
    </mesh>
  );
};

export default Planet;
