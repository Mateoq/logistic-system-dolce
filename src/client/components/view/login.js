import React, { PropTypes } from 'react';

// Components.
import {
  InputBox,
  CheckBox,
  Button,
} from '../';

// Constants.
import {
  USERNAME,
  PASSWORD,
} from '../../../config/constants';

const Login = ({
  username,
  password,
  rememberMe,
  handleSubmit,
  handleInputChanges,
  handleToggleRememberMe,
}) => (
  <form action="#" onSubmit={handleSubmit}>
    <div className="o-form-element">
      <div className="c-input-group c-input-group--stacked">
        <div className="o-field">
          <InputBox
            name={`${USERNAME}_input`}
            value={username}
            group={USERNAME}
            onChange={handleInputChanges}
            placeholder={'Nombre de usuario'}
          />
        </div>
        <div className="o-field">
          <InputBox
            type={'password'}
            name={`${PASSWORD}_input`}
            value={password}
            group={PASSWORD}
            onChange={handleInputChanges}
            placeholder={'Contraseña'}
          />
        </div>
      </div>
    </div>
    <CheckBox
      name={'remember_me_input'}
      checked={rememberMe}
      onChange={handleToggleRememberMe}
    >
      Recordarme
    </CheckBox>
    <div className="o-form-element">
      <Button
        type={'submit'}
        classNames={'c-button--brand c-button--block'}
      >
        Ingresar
      </Button>
    </div>
  </form>
);

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChanges: PropTypes.func.isRequired,
  handleToggleRememberMe: PropTypes.func.isRequired,
};

export default Login;
