import { useContext } from "react";
import { LoadContext } from "../../App";

import Card from "./Card";

import { projects } from "../../data";

const Projects = () => {
  const active = useContext(LoadContext);

  const handleProjects = () => {
    // map through projects arr and return Card
    const projectsHTML = projects.map((project) => {
      const { image, name, desc, logos, url, id } = project;
      return (
        <Card
          key={id}
          img={image}
          name={name}
          desc={desc}
          logos={logos}
          url={url}
        />
      );
    });
    return projectsHTML;
  };

  return (
    <section
      className={active ? "Projects flex-col" : "Projects flex-col hidden"}
      id="projects"
    >
      <div className="container-small">
        <h2 className="Projects-heading">projects</h2>
        <div className="Projects-wrapper">
          {handleProjects()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
