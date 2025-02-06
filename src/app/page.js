'use client';
import { useState } from "react";
import estilos from "./page.module.css";
import Image from "next/image";
import logo from '../../public/barbearia.png';
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";



export default function Home() {


  const [alterarFundoPagina, setAlterarFundoPagina] = useState(false);

  function trocaTema() {
    setAlterarFundoPagina(!alterarFundoPagina);
  }

  return (
    <div className={alterarFundoPagina ? estilos.page_dark : estilos.page_light}>
      <main className={estilos.main}>
        <div className={estilos.container_topo}>
          <Image className={estilos.img} src={logo} alt="Imagem da logo da barbearia" />
          <button className={estilos.btn} onClick={trocaTema}>
            {alterarFundoPagina ? <BsSun className={estilos.icons} /> : <BsMoon />}
          </button>
        </div>
        <div className={estilos.container_banner}>

        </div>
        <div className={estilos.container_informacao}>
          <h1>Bem-vindo a Barber Shop</h1>

          <p>
            Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
          </p>

          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
          </p>

          <p className={estilos.paragrafo_diferente}>
            S. Kelly
          </p>
        </div>
      </main>
    </div>
  );
}
