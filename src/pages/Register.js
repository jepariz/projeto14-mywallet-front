import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [registerOk, setRegisterOk] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  function handleRegister() {

    if(password === passwordConfirm){
      setPassword(passwordConfirm)
    }else{
      alert("As senhas não conferem. Por favor, confirme a sua senha!")
      return
    }

    const promise = axios.post(
      "",
      {
        email: email,
        name: name,
        password: passwordConfirm,
      }
    );
    promise.then((res) => {
      setRegisterOk(true);
      navigate("/");
    });

    promise.catch((err) => {
      alert(err.response.data.details);
      setRegister(false);
    });

    setRegister(true);
  }


  return (
    <RegisterContainer>
      <div>
        <ion-icon name="wallet-outline"></ion-icon>
        <h1>My Wallet</h1>
      </div>
      <RegisterForm>
        <input
          type="text"
          placeholder="Nome"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <input
          type="password"
          placeholder="Confirme a senha"
          disabled={register && !registerOk ? true : false}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        ></input>
        {register && !registerOk ? (
            <button>
              <ThreeDots
                height="60"
                width="60"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </button>
          ) : ( <button onClick={() => handleRegister()}>Cadastrar</button>)}
      </RegisterForm>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  text-align: center;
  margin-top: 120px;
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
    padding: 10px;
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
