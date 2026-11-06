"use client"

import { Field } from "@/components/ui/field"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { useEffect, useState } from "react"

const API_URL = 'http://localhost:3000/vehicles'

export default function QuoteVehicleForm(){

    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedModel, setSelectedModel] = useState('');

    const [makes, setMakes] = useState<string[]>([]);
    const [models, setModels] = useState<string[]>([])
   
    const years = [];

    for (let i = 2027; i >= 1900; i--) {
       
        years.push(i)
        
    }

    
    
    useEffect(() => {
        
        const fetchData = async (API_URL: string, type: string) => {

            const response = await fetch(API_URL);
            const result = await response.json();

            switch (type) {
                case 'years':
                    setYears(result)
                    break;
            
                default:
                    break;
            }
            
        }


        // fetch years
        fetchData(year_url, 'years')
        // fetch make
        

    },[])

    return (
        <form className='mt-6'>
            {/* Pickup and delivery ZIP codes */} 

            {/* Submit button */}
           
        </form>
    )
}