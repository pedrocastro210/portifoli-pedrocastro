import logo from "../../assets/logo.png";
import infoLogo from "../../assets/infoLogo.png";
import "./style.css";
import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export const BackgroundAnimated = () => {
  return (
    <div className="container demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <div className="main-header">
            <img className="logo" src={logo} alt="" />
            <img className="info-logo" src={infoLogo} alt="" />
            {/* <p className="main-bio">Desenvolvedor Front-End</p> */}
          </div>
          <div className="main-icons">
            <a href="https://github.com/pedrocastro210" target={"_blank"}>
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/pedrocastro210/"
              target={"_blank"}
            >
              <LinkedinOutlined />
            </a>
            <a
              href="https://www.instagram.com/pedro_castro210"
              target={"_blank"}
            >
              <InstagramOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
