import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import auth from "../utils/Auth";

function Register({ showInfoTooltip }) {
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
      .register(InputValues)
      .then((res) => {
        showInfoTooltip({
          text: "Вы успешно зарегистрировались!",
          isSuccess: true,
        });
        resetForm();
        navigate("/sign-in");
      })
      .catch((err) => {
        showInfoTooltip({
          text: "Что-то пошло не так! Попробуйте еще раз.",
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
          <h2 className="auth__title">Регистрация</h2>
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
              Зарегестрироваться
            </button>
          </form>
          <p className="auth__clarification">
            Уже Зарегестрированы?{" "}
            <Link className="auth__link" to="/sign-in">
              Войти
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Register;
