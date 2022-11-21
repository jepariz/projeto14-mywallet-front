import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useState, useContext } from "react";
import MyContext from "../contexts/MyContext";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const {setToken } = useContext(MyContext);
  const navigate = useNavigate();

 async function handleLogin(e) {

  e.preventDefault();
  
    const promise = axios.post(
      "http://localhost:5000",
      {
        email: email,
        password: password,
      }
    );

    promise.then((res) => {
      console.log(res.data);
      setToken(res.data.token)
      navigate("/carteira");
    });

    promise.catch((err) => {
      alert(err.response.data);
      setLogin(false);
      return
    });

    setLogin(true);
    return
  }

  return (
    <LoginContainer>
      <div>
        <ion-icon name="wallet-outline"></ion-icon>
        <h1>My Wallet</h1>
      </div>
      <LoginForm>
        <input
          type="email"
          placeholder="E-mail"
          disabled={login ? true : false}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          disabled={login ? true : false}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        {login ? (
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
        ) : (
          <button onClick={handleLogin}>Entrar</button>
        )}
      </LoginForm>
      <Link to="/registro" style={{ textDecoration: "none" }}>
        {" "}
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  text-align: center;
  margin-top: 200px;
 

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

const LoginForm = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 326px;
    height: 58px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
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
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
  }
`;
