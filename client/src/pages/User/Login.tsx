import AuthComponent from "../../components/AuthComponent";

function Login() {
  return (
    <AuthComponent
      header="Login"
      description="Don't have an account?"
      isLogin={true}
      buttonText="Login to your account"
      linkText="Sign Up"
      linkHref="/user/signup"
    />
  );
}

export default Login;
