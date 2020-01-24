import React from "react";
import logo from "../src/img/logo.svg";
import "./Header.css";
import { cartaoLogo, abrirContaLogo } from "./img/logos";

function Logo() {
  return <img className="App-header-logo" src={logo} alt="logo" />;
}

function OqueVoceProcura() {
  return (
    <>
      <div className="logoHeaderSearch App-header-search">
        <input type="text" placeholder="O que você procura?" />
      </div>
      <div className="Blank"></div>
    </>
  );
}

function BotaoTextoIcone(props) {
  return (
    <>
      <div className="logoHeader App-header-abrirConta">
        <img className="logoHeaderImg" alt="" src={props.src}></img>
        <p>{props.txt}</p>
      </div>
    </>
  );
}

function Acessar() {
  return (
    <>
      <div className="logoHeaderPessoaFisica App-header-acessarPessoaFisica">
        <p>
          <b>Acessar </b>Pessoa física
        </p>
        <div className="App-header-acessarPessoaFisica_Div">
          <input
            className="inp-icon"
            type="text"
            placeholder=" Insira seu CPF"
            maxLength="15"
          />
        </div>
      </div>
    </>
  );
}

function Pannel() {
  return (
    <div className="Pannel">
      <h1>
        Cartão 1|2|3: o único cartão que multiplica seus pontos em até 3 vezes
      </h1>
      <div className="BackgroundImg" />
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="Layout">
        <div className="Header">
          <div className="App-logoHeader">
            <Logo />
          </div>

          <OqueVoceProcura />
          <BotaoTextoIcone src={abrirContaLogo} txt={"Abra a sua conta"} />
          <BotaoTextoIcone src={cartaoLogo} txt={"Faça o seu cartão"} />
          <Acessar />
        </div>
        <Pannel />
      </div>
    </>
  );
}

export default Header;
