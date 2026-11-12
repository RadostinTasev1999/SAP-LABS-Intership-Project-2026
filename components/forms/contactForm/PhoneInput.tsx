import { PhoneInputProps } from "@/lib/definitions";

export default function PhoneInput({
  id,
  label,
  name,
  placeholder,
  handleInputChange,
  phone,
  contactErrors,
}: PhoneInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-semibold text-slate-800"
      >
        {label} <span className="text-slate-800/70 text-xs">(Optional)</span>
      </label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
        value={phone}
        onChange={handleInputChange}
      />
      {contactErrors.phoneError && (
        <span className="text-[#BF211E] text-xs font-semibold">
          {contactErrors.phoneError}
        </span>
      )}
    </div>
  );
}
