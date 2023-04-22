import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import auth from "../utils/Auth";

function Login({ ShowInfoTooltip, onLogin }) {
  const navigate = useNavigate();

  const defaultValues = {
    email: "",
    password: "",
  };

  const [InputValues, setInputValues] = useState(defaultValues);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setInputValues((state) => ({ ...state, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    auth
      .authorize(InputValues)
      .then((res) => {
        if (res.token) localStorage.setItem("token", res.token);
        resetForm();
        onLogin();
        navigate("/");
      })
      .catch((err) => {
        const text = err.message || "Что-то пошло не так! Попробуйте еще раз.";
        ShowInfoTooltip({
          text: text,
          isSuccess: false,
        });
      });
  }

  function resetForm() {
    setInputValues({ ...defaultValues });
  }

  return (
    <>
      <main>
        <div className="auth">
          <h2 className="auth__title">Вход</h2>
          <form className="auth__form" onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              placeholder="Email"
              className="auth__input"
              name="email"
              id="email"
              autoComplete="email"
              value={InputValues.email || ""}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              className="auth__input"
              autoComplete="password"
              value={InputValues.password || ""}
              onChange={handleChange}
              required
            />
            <button type="submit" className="auth__submit">
              Войти
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
