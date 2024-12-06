import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Input, BlueButton } from "lib-texsa";
export default function Login({ setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simula o login
    localStorage.setItem("token", "fakeToken");
    setIsLogin(true);
    navigate("/");
  };

  return (
    <div className="flex w-full h-[100vh] place-content-center">
      <div className="flex flex-col w-2/3 gap-16 p-4 m-auto bg-white border rounded-lg shadow-md md:w-1/2 text-slate-600">
        <div className="flex flex-col gap-2">
          <img
            src="/logo.png"
            alt="logo do site"
            className="w-32 m-auto lg:w-48"
          />
          <Input
            type="text"
            label="Login"
            placeholder="Insira seu e-mail ou nome de usuário"
            value={username}
            customStyles={
              "lg:h-12 hover:border-blue-500 transition focus:border-blue-500"
            }
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Senha"
            value={password}
            placeholder="Senha"
            customStyles={
              "lg:h-12 hover:border-blue-500 transition focus:border-blue-500"
            }
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <BlueButton
          text={"Fazer Login"}
          customStyles={"w-fit lg:w-48 lg:text-lg m-auto"}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

Login.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};
