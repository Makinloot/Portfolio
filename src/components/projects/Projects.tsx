import Card from "./Card";

import { projects } from "../../data";

const Projects = () => {
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
    // return mapped card
    return projectsHTML;
  };

  return (
    <div className="Projects flex-col">
      <div className="container-small">
        <div className="Projects-wrapper">
          {handleProjects()}
          <a
            href="https://github.com/Makinloot?tab=repositories"
            target="_blank"
            className="Projects-card flex-col"
          >
            <div className="flex-col">See more</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
