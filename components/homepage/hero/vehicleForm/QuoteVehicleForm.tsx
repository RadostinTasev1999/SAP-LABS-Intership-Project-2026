"use client"

import ArrowRight from "@/components/ui/ArrowRight"

import { QuoteVehicleProps } from "@/lib/definitions"

import { useEffect, useState } from "react"

const API_URL = 'https://www.fueleconomy.gov/ws/rest/vehicle/menu/year'

export default function QuoteVehicleForm({
    vehicleComplete
}: QuoteVehicleProps){

    const [years, setYears] = useState([]);

    useEffect(() => {

        console.log('Mounted!')
        const fetchYears = async() => {

            fetch(API_URL)
                .then(({ data }) => {
                    data.menuItem.map((item) => console.log(`Value is: ${item.value}`))
                })

            // console.log('Result is:', result)

        }

        fetchYears();
    },[])


    return (
        <div className="mb-4 p-[18px]">
            <h1 className="mb-[14px] text-base font-semibold text-slate-600">
                Enter Your Vehicle Details
            </h1>

            <div className="grid grid-cols-2 gap-[14px]">

                {/* Col 1 Year */}
                <div className="mb-4">
                    <label htmlFor="year" className="mb-1.5 block text-[13px] font-semibold text-slate-800">
                        Year <span className="text-[#BF211E]">*</span>
                    </label>
                    <input 
                        id="year"
                        name="year"
                        type="text" 
                        placeholder="ex: 2019"
                        required
                        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                        />
                </div>

                {/* Col 2 Make */}
                <div className="mb-4">
                    <label htmlFor="make" className="mb-1.5 block text-[13px] font-semibold text-slate-800">
                        Make <span className="text-[#BF211E]">*</span>
                    </label>
                    <input 
                        id="make"
                        name="make"
                        type="text" 
                        placeholder="ex: BMW"
                        required
                        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                        />
                </div>

                {/* Col 3 Model */}
                <div className="mb-4">
                    <label htmlFor="model" className="mb-1.5 block text-[13px] font-semibold text-slate-800">
                        Model <span className="text-[#BF211E]">*</span>
                    </label>
                    <input 
                        id="model"
                        name="model"
                        type="text" 
                        placeholder="ex: 3 series"
                        required
                        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                        />
                </div>

                {/* button */}
                <div className="flex items-center"> 
                    
                    <button onClick={vehicleComplete} className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-[14px] py-[11px] gap-2 mt-2.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800">
                    Enter Contact
                        <ArrowRight />
                </button>
                </div>
                
            </div>

            
        </div>
    )
}