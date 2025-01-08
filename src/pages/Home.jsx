// pages/Home.js
import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <>
    <form type="submit" id="estudos" action="">
      <h1>Nome</h1>
      <input type="text" placeholder="Nome"/>
      <h1>Email</h1>
      <input type="email" placeholder="Email"/>
      <br /><br />
      <Button type="submit" target="_self" link="/agradecimento"></Button>
      </form>
    </>
  )
}

export default Home;
