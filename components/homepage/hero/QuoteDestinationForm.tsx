import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


import ArrowRight from '@/components/ui/ArrowRight'

import { QuoteDestinationProps } from '@/lib/definitions'
import QuestionCircleIcon from '@/components/ui/QuestionCircleIcon'

// MUI library
const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip describeChild {...props} classes={{ popper: className }} placement='top-start'/>
)) (({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
    },
}));


export default function QuoteDestinationForm({
    destinationState,
    dispatchDestination,
    destinationSubmit,
    pickupZip,
    deliveryZip,
    transportType,
    submitBtn
}: QuoteDestinationProps){

    return(
        <form onSubmit={destinationSubmit} className='mt-6'>
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
                        value={destinationState.origin}
                        onChange={(e) => dispatchDestination({ type: 'pickupLocation', field: 'origin', value: e.currentTarget.value})}
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
                        value={destinationState.destination}
                        onChange={(e) => dispatchDestination({ type:'deliveryLocation', field:'destination', value: e.currentTarget.value })}
                    />

                </div>
            </div>
            
            {/* Transport type radio */}
            <div className='mt-3'>
                <p className='mb-3 font-semibold text-slate-800'>Transport type</p>
                {/* radio container */}
                <div className='flex gap-1 items-center'>
                    {/* option 1 */}
                    <label
                        htmlFor='typeOne'
                        className='text-sm font-semibold text-slate-800'
                    >
                        <input
                            type="radio"
                            id='typeOne'
                            name='open'
                            className='mr-1'
                            checked={destinationState.open}
                            onChange={(e) => dispatchDestination({ type: 'transportType', field: 'open', value: e.currentTarget.value})}
                        />
                        {transportType.radioOne}

                    </label>
                    {/* Tool tip */}
                    <LightTooltip title={transportType.tipOpen}>
                       <IconButton>
                            <QuestionCircleIcon />
                       </IconButton>
                    </LightTooltip>
                    {/* option 2 */}
                    <label
                        htmlFor='typeTwo'
                        className='text-sm font-semibold text-slate-800'
                    >
                        <input
                            type="radio"
                            id='typeTwo'
                            name='enclosed'
                            className='mr-1'
                            checked={destinationState.enclosed}
                            onChange={(e) => dispatchDestination({ type: 'transportType', field: 'enclosed', value: e.currentTarget.value })}
                        />
                        {transportType.radioTwo}

                    </label>
                    <LightTooltip title={transportType.tipEnclosed}>
                        <IconButton>
                            <QuestionCircleIcon />
                        </IconButton>
                    </LightTooltip>
                    {/* Tool tip */}
                    
                </div>
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