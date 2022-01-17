import React, { useState } from "react";
import { useRequest } from "../../src/hooks";
import { Alert } from "../../src/components";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => router.push("/"),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    doRequest();
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <h1>Ingreso</h1>
      <div className="form-group">
        <label htmlFor="email">Correo</label>
        <input
          id="email"
          name="email"
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Alert errors={errors} />

      <button className="btn btn-primary">Iniciar Sesión</button>
    </form>
  );
};

export default Signin;
