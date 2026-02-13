import LoginandSignUpForm from "../LoginandSignUpForm";
import Testimonials from "../Testimonials";

const Login = () => {
  return (
    <div className="relative w-full h-full">
      <LoginandSignUpForm FormType="login" />
      <Testimonials />
    </div>
  );
};

export default Login;
