import { Fragment, useState } from "react";
import Logo from "./svg/Logo";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";

interface AuthComponentProps {
  header: string;
  description: string;
  linkText: string;
  linkHref: string;
  buttonText: string;
  isLogin: boolean;
}

function AuthComponent(props: AuthComponentProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] =
    useState<boolean>(true);

  const [signupConfirmation, setSignupConfirmation] = useState<boolean>(false);
  const [signupError, setSignupError] = useState<boolean>(false);
  const [signupErrorMessage, setSignupErrorMessage] = useState<string>("");
  const [loginConfirmation, setLoginConfirmation] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<boolean>(false);

  const navigate = useNavigate();

  async function signupHandler(
    emailValue: string,
    passwordValue: string,
    passwordConfirmValue: string
  ) {
    try {
      const response = await fetch("/api/v1/users/signup", {
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
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }

      setSignupConfirmation(true);
      setTimeout(() => {
        setSignupConfirmation(false);
        navigate("/", { replace: true });
      }, 2000);
    } catch (err) {
      const errorMessage = err + "";
      setSignupErrorMessage(errorMessage.split("Error:")[1]);
      setSignupError(true);
      setTimeout(() => {
        setSignupError(false);
      }, 3000);
    }
  }

  async function loginHandler(emailValue: string, passwordValue: string) {
    try {
      const response = await fetch("/api/v1/users/login", {
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
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      setLoginConfirmation(true);
      setTimeout(() => {
        setLoginConfirmation(false);
        navigate("/", { replace: true });
      }, 2000);
    } catch (err) {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 3000);
    }
  }
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

  function onButtonClickHandler() {
    emailRef.current?.checkValidity()
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
    passwordRef.current?.checkValidity()
      ? setIsPasswordValid(true)
      : setIsPasswordValid(false);
    passwordConfirmRef.current?.checkValidity()
      ? setIsPasswordConfirmValid(true)
      : setIsPasswordConfirmValid(false);
  }
  return (
    <Fragment>
      {signupConfirmation ? (
        <div className="auth-confirmation">Signed up Successfully!</div>
      ) : (
        <Fragment></Fragment>
      )}
      {signupError ? (
        <div className="auth-confirmation--error">{signupErrorMessage}</div>
      ) : (
        <Fragment></Fragment>
      )}
      {loginConfirmation ? (
        <div className="auth-confirmation">Logged in Successfully!</div>
      ) : (
        <Fragment></Fragment>
      )}
      {loginError ? (
        <div className="auth-confirmation--error">
          Invalid Email or Password
        </div>
      ) : (
        <Fragment></Fragment>
      )}
      <div className="auth-cont">
        <Logo />
        <div className="form-cont">
          <h1>{props.header}</h1>
          <form className="form-cont__inputs" onSubmit={onFormSubmitHandler}>
            <div className="input-cont">
              <input
                className="form-cont__input"
                type="email"
                name="email"
                id="email"
                required
                placeholder={"Email address"}
                ref={emailRef}
                style={{
                  borderBottomColor: isEmailValid ? "#5a698f" : "#fc4747",
                }}
              />
              {isEmailValid ? (
                <Fragment></Fragment>
              ) : (
                <div className="form-cont__input--error">Can't be empty</div>
              )}
            </div>

            <div className="input-cont">
              <input
                className="form-cont__input"
                type="password"
                name="password"
                id="password"
                required
                placeholder={"Password"}
                ref={passwordRef}
                style={{
                  borderBottomColor: isPasswordValid ? "#5a698f" : "#fc4747",
                }}
              />
              {isPasswordValid ? (
                <Fragment></Fragment>
              ) : (
                <div className="form-cont__input--error">Can't be empty</div>
              )}
            </div>

            {props.isLogin ? (
              <Fragment></Fragment>
            ) : (
              <div className="input-cont">
                <input
                  className="form-cont__input"
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  required
                  placeholder={"Repeat Password"}
                  ref={passwordConfirmRef}
                  style={{
                    borderBottomColor: isPasswordConfirmValid
                      ? "#5a698f"
                      : "#fc4747",
                  }}
                />
                {isPasswordConfirmValid ? (
                  <Fragment></Fragment>
                ) : (
                  <div className="form-cont__input--error">Can't be empty</div>
                )}
              </div>
            )}
            <button
              className="form-cont__inputs-button"
              onClick={onButtonClickHandler}
            >
              {props.buttonText}
            </button>
          </form>
          <p>
            {props.description}{" "}
            <Link to={props.linkHref}>{props.linkText}</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default AuthComponent;
