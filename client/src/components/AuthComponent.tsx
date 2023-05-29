import { Fragment } from "react";
import Logo from "./svg/Logo";
import { Link } from "react-router-dom";

interface AuthComponentProps {
  header: string;
  description: string;
  linkText: string;
  linkHref: string;
  buttonText: string;
  isLogin: boolean;
}

function AuthComponent(props: AuthComponentProps) {
  return (
    <div className="auth-cont">
      <Logo />
      <div className="form-cont">
        <h1>{props.header}</h1>
        <div className="form-cont__inputs">
          <input
            className="form-cont__input"
            type="text"
            name="email"
            id="email"
            required
            placeholder={"Email address"}
          />
          <input
            className="form-cont__input"
            type="text"
            name="password"
            id="password"
            required
            placeholder={"Password"}
          />
          {props.isLogin ? (
            <Fragment></Fragment>
          ) : (
            <input
              className="form-cont__input"
              type="text"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder={"Repeat Password"}
            />
          )}
          <button className="form-cont__inputs-button">
            {props.buttonText}
          </button>
        </div>
        <p>
          {props.description} <Link to={props.linkHref}>{props.linkText}</Link>
        </p>
      </div>
    </div>
  );
}

export default AuthComponent;
