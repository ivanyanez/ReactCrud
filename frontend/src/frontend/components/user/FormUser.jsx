import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome..."
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o e-mail..."
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Salvar
          </button>

          <button
            className="btn btn-secondary ml-2"
            onClick={(e) => this.clear(e)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
