import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

import myImg from "../../assets/textures/me.jpg";
import jsTexture from "../../assets/textures/js.png";
import tsTexture from "../../assets/textures/ts.png";
import reactTexture from "../../assets/textures/react.png";
import htmlTexture from "../../assets/textures/html.png";
import cssTexture from '../../assets/textures/css.png';

const imgs = [
  jsTexture,
  cssTexture,
  tsTexture,
  reactTexture,
  myImg,
  htmlTexture,
];

const ImgBox = () => {
  const textures = useTexture([...imgs]);
  const boxRef = useRef<any>();
  
  const mappedTextures = textures.map((texture, i) => (
    <meshBasicMaterial attach={`material-${i}`} map={texture} />
  ));

  useFrame(() => {
    boxRef.current.rotation.y += 0.001;
    boxRef.current.rotation.x += 0.001;
  });

  return (
    <>
      <OrbitControls enablePan={false} enableZoom={false} />
      <mesh ref={boxRef} scale={4} position={[0.3, -0.3, 0]}>
        <boxGeometry args={[1, 1.2, 1]} />
        {mappedTextures}
      </mesh>
    </>
  );
};

export default ImgBox;
