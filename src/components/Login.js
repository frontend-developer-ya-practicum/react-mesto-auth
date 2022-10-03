import { useState } from "react";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(credentials);
  }

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          value={credentials.email}
          onChange={handleChange}
          className="login__input"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
        <input
          value={credentials.password}
          onChange={handleChange}
          className="login__input"
          type="password"
          placeholder="Пароль"
          name="password"
          id="password"
          required
        />
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
