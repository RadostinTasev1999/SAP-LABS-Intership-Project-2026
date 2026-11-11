"use client"

import ArrowRight from "@/components/ui/ArrowRight"

import VehicleSelectInput from './VehicleSelectInput'

import { VehicleState } from '@/lib/definitions'
import { VehicleElement } from '@/lib/definitions'

import { QuoteVehicleProps } from '@/lib/definitions'

import { Action } from '@/lib/definitions'

import { ChangeEvent, MouseEventHandler, useEffect, useReducer, useState } from "react"
import { label } from "motion/react-client"



const API_URL = 'http://localhost:3000/vehicles';
// {type: 'SET_INITIAL', field: {id: "id", year: "year", make: 'make', model: 'model'}, value: el}

// { type: 'SET_INITIAL', field: { id: 'id', year: 'year', make: 'make', model: 'model'}, value: result}
// const vehicleReducer = (state: VehicleState, action: Action) => {

//     switch (action.type) {

//         case "SET_INITIAL":
            
//             return {
               
//             };
    
//         default:
//             return {
//                 ...state
//             };
//     }
// }

// const initialState = [
//     {
//         id: "",
//         year: "",
//         make: "",
//         model: ""
//     }
// ]

export default function QuoteVehicleForm({
    vehicleComplete,
    dispatchQuoteData
}: QuoteVehicleProps){

    // const [vehicleData, dispatchVehicleData] = useReducer(vehicleReducer, initialState )
    const [vehicleData, setVehicleData] = useState<VehicleState>([]);
    const [years,setYears] = useState([]);
    const [make, setMake] = useState([])
    const [model, setModel] = useState([])

    const handleSelectChange = (e: ChangeEvent) => {

        const field = e.target.name;

        console.log('Field is:', field)

        switch (field) {
            case "selectedYear":
                
                dispatchQuoteData({ type: 'SET_YEAR', field: 'year', value: e.target.value})
                break;
            case "selectedMake":

                dispatchQuoteData({ type: 'SET_MAKE', field: 'make', value: e.target.value })
                break;
            case "selectedModel":

                dispatchQuoteData({ type: 'SET_MODEL', field: 'model', value: e.target.value})
                break;

            default:
                break;
        }
       
        
    }
   
    useEffect(() => {
        
        const loadData = async() => {
            const response = await fetch(API_URL);
            const result = await response.json();

            setVehicleData(result)
            // filter by year
            const years = result.map((el: VehicleElement) => (
                { id: el.id, year: el.year }
            ))
            console.log('Years are:', years)
            // update years state
            setYears(years)
            // filter by makes
            const makes = result.map((el: VehicleElement) => (
                { id: el.id, make: el.make}
            ))
            // update makes state
            setMake(makes)

            // filter by model
            const models = result.map((el: VehicleElement) => (
                { id: el.id, model: el.model }
            ))
            // update model state
            setModel(models);
        };

        loadData()
    },[])


    return (
        <div className="mb-4 p-[18px]">
            <h1 className="mb-[14px] text-base font-semibold text-slate-600">
                Enter Your Vehicle Details
            </h1>

            <div className="grid grid-cols-2 gap-[14px]">

                {/* Col 1 Year */}

                <VehicleSelectInput
                    years={years}
                    label="Year"
                    id="years"
                    name="selectedYear"
                    defaultValue="Select Year"
                    handleSelectChange={handleSelectChange}
                />

                {/* Col 2 Make */}
                <VehicleSelectInput
                    makes={make}
                    label="Make"
                    id="make"
                    name="selectedMake"
                    defaultValue="Select Make"
                    handleSelectChange={handleSelectChange}
                />

                {/* Col 3 Model */}
                <VehicleSelectInput
                    models={model}
                    label="Model"
                    id="model"
                    name="selectedModel"
                    defaultValue="Select Model"
                    handleSelectChange={handleSelectChange}
                />

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