import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/NavBar";
import { toast } from "react-toastify";

import {
  createRegisterDTO,
  registerUser,
} from "../../services/authorizeService";

const RegisterView = () => {
  const [ Email, setEmail] = useState("");
  const [ Username, setUsername ] = useState("");
  const [ Password, setPassword ] = useState();
  const [ CheckPassword, setCheckPassword ] = useState("");

  const handleRegister = async (e) => {
    if (Email === "" || Password === "" || Username === "") {
      toast.error("Wypełnij wszystkie dane");
    } else {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      if (!Email.match(validRegex)) {
        toast.error("Wpisz poprawny adres email");
        return;
      } else if (!Password.match(strongRegex)) {
        toast.error(
          "Hasło musi się składać z conajmniej 6 znaków, dużej i małej litery, cyfry i znaku specjalnego"
        );
        return;
      } else if (Password !== CheckPassword) {
        toast.error("Given passwords must be identical!");
        return;
      }
      let registerDTO = createRegisterDTO(Email, Username, Password);
      await registerUser(registerDTO);
    }
  }

    return (
      <>
        <Navbar />
        <form>
          <legend>Register</legend>
          <fieldset>
            <label htmlFor="email" className="vhide">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username" className="vhide">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password" className="vhide">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="vhide">
              Repeat Password
            </label>
            <input
              id="password2"
              name="password2"
              type="password"
              placeholder="Repeat Password"
              onChange={(e) => setCheckPassword(e.target.value)}
            />

            <button className="signin" onClick={(e) => handleRegister()}>
              Register
            </button>
          </fieldset>
          Already have an account? <Link to="/login">Login!</Link>
        </form>
      </>
    );
  };

export default RegisterView;
