import { VehicleSelectInputProps } from "@/lib/definitions";

import { useContext } from "react";
import { QuoteContext } from "@/components/providers/QuoteProvider";

export default function VehicleSelectInput({
  years,
  makes,
  models,
  label,
  id,
  name,
  defaultValue,
  handleSelectChange,
  handleSelectClick,
}: VehicleSelectInputProps) {
  const { vehicleErrors } = useContext(QuoteContext);

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
        defaultValue={defaultValue}
        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
        onChange={handleSelectChange}
      >
        {/* Years option list */}
        {label === "Year" && <option value="Select Year">Select Year</option>}
        {label === "Year" &&
          years.data.length !== 0 &&
          years.data.map((year, index) => <option key={index}>{year}</option>)}
        {/* Make Option list */}

        {label === "Make" && <option value="Select Make">Select Make</option>}
        {label === "Make" &&
          makes.data.length !== 0 &&
          makes.data.map((make, index) => <option key={index}>{make}</option>)}
        {/* Model Option list */}
        {label === "Model" && (
          <option value="Select Model">Select Model</option>
        )}
        {label === "Model" &&
          models?.data.length !== 0 &&
          models?.data.map((model, index) => (
            <option key={index}>{model}</option>
          ))}
      </select>
      {/* Error messages */}
      {label === "Year" && vehicleErrors.vehicleYearError && (
        <p className="text-[#BF211E] text-xs font-semibold">
          {vehicleErrors.vehicleYearError}
        </p>
      )}
      {label === "Make" && vehicleErrors.vehicleMakeError && (
        <p className="text-[#BF211E] text-xs font-semibold">
          {vehicleErrors.vehicleMakeError}
        </p>
      )}
      {label === "Model" && vehicleErrors.vehicleModelError && (
        <p className="text-[#BF211E] text-xs font-semibold">
          {vehicleErrors.vehicleModelError}
        </p>
      )}
    </div>
  );
}

/*
  {
        data: [],
        loading: true,
        errors: { message: '' }
    }
*/
