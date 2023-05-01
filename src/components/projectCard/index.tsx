import { ButtonProject } from "../buttonProject";
import "./style.css";

interface IPropsCard {
  id?: string;
  title: string;
  description: string;
  link: string;
  nameLink: string;
}

export const ProjectCard = ({
  id,
  title,
  description,
  link,
  nameLink,
}: IPropsCard) => {
  return (
    <div id={id} className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonProject link={link} nameLink={nameLink} />
    </div>
  );
};
