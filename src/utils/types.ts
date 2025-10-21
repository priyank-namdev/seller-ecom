// Auth view modes
export type AuthMode = "login" | "register";

// Login form values
export interface LoginFormValues {
  identifier: string; // email or mobile
  password: string;
  agree: boolean;
}

// Register (OTP) form values
export interface RegisterFormValues {
  mobile: string;
  otp: string;
}

// OTP input
export type OtpDigits = 4 | 5 | 6;
export interface OtpInputProps {
  length?: OtpDigits;
  value: string;
  onChange: (val: string) => void;
  errorText?: string;
}

