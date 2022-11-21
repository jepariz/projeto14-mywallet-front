import styled from "styled-components";
import Records from "../components/Records";
import RecordOptions from "../components/RecordOptions";
import { useContext, useEffect } from "react";
import MyContext from "../contexts/MyContext";
import {Link } from "react-router-dom";

export default function Wallet() {

  const {username} = useContext(MyContext)

  return (
    <WalletContainer>
      <WalletHeader>
        <h2>Olá, {username}</h2>
        <Link to="/" style={{ color: "#fff" }}><ion-icon name="exit-outline"></ion-icon></Link>
      
      </WalletHeader>
     <Records />
     <RecordOptions />
    </WalletContainer>
  );
}

const WalletContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WalletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 28px;
  position: fixed;
  top:0;
  left:0;

  h2 {
    font-size: 26px;
    font-weight: 700;
  }

  ion-icon {
    font-size: 26px;
    align-self: center;
  }
`;



