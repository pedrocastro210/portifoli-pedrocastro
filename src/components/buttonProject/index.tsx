import "./style.css";

type TButtonProject = {
  link: string;
  nameLink: string;
};

export const ButtonProject = ({ link, nameLink }: TButtonProject) => {
  return (
    <button className="learn-more">
     <a href={link} target="_blank">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{nameLink}</span>
      </a>
    </button>
  );
};
