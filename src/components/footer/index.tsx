import { CopyrightOutlined } from "@ant-design/icons";
import "./style.css";

export const Footer = () => {
  return (
    <footer className="footer-containner">
      <div className="info">
        <div>
          <h3>Contatos</h3>
          <p>
            Email: <a href="">phfdecastro@hotmail.com</a>
          </p>
          <p>Celular: +55 (24) 97402-9166</p>
        </div>
        {/* <a href="">Sobre-mim</a> */}
      </div>
      <div className="box-fixed">
        <p>
          <CopyrightOutlined /> 2021-2023 Pedro Castro
        </p>
      </div>
    </footer>
  );
};
