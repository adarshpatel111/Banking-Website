import LoginandSignUpForm from "../LoginandSignUpForm";
import Testimonials from "../Testimonials";

const SignUp = () => {
  return (
    <div className="relative w-full h-full">
      <LoginandSignUpForm FormType="signup" />
      <Testimonials />
    </div>
  );
};

export default SignUp;
