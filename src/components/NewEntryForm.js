import styled from "styled-components";

export default function NewDeposit() {
  return (
    <NewDepositContainer>
      <div>
        <ion-icon name="trending-up-outline"></ion-icon>
        <p>Nova Entrada</p>
      </div>
      <NewDepositForm>
        <input type="number" min="0.00" placeholder="Valor"></input>
        <input type="text" placeholder="Descrição"></input>
        <button>Salvar</button>
      </NewDepositForm>
    </NewDepositContainer>
  );
}

const NewDepositContainer = styled.div`
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

  ion-icon{
    font-size: 30px;
  }
  }

 
`;

const NewDepositForm = styled.form`

margin-top: 40px;

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
    font-weight: 700;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
  }

`