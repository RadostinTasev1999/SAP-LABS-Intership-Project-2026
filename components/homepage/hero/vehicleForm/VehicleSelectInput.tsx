import { VehicleSelectInputProps } from "@/lib/definitions"

export default function VehicleSelectInput({
    years,
    makes,
    models,
    label,
    id,
    name,
    defaultValue,
    handleSelectChange
}: VehicleSelectInputProps){

    return(
        <div className="mb-4">

            <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-slate-800">
                {label} <span className="text-[#BF211E]">*</span>
            </label>
            <select
                name={name}
                defaultValue={defaultValue}
                className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                onChange={handleSelectChange}
            >

                {
                    label === 'Year' && (
                        years && years.map((el) => (
                            <option
                                key={el.id}
                            >
                                {el.year}
                            </option>
                        ))
                    )
                }

                {
                    label === 'Make' && (
                        makes && makes.map((el) =>(
                            <option
                                key={el.id}
                            >
                                {el.make}
                            </option>
                        ))
                    )
                }


                {
                    label === 'Model' && (
                        models && models.map((el) => (
                            <option
                                key={el.id}
                                >
                                    {el.model}
                            </option>
                        ))
                    )
                }
            </select>
        </div>
    )
}

