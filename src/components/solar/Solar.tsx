import Sun from "./Sun";
import Planet from "./Planet";

import { planets } from "../../data";

const Solar = () => {
  return (
    <>
      <Sun />
      {planets.map((planet, i) => {
        const { orbit, center, radius, speed, size, texture, cloudsTexture } = planet;
        return (
          <Planet
            key={i}
            orbit={orbit}
            center={center}
            radius={radius}
            speed={speed}
            size={size}
            texture={texture}
            cloudsTexture={cloudsTexture && cloudsTexture}
          />
        );
      })}
    </>
  );
};

export default Solar;
