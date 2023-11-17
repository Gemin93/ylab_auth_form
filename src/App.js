import { useRef, useState, useEffect } from "react";
import "./App.css";

async function serializeForm(formNode) {
  const formData = new FormData(formNode);
  const object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });

  console.log(object);
  return JSON.stringify(object);
}

async function sendData(data) {
  return await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  }).then((data) => {
    alert("Success login");
    data = {};
  });
}

function ApplicationForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (formData) {
      sendData(formData);
    }
  }, [formData]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = await serializeForm(formRef.current);
    setFormData(data);
  };

  return (
    <div className="wrap">
      <div className="registration-form">
        <form
          className="form"
          ref={formRef}
          id="auth"
          onSubmit={handleFormSubmit}
        >
          <div className="field">
            <label className="label" htmlFor="login">
              Логин:
            </label>
            <input
              className="input"
              id="login"
              name="email"
              type="email"
              maxLength="25"
              required
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Пароль:
            </label>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          <div className="wrap-button">
            <button className="button" id="buttonLogin" type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;
