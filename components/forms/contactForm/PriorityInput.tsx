import { PriorityInputProps } from "@/lib/definitions";
import PriorityItems from "./PriorityItems";

export default function PriorityInput({
  id,
  label,
  name,
  handleInputChange,
  priorityList,
  priority,
}: PriorityInputProps) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-semibold text-slate-800"
      >
        {label} <span className="text-[#BF211E]">*</span>
      </label>

      <select
        name={name}
        defaultValue={priority}
        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
        onChange={handleInputChange}
      >
        {priorityList &&
          priorityList.map((el) => (
            <PriorityItems key={el.id} value={el.value} />
          ))}
      </select>
    </div>
  );
}
