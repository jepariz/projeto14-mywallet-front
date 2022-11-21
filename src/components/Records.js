import styled from "styled-components";
import { useContext, useEffect, useState} from "react";
import MyContext from "../contexts/MyContext";
import axios from "axios";

export default function Records() {
  const { setTransacoes, token, transacoes } = useContext(MyContext);
  let sum;
  let total;

  const lastTransactions = transacoes.slice(-10)

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/transacoes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    promise.then((res) => {
      setTransacoes(res.data);
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });


  }, []);

  function somaTransacoes (){

    const valores = lastTransactions.map((t) => Number(t.valor))

    sum = valores.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);

    total = Math.sign(sum)

    console.log(total)
  }

  somaTransacoes()

  return (

    <>
    {transacoes.length > 0 ?  
    <WalletRecords>
      {lastTransactions.map((t, index) => (
      <TransactionsContainer positive={Math.sign(t.valor) === 1}>
        <DataDescription>
          <p>{t.data}</p>
          <p>{t.descricao}</p>
        </DataDescription>
        <div>
          <p>{t.valor}</p>
        </div>
      </TransactionsContainer>))}
      <Total positive={total === 1}>
        <p>SALDO</p>
        <p>{sum}</p>
      </Total>
    </WalletRecords>
     :  
    <WalletRecords>
      <DefaultMessage>
        Não há registros de <br></br> entrada ou saída
      </DefaultMessage>
    </WalletRecords> }
  
    </>
   
  );
}

const WalletRecords = styled.div`
  margin-top: 100px;
  width: 326px;
  height: 446px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const DefaultMessage = styled.p`
  margin-top: 60%;
  color: #868686;
  font-size: 20px;
  text-align: center;
`;

const TransactionsContainer = styled.div`

width: 100%;
box-sizing: border-box;
padding: 10px;
display: flex;
justify-content: space-between;

  p{
    font-size: 16px;
    color: ${(props) => props.positive ? "green" : "red"}
  }
`

const DataDescription = styled.div`
display: flex;
gap: 8px;

p:nth-child(1){
    font-size: 16px;
    color: #C6C6C6;
  }

p:nth-child(2){
  font-size: 16px;
  color: #000;
}

`

const Total = styled.div`
width: 100%;
box-sizing: border-box;
padding: 10px;
display: flex;
justify-content: space-between;
position: absolute;
bottom: 0;
left: 0;

p:nth-child(1){
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }

p:nth-child(2){
  font-size: 16px;
  color: ${(props) => props.positive ? "green" : "red"}
}

`