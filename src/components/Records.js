import styled from "styled-components";

export default function Records() {
  return (
    <WalletRecords>
    <p>
      Não há registros de <br></br> entrada ou saída
    </p>
  </WalletRecords>
  )
}

const WalletRecords = styled.div`
  margin-top: 20px;
  width: 326px;
  height: 446px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;

  p {
    margin-top: 60%;
    color: #868686;
    font-size: 20px;
  }
`;


