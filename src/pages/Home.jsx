// pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/agradecimento");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Nome</h1>
        <input type="text" placeholder="Nome" />
        <h1>Email</h1>
        <input type="email" placeholder="Email" />
        <br /><br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Home;