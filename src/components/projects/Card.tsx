import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <a 
      href={url} 
      target="_blank" 
      className="Projects-card"
    >
      <img className="card-img" src={img} />
      <h4>{name}</h4>
      <p>{desc}</p>
      <div className="card-technologies flex-row">
        {logos.map((item, i) => (
          <FontAwesomeIcon
            key={i}
            className="tech-icons"
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </a>
  );
};

export default Card;
