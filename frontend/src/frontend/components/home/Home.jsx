import React from "react";
import Main from "../templates/Main";
import UserEmail from "../user/FormUser";

export default (props) => (
  <Main
    icon="home"
    title="Início"
    subtitle="Segundo Projeto do Capitulo de React"
  >
    <div className="display-4"> Bem Vindo !</div>

    <hr />
    <p className="mb-0">Sistema Cadastro de Usuario desenvolvido em REACT</p>
  </Main>
);
