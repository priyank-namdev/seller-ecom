import { type FC, useState } from "react";
import type { CommonInputProps } from "../../../utils/interface";

const PasswordField: FC<CommonInputProps> = ({
  label,
  name,
  id,
  placeholder = "",
  value,
  onChange,
  autoComplete,
  required = false,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full">
      <label htmlFor={id || name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          id={id || name}
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-sky-100/20"
        />
        <button
          type="button"
          aria-label={show ? "Hide password" : "Show password"}
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
        >
          {show ? (
            // eye-off icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l2.042 2.042A11.36 11.36 0 0 0 1.5 12s3.75 7.5 10.5 7.5a10.6 10.6 0 0 0 4.558-1.047l3.912 3.912a.75.75 0 1 0 1.06-1.06L3.53 2.47ZM12 17.25A5.25 5.25 0 0 1 6.75 12c0-.71.143-1.387.403-2.004l1.658 1.658A3.75 3.75 0 0 0 12 15.75a.75.75 0 0 1 0 1.5ZM17.25 12c0 .71-.143 1.387-.403 2.004l1.658 1.658c.454-.64.828-1.332 1.095-1.912.25-.544.4-.95.4-.95s-3-6-8-6c-.708 0-1.374.12-2 .323l1.197 1.197A3.73 3.73 0 0 1 15.75 12c0 .414-.336.75-.75.75s-.75-.336-.75-.75a2.25 2.25 0 0 0-2.25-2.25c-.414 0-.75-.336-.75-.75 0-.118.027-.23.075-.33L8.546 6.63A10.53 10.53 0 0 1 12 6.75c6.75 0 10.5 7.5 10.5 7.5s-.15.406-.4.95c-.51 1.11-1.365 2.561-2.505 3.755l-1.598-1.598A5.223 5.223 0 0 0 17.25 12Z" />
            </svg>
          ) : (
            // eye icon
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 5.25c6.75 0 10.5 6.75 10.5 6.75S18.75 18.75 12 18.75 1.5 12 1.5 12 5.25 5.25 12 5.25Zm0 2.25A5.25 5.25 0 1 0 17.25 12 5.25 5.25 0 0 0 12 7.5Zm0 1.5A3.75 3.75 0 1 1 8.25 12 3.75 3.75 0 0 1 12 9Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
