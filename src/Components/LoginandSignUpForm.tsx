import { useState } from "react";
import { Eye, EyeOff, Chrome, Facebook, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginandSignUpForm = ({ FormType = "login" }) => {
  const navigate = useNavigate();
  const isLogin = FormType === "login";

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4"
      style={{
        backgroundColor: "var(--background-screen-color)",
      }}
    >
      {/* 80% Background Section */}
      <div
        className="w-full lg:w-[80%] min-h-[80vh] flex justify-center items-center bg-cover bg-center rounded-3xl p-6 md:p-10"
        style={{
          backgroundImage: `url(/src/assets/Images/bg-Loginandsignup.png)`,
          backgroundColor: "var(--background-screen-color)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Wrapper */}
        <div className="w-full max-w-4xl">
          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-center mb-2"
            style={{ color: "var(--primary-color)" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Subtitle */}
          <p
            className="text-center text-base sm:text-lg mb-8"
            style={{ color: "var(--grey-70)" }}
          >
            {isLogin
              ? "Welcome back! Please log in to access your account."
              : "Join our community today! Create an account to unlock exclusive features."}
          </p>

          {/* FORM */}
          <form className="space-y-4">
            {!isLogin && (
              <div className="flex flex-col lg:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full lg:w-1/2 border rounded-full p-3 text-sm font-medium"
                  style={inputStyle}
                />

                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full lg:w-1/2 border rounded-full p-3 text-sm font-medium"
                  style={inputStyle}
                />
              </div>
            )}

            <div className="flex flex-col lg:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full lg:w-1/2 border rounded-full p-3 text-sm font-medium"
                style={inputStyle}
              />

              <div className="relative w-full lg:w-1/2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="w-full border rounded-full p-3 pr-12 text-sm font-medium"
                  style={inputStyle}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium cursor-pointer"
                  style={{ color: "var(--grey-70)" }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="text-right text-sm">
                <button
                  style={{ color: "var(--primary-color)", cursor: "pointer" }}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              className="w-full py-3 rounded-full font-semibold cursor-pointer"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--tertiary-text-color)",
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="grow" style={{ borderColor: "var(--grey-30)" }} />
            <span className="mx-3 text-sm" style={{ color: "var(--grey-60)" }}>
              Or continue with
            </span>
            <hr className="grow" style={{ borderColor: "var(--grey-30)" }} />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <SocialIcon icon={Chrome} />
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Apple} />
          </div>

          {/* Switch */}
          <p
            className="text-center text-sm mt-6"
            style={{ color: "var(--grey-70)" }}
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <button
              className="ml-2 cursor-pointer"
              style={{ color: "var(--primary-color)" }}
              onClick={() => navigate(isLogin ? "/signup" : "/login")}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginandSignUpForm;

/* ========================= */
/* Reusable Styles */
/* ========================= */

const inputStyle = {
  backgroundColor: "var(--background-screen-color)",
  borderColor: "var(--grey-30)",
  color: "var(--secondary-text-color)",
};

const SocialIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <button
    className="rounded-full p-2 flex justify-center cursor-pointer"
    style={{ borderColor: "var(--grey-30)" }}
  >
    <Icon className="w-15 h-15" />
  </button>
);
