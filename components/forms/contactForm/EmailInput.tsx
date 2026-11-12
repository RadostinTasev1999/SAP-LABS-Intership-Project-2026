import { EmailInputProps } from "@/lib/definitions";
import { p } from "motion/react-client";

export default function EmailInput({
  id,
  label,
  name,
  placeholder,
  email,
  handleInputChange,
  contactErrors,
}: EmailInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-semibold text-slate-800"
      >
        {label} <span className="text-[#BF211E]">*</span>
      </label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        required
        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
        value={email}
        onChange={handleInputChange}
      />
      {contactErrors.emailError && (
        <span className="text-[#BF211E] text-xs font-semibold">
          {contactErrors.emailError}
        </span>
      )}
    </div>
  );
}
