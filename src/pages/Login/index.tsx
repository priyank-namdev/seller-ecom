import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../components/core/TextField";
import PasswordField from "../../components/core/PasswordField";
import Button from "../../components/core/Button";
import "./login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});

  const validate = () => {
    const next: { identifier?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!identifier.trim()) {
      next.identifier = "Email is required";
    } else if (!emailRegex.test(identifier.trim())) {
      next.identifier = "Enter a valid email";
    }
    if (!password) {
      next.password = "Password is required";
    } else if (password.length < 6) {
      next.password = "Password must be at least 6 characters";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Store credentials in session storage as requested
    sessionStorage.setItem(
      "auth_credentials",
      JSON.stringify({ email: identifier.trim(), password })
    );
    navigate("/dashboard");
  };

  return (
    <div className="login-container relative flex items-center justify-center sm:justify-center lg:justify-end min-h-screen w-full bg-cover bg-center bg-no-repeat md:pr-10">
      <div className="relative bg-transparent shadow-2xl rounded-xl md:w-[399px] w-full p-6 md:mt-16 mt-10">

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Seller Login</h2>
            <p className="card-subtitle">Login to access your seller account</p>
          </div>

          <form className="login-form" onSubmit={onSubmit} noValidate>
            <TextField
              label="Mobile Number / Email"
              name="identifier"
              placeholder="Enter your mobile number or email"
              autoComplete="username"
              value={identifier}
              onChange={(e) => setIdentifier((e.target as HTMLInputElement).value)}
            />
            {errors.identifier && (
              <p className="login-error" role="alert">{errors.identifier}</p>
            )}
            <PasswordField
              label="Password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
            />
            {errors.password && (
              <p className="login-error" role="alert">{errors.password}</p>
            )}

            <div className="otp-wrapper">
              <button type="button" className="copy-link otp-link">
                Use OTP instead
              </button>
            </div>

            <Button type="submit" className="login-form-button" fullWidth>
              Login
            </Button>

            <div className="copy-link login-subtle-text">
              Don’t have an account? <Link to="/seller/register">Register as Seller</Link>
            </div>

            <p className="copy-link login-terms">
              By Login, I agree to ZestFindz’s <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
