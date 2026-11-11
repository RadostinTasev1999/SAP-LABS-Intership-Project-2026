import { QuoteDeliveryInputProps } from '@/lib/definitions'
import { li } from 'motion/react-client'
import { useEffect } from 'react'

export default function QuoteDeliveryInput({
    deliveryZip,
    delivery,
    handleDeliveryChange,
    deliveryResult,
    fetchData,
    deliverySearch,
    handleSelectDelivery,
    destinationErrors
    
}: QuoteDeliveryInputProps){

    useEffect(() => {

        if (!deliverySearch) {
            return;
        }

        fetchData(deliveryZip.name)

    },[delivery])

    return(
        <div className='relative'>
            <label
                htmlFor={deliveryZip.id}
                className='text-sm font-semibold text-slate-800'
            >
                {deliveryZip.label}
            </label>

            <input
                type="text"
                id={deliveryZip.id}
                name={deliveryZip.name}
                placeholder={deliveryZip.placeholder}
                className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 mt-2'
                value={delivery}
                onChange={handleDeliveryChange}
            />
            {/* Error message */}
            {
                destinationErrors.deliveryError && (
                    <span className='text-[#BF211E] text-xs font-semibold'>{destinationErrors.deliveryError}</span>
                )
            }
            {
                deliverySearch && (
                    <ul className='absolute top-full left-0 right-0 mt-1 bg-white rounded-md max-h-52 overflow-y-auto z-50 divide-y divide-slate-200'>
                        {
                            deliveryResult && deliveryResult.map((el) => (
                                <li key={el.id} onClick={() => handleSelectDelivery(el, deliveryZip.name)} className='px-4 py-2.5 text-base font-semibold cursor-pointer transition-colors'>
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