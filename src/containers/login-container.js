import React from 'react';

// Styles.
import '../styles/login-container.scss';

const LoginContainer = () => (
  <main className="u-center-block login-container">
    <div className="u-center-block__content">
      <h1 className="c-heading">Porfavor ingrese</h1>
      <form action="#">
        <div className="o-form-element">
          <div className="c-input-group c-input-group--stacked">
            <div className="o-field">
              <input type="text" className="c-field" placeholder="Email" />
            </div>
            <div className="o-field">
              <input type="text" className="c-field" placeholder="Contraseña" />
            </div>
          </div>
        </div>
        <label htmlFor="remember_me" className="o-form-element c-label">
          <input id="remember_me" type="checkbox" />
          Recordarme
        </label>
        <div className="o-form-element">
          <button className="c-button c-button--brand c-button--block">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  </main>
);

export default LoginContainer;
