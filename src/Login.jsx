import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Input, GreenButton } from "lib-texsa";
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
    <div className="flex w-screen h-screen">
      <div className="flex flex-col w-1/2 gap-16 p-4 m-auto rounded-lg bg-slate-300 text-slate-600">
        <div className="flex flex-col gap-2">
          <img
            src="/logo.png"
            alt="logo do site"
            className="w-32 m-auto lg:w-48"
          />
          <Input
            type="text"
            label="Login"
            placeholder="Username"
            value={username}
            customStyles={"lg:h-12"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            text="whatsapp"
            label="Password"
            value={password}
            placeholder="Password"
            customStyles={"lg:h-12"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <GreenButton
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
