import { useState } from "react";
import { Eye, EyeOff, Chrome, Facebook, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginandSignUpForm = ({ FormType = "login" }) => {
  const navigate = useNavigate();
  const isLogin = FormType === "login";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--background-screen-color)" }}
    >
      {/* Responsive Card Container */}
      <div
        className="w-full max-w-5xl rounded-3xl shadow-lg p-6 sm:p-8 md:p-12"
        style={{
          backgroundImage: `url(/src/assets/Images/bg-Loginandsignup.png)`,
          backgroundColor: "var(--background-screen-color)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-3xl mx-auto">
          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-center mb-3"
            style={{ color: "var(--primary-color)" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Subtitle */}
          <p
            className="text-center text-sm sm:text-base md:text-lg mb-8 px-2"
            style={{ color: "var(--grey-70)" }}
          >
            {isLogin
              ? "Welcome back! Please log in to access your account."
              : "Join our community today! Create an account to unlock exclusive features."}
          </p>

          {/* Form */}
          <form className="space-y-4">
            {/* Name Fields (Signup Only) */}
            {!isLogin && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full border rounded-full p-3 text-sm sm:text-base"
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full border rounded-full p-3 text-sm sm:text-base"
                  style={inputStyle}
                />
              </div>
            )}

            {/* Email + Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border rounded-full p-3 text-sm sm:text-base"
                style={inputStyle}
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="w-full border rounded-full p-3 pr-12 text-sm sm:text-base"
                  style={inputStyle}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--grey-70)" }}
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            {isLogin && (
              <div className="text-right text-sm">
                <button type="button" style={{ color: "var(--primary-color)" }}>
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--tertiary-text-color)",
              }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <hr
              className="grow border-t"
              style={{ borderColor: "var(--grey-30)" }}
            />
            <span
              className="mx-4 text-xs sm:text-sm"
              style={{ color: "var(--grey-60)" }}
            >
              Or continue with
            </span>
            <hr
              className="grow border-t"
              style={{ borderColor: "var(--grey-30)" }}
            />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center lg:grid lg:grid-cols-3 gap-4">
            <SocialIcon icon={Chrome} />
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Apple} />
          </div>

          {/* Switch Auth Mode */}
          <p
            className="text-center text-sm mt-8"
            style={{ color: "var(--grey-70)" }}
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <button
              type="button"
              className="ml-2 font-medium"
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
    className="
      w-12 h-12 
      lg:w-full lg:h-12
      flex items-center justify-center
      rounded-full lg:rounded-full
      border border-(--primary-color)
      bg-(--background-screen-color)
      hover:shadow-md
      hover:-translate-y-0.5
      active:scale-95
      transition-all duration-200
    "
  >
    <Icon className="w-5 h-5 text-(--primary-color)" />
  </button>
);
