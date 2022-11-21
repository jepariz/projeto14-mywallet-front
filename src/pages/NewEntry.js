import styled from "styled-components";
import { useState, useContext } from "react";
import MyContext from "../contexts/MyContext";
import dayjs from "dayjs";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function NewEntry() {
  const { tipo, token } = useContext(MyContext);

  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }

  function novaEntrada(){

    const promise = axios.post("http://localhost:5000/transacoes", 
    {
      valor: Number(valor).toFixed(2),
      descricao,
      tipo: tipo,
    }, config);
 
    promise.then(() => {
     alert("Entrada cadastrada com sucesso!")
      navigate("/carteira");
    });
   
    promise.catch((err) => {
      alert(err.response.data);
      return
    });
  }

  function novaSaida (){
    const promise = axios.post("http://localhost:5000/transacoes", 
    {
      valor: Number(- valor).toFixed(2),
      descricao,
      tipo: tipo,
    }, config);
 
    promise.then(() => {
     alert("Saída cadastrada com sucesso!")
      navigate("/carteira");
    });
   
    promise.catch((err) => {
      alert(err.response.data);
      return
    });
  }


  return (
    <>
      {tipo === "entrada" ? (
        <NewEntryContainer>
          <div>
            <ion-icon name="trending-up-outline"></ion-icon>
            <p>Nova Entrada</p>
          </div>
          <NewEntryForm>
            <input
              type="number"
              min="0.00"
              placeholder="Valor"
              onChange={(e) => setValor(e.target.value)}
              value={valor}
            ></input>
            <input
              type="text"
              placeholder="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
              value={descricao}
            ></input>
            <button onClick={novaEntrada}>Salvar</button>
          </NewEntryForm>
        </NewEntryContainer>
      ) : (
        <NewEntryContainer>
          <div>
            <ion-icon name="trending-down-outline"></ion-icon>
            <p>Nova Saída</p>
          </div>
          <NewEntryForm>
            <input
              type="number"
              min="0.00"
              placeholder="Valor"
              onChange={(e) => setValor(e.target.value)}
              value={valor}
            ></input>
            <input
              type="text"
              placeholder="Descrição"
              onChange={(e) => setDescricao(e.target.value)}
              value={descricao}
            ></input>
            <button onClick={novaSaida}>Salvar</button>
          </NewEntryForm>
        </NewEntryContainer>
      )}
    </>
  );
}

const NewEntryContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;

    p {
      font-size: 26px;
      font-weight: 700;
    }

    ion-icon {
      font-size: 30px;
    }
  }
`;

const NewEntryForm = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    margin-bottom: 5px;
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
    font-weight: 700;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
  }
`;
