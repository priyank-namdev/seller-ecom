import { type ButtonHTMLAttributes, type FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: FC<Props> = ({ children, className = "", fullWidth = false, ...rest }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-[#11B2EF] px-5 py-3 text-white font-semibold shadow-[0_8px_20px_rgba(17,178,239,0.35)] hover:bg-[#0ea3db] active:translate-y-[1px] transition cursor-pointer ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
