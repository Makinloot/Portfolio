import { useState, useRef, useEffect } from "react";

export default function Burger(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close burger menu if clicked outside burger
  useEffect(() => {
    // check if user clicked inside burger menu
    const handleClass = (e: MouseEvent): void => {
      const divTarget = e.target as HTMLDivElement;
      const anchorTarget = e.target as HTMLAnchorElement;
      if (!menuRef.current?.contains(divTarget)) setOpen(false);
      else if (anchorTarget.localName === "a") setOpen(false);
    };

    // add and remove evnet listener on document
    document.addEventListener("mousedown", handleClass);
    return () => document.removeEventListener("mousedown", handleClass);
  }, []);

  return (
    <div className="Header-burger">
      <div
        className={
          open ? "burger-wrapper flex-col active" : "burger-wrapper flex-col"
        }
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className="burger-content" ref={menuRef}>
        <ul className="flex-col">
          <li>
            <a href="#about">about me</a>
          </li>
          <li>
            <a href="experience">experience</a>
          </li>
          <li>
            <a href={"/projects"}>projects</a>
          </li>
          <li>
            <a href={"/contact"}>contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
