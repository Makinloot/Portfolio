import { Html, useProgress } from "@react-three/drei";
import { MoonLoader } from "react-spinners";

const Loading: React.FC<{
  setter: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setter }) => {
  const { progress } = useProgress();
  if (progress === 100) setter(true);

  return (
    <Html center>
      <div className="loading flex-col">
        <strong style={{ fontSize: "2rem" }}>{Math.round(progress)}</strong>
        <MoonLoader color="#00c3ff" size={250} />
      </div>
    </Html>
  );
};

export default Loading;
