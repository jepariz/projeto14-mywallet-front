import styled from "styled-components";
import Records from "../components/Records";
import RecordOptions from "../components/RecordOptions";

export default function Wallet() {
  return (
    <WalletContainer>
      <WalletHeader>
        <h2>Olá, Fulano</h2>
        <ion-icon name="exit-outline"></ion-icon>
      </WalletHeader>
     <Records />
     <RecordOptions />
    </WalletContainer>
  );
}

const WalletContainer = styled.div`
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WalletHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 26px;
    font-weight: 700;
  }

  ion-icon {
    font-size: 26px;
    align-self: center;
  }
`;



