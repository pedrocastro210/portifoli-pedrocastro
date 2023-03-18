import { ProjectCard } from "../projectCard";
import "./style.css";

export const Portfolio = () => {
  return (
    <div className="containner">
      <h3>My top projects</h3>
      <div className="top-projects">
        <ProjectCard
          id="vidaFinanceira"
          title={"Vida Financeira"}
          description={`Com esta aplicação, o usuário poderá cadastrar suas despesas e receitas de forma rápida e fácil, categorizando cada transação por tipo e valor.
          Com uma interface intuitiva e fácil de usar, a aplicação pode ser acessada em qualquer lugar.`}
          link={""}
          nameLink={"vercel.com"}
        />
        <ProjectCard
          id="devHub"
          title={"Dev Hub"}
          description={
            "O projeto tem como objetivo permitir que os desenvolvedores possam acompanhar seu progresso em relação a suas habilidades técnicas e identificar áreas de melhoria para aprimorar seu conhecimento. Com esta aplicação, os desenvolvedores poderão cadastrar seus conhecimentos em diferentes tecnologias, linguagens de programação, frameworks e outras habilidades técnicas relevantes para seu trabalho."
          }
          link={""}
          nameLink={"vercel.com"}
        />
        <ProjectCard
          id="burguerDev"
          title={"Burguer Dev"}
          description={
            "Projeto de uma Hamburgueria desenvolvido em React e TypeScript. O projeto tem como objetivo fornecer uma experiência de compra online agradável e intuitiva para os clientes da hamburgueria. Com esta aplicação, os clientes podem navegar pelos produtos, adicionando itens ao seu carrinho de compras e filtrar por categorias na barra de pesquisa."
          }
          link={""}
          nameLink={"vercel.com"}
        />
      </div>
    </div>
  );
};
