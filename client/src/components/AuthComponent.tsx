import { Fragment } from "react";
import Logo from "./svg/Logo";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface AuthComponentProps {
  header: string;
  description: string;
  linkText: string;
  linkHref: string;
  buttonText: string;
  isLogin: boolean;
}
async function signupHandler(
  emailValue: string,
  passwordValue: string,
  passwordConfirmValue: string
) {
  await fetch("/api/v1/users-media/signup", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
      passwordConfirm: passwordConfirmValue,
    }),
  });
}

async function loginHandler(emailValue: string, passwordValue: string) {
  await fetch("/api/v1/users-media/login", {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),
  });
}

function AuthComponent(props: AuthComponentProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  function onFormSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (!props.isLogin)
      signupHandler(
        emailRef.current!.value,
        passwordRef.current!.value,
        passwordConfirmRef.current!.value
      );
    else {
      loginHandler(emailRef.current!.value, passwordRef.current!.value);
    }
  }

  return (
    <div className="auth-cont">
      <Logo />
      <div className="form-cont">
        <h1>{props.header}</h1>
        <form className="form-cont__inputs" onSubmit={onFormSubmitHandler}>
          <input
            className="form-cont__input"
            type="email"
            name="email"
            id="email"
            required
            placeholder={"Email address"}
            ref={emailRef}
          />
          <input
            className="form-cont__input"
            type="password"
            name="password"
            id="password"
            required
            placeholder={"Password"}
            ref={passwordRef}
          />
          {props.isLogin ? (
            <Fragment></Fragment>
          ) : (
            <input
              className="form-cont__input"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              required
              placeholder={"Repeat Password"}
              ref={passwordConfirmRef}
            />
          )}
          <button className="form-cont__inputs-button">
            {props.buttonText}
          </button>
        </form>
        <p>
          {props.description} <Link to={props.linkHref}>{props.linkText}</Link>
        </p>
      </div>
    </div>
  );
}

export default AuthComponent;
