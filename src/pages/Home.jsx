// pages/Home.js
import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <>
      <h1>Nome</h1>
      <input type="text" placeholder="Nome"/>
      <h1>Email</h1>
      <input type="email" placeholder="Email"/>
      <br /><br />
      <Button type="submit" target="_self" link="/agradecimento"></Button>
    </>
  )
}

export default Home;
