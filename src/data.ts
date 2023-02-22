import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faReact,
  faSass,
  faHtml5,
  faCss3Alt,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import gameIMG from "./assets/game-bg.png";
import weatherIMG from "./assets/weather-bg.png";
import corpusIMG from "./assets/corpus-bg.png";
import dictionaryIMG from "./assets/dictionary-bg.png";
import startupIMG from "./assets/startup-bg.png";
import planetsIMG from "./assets/planets-bg.png";
import resumeIMG from "./assets/resume-bg.png";

export type ProjectsTypes = {
  id: number;
  image: string;
  name: string;
  desc: string;
  logos: {
    icon: IconProp;
    color: string;
  }[];
  url: string;
}[];

const colors = {
  html: "#F16529",
  javascript: "#F0DB4F",
  typescript: "#007acc",
  react: "#61DBFB",
  sass: "#CD6799",
  css: "#264de4",
};

// data for projects
export const projects: ProjectsTypes = [
  {
    id: 0,
    image: gameIMG,
    name: "Karma",
    desc: "Game website created with RAWG api, where user can search 300 000+ games, DLC, genres, similar games trailers & more.",
    logos: [
      {
        icon: faReact,
        color: colors.react,
      },
      {
        icon: faSquareJs,
        color: colors.typescript,
      },
      {
        icon: faSass,
        color: colors.sass,
      },
    ],
    url: "https://beautiful-salamander-e8d545.netlify.app",
  },
  {
    id: 1,
    image: weatherIMG,
    name: "Weather",
    desc: "Weather website where user can check out it's current location weather or search forecast data of any city/country.",
    logos: [
      {
        icon: faReact,
        color: colors.react,
      },
      {
        icon: faSquareJs,
        color: colors.typescript,
      },
      {
        icon: faSass,
        color: colors.sass,
      },
    ],
    url: "https://ornate-marshmallow-18e926.netlify.app",
  },
  {
    id: 2,
    image: corpusIMG,
    name: "Language Corpus",
    desc: "Website of Illia State University, where all kind of text data is stored which Illiauni has in its database.",
    logos: [
      {
        icon: faHtml5,
        color: colors.html,
      },
      {
        icon: faSass,
        color: colors.sass,
      },
      {
        icon: faSquareJs,
        color: colors.javascript,
      },
    ],
    url: "http://corpora.iliauni.edu.ge/search_words",
  },
  {
    id: 3,
    image: planetsIMG,
    name: "Planets",
    desc: "Planets website, which displays planets from our solar system in 3D model objects. This website was made using React + Three.js/fiber",
    logos: [
      {
        icon: faReact,
        color: colors.react,
      },
      {
        icon: faSass,
        color: colors.sass,
      },
    ],
    url: "https://voluble-basbousa-0f61b9.netlify.app/mercury",
  },
  {
    id: 4,
    image: resumeIMG,
    name: "Redberry",
    desc: "This project was created according to Redberry's given challenge. User can create resume and save it to Redberry's API.",
    logos: [
      {
        icon: faReact,
        color: colors.react
      },
      {
        icon: faSquareJs,
        color: colors.typescript
      },
      {
        icon: faSass,
        color: colors.sass,
      }
    ],
    url: "https://verdant-cascaron-b7acd2.netlify.app"
  },
  {
    id: 5,
    image: dictionaryIMG,
    name: "Unilab Dictionary",
    desc: "Dictionary website where i worked as frontend developer for Unilab project, backened side is not yet written",
    logos: [
      {
        icon: faHtml5,
        color: colors.html,
      },
      {
        icon: faCss3Alt,
        color: colors.css,
      },
      {
        icon: faSquareJs,
        color: colors.javascript,
      },
    ],
    url: "https://gkhundadze.github.io/unilab-dictionary/index.html",
  },
  {
    id: 6,
    image: startupIMG,
    name: "Landing Page",
    desc: "Just a simple landing page, fully responsive, I built for fun",
    logos: [
      {
        icon: faHtml5,
        color: colors.html,
      },
      {
        icon: faSass,
        color: colors.sass,
      },
      {
        icon: faSquareJs,
        color: colors.javascript,
      },
    ],
    url: "https://makinloot.github.io/startup-landing/",
  },
];

// data for experience section
export const EXP_DATA = [
  {
    position: "Frontend Dev",
    title: "Unilab Tbilisi",
    date: "2022 November - 2023 January",
    texts: [
      {
        text: "Create modern and maintanable code with old browser support for website",
      },
      {
        text: "Work with great team of developers and designers",
      },
      {
        text: "Communicate with team on daily basis for maximum results",
      },
    ],
  },
  {
    position: "Intern Dev",
    title: "Unilab Tbilisi",
    date: "2022 June - November",
    texts: [
      {
        text: "Finish older projects created by other developers",
      },
      {
        text: "Create real world project from scratch for children language scientists",
      },
      {
        text: "Taking more work than required to maximize absorbing knowledge",
      },
    ],
  },
];

// form data
type InputDataTypes = {
  wrapper_class: string;
  type: string;
  id: string;
  placeholder: string;
  name: string;
}[];

export const InputData: InputDataTypes = [
  {
    wrapper_class: "name-wrapper",
    type: "text",
    id: "name",
    placeholder: "Name",
    name: "name",
  },
  {
    wrapper_class: "email-wrapper",
    type: "email",
    id: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    wrapper_class: "subject-wrapper",
    type: "text",
    id: "subject",
    placeholder: "subject",
    name: "subject",
  },
  {
    wrapper_class: "textarea-wrapper",
    type: "text",
    id: "textarea",
    placeholder: "Message",
    name: "text",
  },
];
