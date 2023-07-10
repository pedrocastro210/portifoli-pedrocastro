import React, { useEffect, useState } from "react";
import "./style.css";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSaindo, setModalSaindo] = useState(false);

  useEffect(() => {
    if (!isOpen && modalSaindo) {
      const timeout = setTimeout(() => {
        setModalSaindo(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, modalSaindo]);

  const openModal = () => {
    setIsOpen(true);
    setModalSaindo(false);
  };

  const closeModal = () => {
    setModalSaindo(true);

    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, 800);

    return () => clearTimeout(timeout);
  };

  return (
    <div>
      <button className="btn-modal" onClick={openModal}>
        Sobre-Mim
      </button>
      {isOpen && (
        <div className="modal">
          <div
            className={`modal-content animate__animated ${
              modalSaindo ? "animate__bounceOut" : "animate__fadeInDown"
            }`}
          >
            <span onClick={closeModal} className="close-button">
              &times;
            </span>
            <p>
              Olá! Meu nome é Pedro e sou um desenvolvedor Full-Stack com foco
              em criar experiências digitais incríveis.
              <br /> <br /> Com formação em Desenvolvedor Full-Stack na Kenzie
              Academy Brasil e graduação em Análise e Desenvolvimento de
              Sistemas na Univsersidade UniCesumar, adquiri habilidades sólidas
              tanto no desenvolvimento front-end quanto no back-end. Sou
              especializado em HTML, CSS, JavaScript, TypeScript, Node.js e
              Python, além de ter experiência com frameworks como React,
              Angular, DJango e Express. <br /> <br />
              Tenho trabalhado em projetos desafiadores, desde a criação de
              websites responsivos até o desenvolvimento de aplicativos web
              escaláveis. Recentemente, estou trabalhando no desenvolvimento
              Front-End usando Liferay, é uma plataforma de software empresarial
              de código aberto que permite a criação de portais web e
              aplicativos corporativos.
              <br />
              <br /> Se você está em busca de um desenvolvedor Full-Stack com
              habilidades técnicas e uma abordagem orientada a resultados, entre
              em contato comigo pelo meu e-mail: <i>phfdecastro@hotmail.com</i>
              ou visite meu GitHub em:
              <a href="https://github.com/pedrocastro210" target="_blank">
                <i>Meu GitHub</i>
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
