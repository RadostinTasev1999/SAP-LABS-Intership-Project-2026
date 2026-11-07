"use client"

import { QuotePickupInputProps } from '@/lib/definitions'

import { useEffect } from 'react'

export default function QuotePickupInput({
    pickupZip,
    origin,
    handleOriginChange,
    fetchData,
    originResult,
    handleSelectOrigin,
    showResult,
    hideResult
}: QuotePickupInputProps){

    useEffect(() => {

        if (!showResult) {
            return;
        }

        fetchData(pickupZip.name)

    },[origin])

    return(
        <div className='relative'>
            <label htmlFor={pickupZip.id} className='text-sm font-semibold text-slate-800'>
                {pickupZip.label}
            </label>
            <input
                type="text"
                id={pickupZip.id}
                name={pickupZip.name}
                placeholder={pickupZip.placeholder}
                className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 mt-2'
                value={origin}
                onChange={handleOriginChange}
                onClick={hideResult}
                    />

                
                {
                    showResult && (
                    <ul className='absolute top-full left-0 right-0 mt-1 bg-white rounded-xl max-h-52 overflow-y-auto z-50 divide-y divide-slate-200'>
                        {
                            originResult && originResult.map((el) => (
                                <li key={el.id} onClick={() => handleSelectOrigin(el,pickupZip.name)} className='px-4 py-2.5 text-xs font-semibold cursor-pointer transition-colors'>
                                    {`${el.city}, ${el.state} ${el.zip}`}
                                </li>
                            ))
                        }

                    </ul>
                    )
                }
            
                
            
            
        </div>
    )
}