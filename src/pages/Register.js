import React from "react";
import styled from "styled-components";

function Register() {
  return (
    <RegisterContainer>
      <div>
        <ion-icon name="wallet-outline"></ion-icon>
        <h1>My Wallet</h1>
      </div>
      <RegisterForm>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <button>Entrar</button>
      </RegisterForm>

      <p>Primeira vez? Cadastre-se!</p>
    </RegisterContainer>
  );
}

export default Register;

const RegisterContainer = styled.div`
  text-align: center;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  h1 {
    font-size: 35px;
    color: #fff;
    font-family: "Montserrat Alternates", sans-serif;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    color: white;
  }

  ion-icon {
    font-size: 35px;
  }
`;

const RegisterForm = styled.form`
  margin-top: 30px;

  input {
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    margin-bottom: 10px;
    color: #a0a5ba;
    font-size: 20px;

    &::placeholder {
      font-size: 20px;
      color: #dbdbdb;
      padding: 5px;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      color: #dbdbdb;
      background-color: #f2f2f2;
    }
  }

  button {
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    color: #f2f2f2;
    font-size: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
  }
`;
