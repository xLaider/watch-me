import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/NavBar";
import { loginUser } from "../../services/authorizeService";
import { toast } from "react-toastify";

const LoginView = () => {
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);

  const login = async () => {
    let loginObject = {
      email: Email,
      password: Password,
    };
    if (Email !== null && Password !== "") {
      let status = await loginUser(loginObject);
      if (status.status === 200){
        window.location.reload(false);
      }
    }else{
      toast.error("Wypełnij wszystkie dane!")
    }
    
  };

  const handleLogin = (e) => {
    login();
  };

  return (
    <>
    <Navbar/>
      <legend>Sign In</legend>
      <fieldset>
        <label for="email" className="vhide">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="password" className="vhide">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signin" onClick={(e) => handleLogin(e)}>Sign in</button>
      </fieldset>
      Don't have an account yet? <Link to="/register">Register!</Link>
    </>
    
  );
};

export default LoginView;
