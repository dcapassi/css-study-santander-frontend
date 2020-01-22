import React from "react";
import logo from "../src/img/logo.svg";
import { cartaoLogo, abrirContaLogo } from "./img/logos";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="App-logoHeader">
          <img className="App-header-logo" src={logo} alt="logo" />
        </div>

        <div className="logoHeaderSearch App-header-search">
          <input type="text" placeholder="O que você procura?" />
        </div>
        <div className="Blank"></div>

        <div className="logoHeader App-header-FacaSeuCartao">
          <img className="logoHeaderImg" alt="" src={cartaoLogo}></img>
          <p>Faça seu cartão</p>
        </div>

        <div className="logoHeader App-header-abrirConta">
          <img className="logoHeaderImg" alt="" src={abrirContaLogo}></img>
          <p>Abra sua Conta</p>
        </div>

        <div className="logoHeader App-header-acessarPessoaFisica">
          <p>
            <b>Acessar </b>Pessoa física
          </p>
          <div className="App-header-acessarPessoaFisica_Div">
            <input
              className="inp-icon"
              type="text"
              placeholder=" Insira seu CPF"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
