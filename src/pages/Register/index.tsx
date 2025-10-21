import { useEffect, useMemo, useState } from "react";
import TextField from "../../components/core/TextField";
import Button from "../../components/core/Button";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [sent, setSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [touched, setTouched] = useState(false);

  const isMobileValid = (value: string) => /^\d{10}$/.test(value);

  const mobileError = useMemo(() => {
    if (!touched && !mobile) return "";
    if (!mobile) return "Mobile number is required";
    if (!isMobileValid(mobile)) return "Enter a valid 10-digit mobile number";
    return "";
  }, [mobile, touched]);

  const otpError = useMemo(() => {
    if (!sent && !otp) return "";
    if (otp.length !== 6) return "Enter 6 digit OTP";
    return "";
  }, [otp, sent]);

  useEffect(() => {
    if (!timer) return;
    const id = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleSendOtp = () => {
    setTouched(true);
    if (mobileError) return;
    setSent(true);
    setTimer(30);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (mobileError || otpError) return;
    alert("OTP verified (demo)");
  };

  return (
    <div className="register-container relative flex items-center justify-center lg:justify-end min-h-screen w-full bg-cover bg-center bg-no-repeat md:pr-10">
      <div className="relative bg-transparent shadow-2xl rounded-xl md:w-[399px] w-full p-6 md:mt-16 mt-10">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Welcome to ZestFindz :)</h2>
            <p className="card-subtitle">Register your number to create your seller account</p>
          </div>

          <form className="login-form" onSubmit={handleVerify} noValidate>
            <TextField
              label="Enter Mobile Number"
              name="mobile"
              placeholder="Enter your mobile number"
              autoComplete="tel"
              value={mobile}
              onChange={(e) => setMobile((e.target as HTMLInputElement).value)}
            />
            {mobileError && (
              <p className="login-error" role="alert">{mobileError}</p>
            )}

            {sent && (
              <>
                <label className="block text-sm font-medium text-gray-900">Enter OTP</label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="\\d*"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ""))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-sky-100/20"
                  placeholder="6-digit OTP"
                  aria-label="OTP"
                />
                {otpError && (
                  <p className="login-error" role="alert">{otpError}</p>
                )}
              </>
            )}

            {!sent ? (
              <Button type="button" onClick={handleSendOtp} className="login-form-button" fullWidth>
                Send OTP
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <Button type="submit" className="login-form-button" fullWidth>
                  Verify OTP
                </Button>
                <button type="button" onClick={handleSendOtp} disabled={timer > 0} className="copy-link otp-link">
                  {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
                </button>
              </div>
            )}

            <p className="copy-link login-terms">
              By continuing, I agree to ZestFindz’s <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
            </p>

            <div className="copy-link login-subtle-text">
              Already have an account? <Link to="/seller/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
