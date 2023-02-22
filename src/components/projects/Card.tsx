import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Card: React.FC<{
  img: string;
  name: string;
  desc: string;
  logos: {
    icon: IconProp;
    color: string;
  }[];
  url: string;
}> = ({ img, name, desc, logos, url }) => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>();

  const handleUniqueKey = () => {
    return Math.random() * Math.random() * Math.random();
  };

  useEffect(() => {
    const handleClass = (e: MouseEvent): void => {
      const divTarget = e.target as HTMLDivElement;
      const anchorTarget = e.target as HTMLAnchorElement;
      if (!menuRef.current?.contains(divTarget) && anchorTarget.localName !== "a") setOpen(false);
    };

    // add and remove evnet listener on document
    document.addEventListener("mousedown", handleClass);
    return () => document.removeEventListener("mousedown", handleClass);
  }, []);

  return (
    <div className="Projects-card flex-row" onClick={() => setOpen(!open)}>
      <h4>{name}</h4>
      <FontAwesomeIcon
        icon={faCaretDown}
        className={open ? "arrow arrow-up" : "arrow arrow-down"}
      />
      <div className={open ? "details active" : "details"}>
        <img className="card-img" src={img} />
        <div className="details-divider flex-col">
          <p>{desc}</p>
          <div className="flex-row logos">
            <div className="flex-row" style={{ gap: ".5rem" }}>
              {logos.map((logo) => (
                <FontAwesomeIcon
                  key={handleUniqueKey()}
                  icon={logo.icon}
                  color={logo.color}
                />
              ))}
            </div>
            <a href={url} target="_blank">
              Check out
            </a>
          </div>
        </div>
      </div>
    </div>

    // <a
    //   href={url}
    //   target="_blank"
    //   className="Projects-card"
    // >
    //   <img className="card-img" src={img} />
    //   <h4>{name}</h4>
    //   <p>{desc}</p>
    //   <div className="card-technologies flex-row">
    //     {logos.map((item, i) => (
    //       <FontAwesomeIcon
    //         key={i}
    //         className="tech-icons"
    //         icon={item.icon}
    //         color={item.color}
    //       />
    //     ))}
    //   </div>
    // </a>
  );
};

export default Card;
