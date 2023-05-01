import { useEffect, useRef } from "react";
import { ProjectCard } from "../projectCard";
import "./style.css";
import AnimatedElement from "../animatedElement";

export const Portfolio = () => {
  return (
    <div className="containner">
      <h3>My top projects</h3>
      <h3>React</h3>
      <div className="top-projects">
        <AnimatedElement
          elementId="left"
          project={
            <ProjectCard
              id="vidaFinanceira"
              title={"Vida Financeira"}
              description={`Com esta aplicação, o usuário poderá cadastrar suas despesas e receitas de forma rápida e fácil, categorizando cada transação por tipo e valor.
          Com uma interface intuitiva e fácil de usar, a aplicação pode ser acessada em qualquer lugar.`}
              link={"https://vida-financeira.vercel.app/"}
              nameLink={"Acessar Projeto"}
            />
          }
        />

        <AnimatedElement
          elementId="left"
          project={
            <ProjectCard
              id="devHub"
              title={"Dev Hub"}
              description={
                "O projeto tem como objetivo permitir que os desenvolvedores possam acompanhar seu progresso em relação a suas habilidades técnicas e identificar áreas de melhoria para aprimorar seu conhecimento. Com esta aplicação, os desenvolvedores poderão cadastrar seus conhecimentos em diferentes tecnologias, linguagens de programação, frameworks e outras habilidades técnicas relevantes para seu trabalho."
              }
              link={"https://dev-hub-mu.vercel.app/home"}
              nameLink={"Acessar Projeto"}
            />
          }
        />

        <AnimatedElement
          elementId="left"
          project={
            <ProjectCard
              id="burguerDev"
              title={"Burguer Dev"}
              description={
                "Projeto de uma Hamburgueria desenvolvido em React e TypeScript. O projeto tem como objetivo fornecer uma experiência de compra online agradável e intuitiva para os clientes da hamburgueria. Com esta aplicação, os clientes podem navegar pelos produtos, adicionando itens ao seu carrinho de compras e filtrar por categorias na barra de pesquisa."
              }
              link={"https://burguer-dev.vercel.app/"}
              nameLink={"Acessar Projeto"}
            />
          }
        />
      </div>
      <h3>React Native</h3>
      <div className="top-projects">
        <AnimatedElement
          elementId="rigth"
          project={
            <ProjectCard
              id="startCode"
              title={"Start Code"}
              description={
                "Um aplicativo em React Native e Expo que tem como objetivo reunir diversas inicializações de projetos em várias linguagens de programação em um só lugar de forma simples e intuitiva. Com o Start Code, os usuários terão acesso a uma grande variedade de projetos com diferentes configurações de inicialização para diferentes linguagens de programação. Isso permitirá que desenvolvedores de todos os níveis possam iniciar seus projetos com maior facilidade e eficiência."
              }
              link={
                "https://www.figma.com/proto/9Y0DFcjr48M8oIK2mBUXk5?node-id=1-294&locale=en"
              }
              nameLink={"Acessar Projeto"}
            />
          }
        />

        <AnimatedElement
          elementId="rigth"
          project={
            <ProjectCard
              id="receitaFacil"
              title={"Receita Fácil"}
              description={
                "Um aplicativo em React Native e Expo que tem como objetivo reunir milhares de receitas de forma simples e intuitiva, com um passo a passo detalhado, lista de ingredientes e um vídeo de explicação. O Receita Fácil é uma solução ideal para pessoas que desejam explorar novos pratos e aprimorar suas habilidades na cozinha. Com uma interface fácil de usar, os usuários podem pesquisar por receitas de acordo com suas preferências. Cada receita apresenta um passo a passo detalhado, incluindo a lista de ingredientes necessários e o tempo de preparo. Além disso, cada receita também conta com um vídeo de explicação, permitindo que os usuários sigam a receita com mais facilidade e confiança."
              }
              link={
                "https://www.figma.com/proto/nFojUBEs5fCcuW77D0cYPd?node-id=1-294&locale=en"
              }
              nameLink={"Acessar Projeto"}
            />
          }
        />
      </div>
    </div>
  );
};
