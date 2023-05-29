import AuthComponent from "../../components/AuthComponent";

function SignUp() {
  return (
    <AuthComponent
      header="Sign Up"
      description="Already have an account?"
      isLogin={false}
      buttonText="Create an account"
      linkText="Login"
      linkHref="/user/login"
    />
  );
}

export default SignUp;
