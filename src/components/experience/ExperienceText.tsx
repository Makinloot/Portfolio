type ExperienceTextProps = {
  position: string;
  title: string;
  date: string;
  texts: {
    text: string;
  }[]
}


const ExperienceText: React.FC<ExperienceTextProps> = ({
  title,
  date,
  texts,
  position
}) => {
  return (
    <div className="Experience-text">
      <h4> <span>{position} | </span> {title}</h4>
      <strong>{date}</strong>
      <ul>
        {texts &&
          texts.map((text, i) => <li key={i}>{text.text}</li> )
        }
      </ul>
    </div>
  );
}

export default ExperienceText
