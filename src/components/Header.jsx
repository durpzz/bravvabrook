import { useState } from "react";
import "./Header.css";
import logoHeader from "../assets/logo/logo_header.png";
import wordmark from "../assets/logo/bravabrook.png";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">

        <img className="logo" src={logoHeader} alt="logo" />

        <img className="wordmark" src={wordmark} alt="BravaBrook" />

        <div className="header-right">

          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          <button className="cta">Comprar</button>

        </div>

      </header>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>

        <button
          className="close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav>
          <a href="#rituais">Rituais</a>
          <a href="#produtos">Coleção</a>
          <a href="#formula">Fórmula</a>
          <a href="#beneficios-detalhe">Vitaminas</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#instagram">Instagram</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

      </div>
    </>
  );
}
