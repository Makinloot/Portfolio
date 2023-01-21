import { useState, useRef } from "react";
import ExperienceText from "./ExperienceText";
import { EXP_DATA } from "../../data";

export default function Experience() {
  const [arrIdx, setArrIdx] = useState<number>(0);
  const liRefOne = useRef(null);
  const liRefTwo = useRef(null);

  const handleExperience = (num: number, active: any, inactive: any) => {
    active.current.classList.add("active");
    inactive.current.classList.remove("active");
    setArrIdx(num);
  };

  return (
    <section className="Experience flex-row" id="experience">
      <div className="container-small">
        <h2 className="Experience-title">experience</h2>
        <div className="Experience-wrapper">
          <ul className="Experience-company flex-col">
            <li
              className="active"
              ref={liRefOne}
              onClick={() => handleExperience(0, liRefOne, liRefTwo)}
            >
              {EXP_DATA[0].position}
            </li>
            <li
              ref={liRefTwo}
              onClick={() => handleExperience(1, liRefTwo, liRefOne)}
            >
              {EXP_DATA[1].position}
            </li>
          </ul>
          <ExperienceText
            position={EXP_DATA[arrIdx].position}
            title={EXP_DATA[arrIdx].title}
            date={EXP_DATA[arrIdx].date}
            texts={EXP_DATA[arrIdx].texts}
          />
        </div>
      </div>
    </section>
  );
}
