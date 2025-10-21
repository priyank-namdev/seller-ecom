import { type FC } from "react";
import type { CommonInputProps } from "../../../utils/interface";

const TextField: FC<CommonInputProps> = ({
  label,
  name,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  autoComplete,
  required = false,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id || name}
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-sky-100/20"
        />
      </div>
    </div>
  );
};

export default TextField;
