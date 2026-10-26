import ArrowRight from '@/components/ui/ArrowRight'

import {HeroQuoteFormProps} from '@/lib/definitions'

export default function HeroQuoteForm({
    pickupZip,
    deliveryZip,
    vehicleDetails,
    submitBtn
}: HeroQuoteFormProps){

    return(
        <form action="" className='mt-6'>
            {/* Pickup and delivery ZIP codes */}
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {/* Pickup ZIP */}
                <div className='flex flex-col gap-2'>
                    <label htmlFor={pickupZip.id} className='text-sm font-semibold text-slate-800'>
                        {pickupZip.label}
                    </label>
                    <input
                        type="text"
                        id={pickupZip.id}
                        name={pickupZip.name}
                        placeholder={pickupZip.placeholder}
                        className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900'
                    />
                </div>
                {/* Delivery ZIP */}
                <div className='flex flex-col gap-2'>
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
                        className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900'
                    />

                </div>
            </div>
            {/* Vehicle details */}
            <div className='mt-5 flex flex-col gap-2'>
                <label
                    htmlFor={vehicleDetails.id}
                    className='text-sm font-semibold text-slate-800'
                >
                    {vehicleDetails.label}
                </label>

                <input
                    type="text"
                    id={vehicleDetails.id}
                    name={vehicleDetails.name}
                    placeholder={vehicleDetails.placeholder}
                    className='w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900'
                />
            </div>

            {/* Submit button */}
            <button
                type='submit'
                className='mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800'
            >
                {submitBtn.label}
                {submitBtn.icon === 'arrow-right' ? <ArrowRight /> : ""} 
            </button>
        </form>
    )
}