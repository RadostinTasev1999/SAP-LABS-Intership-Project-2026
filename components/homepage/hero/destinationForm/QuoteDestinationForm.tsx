"use client"

import QuotePickupInput from './QuotePickupInput'
import QuoteDeliveryInput from './QuoteDeliveryInput';

import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { ChangeEvent, useState } from 'react';

import { SelectedLocation } from '@/lib/definitions'

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

const API_URL = 'http://localhost:3000/zips'



// {type: 'SET_ORIGIN', field: field, value: `${data.city}, ${data.state} ${data.zip}`}
// {type: 'SET_DELIVERY', field: field, value: `${data.city}, ${data.state} ${data.zip}`}
// {type: 'SET_TRANSPORT', field: 'transport', value: e.target.value}



export default function QuoteDestinationForm({
    pickupZip,
    deliveryZip,
    transportType,
    submitBtn,
    destinationSubmit,
    dispatchQuoteData
}: QuoteDestinationProps){

    
const [origin, setOrigin] = useState('');
const [delivery, setDelivery] = useState('');
const [originResult, setOriginResult] = useState([])
const [deliveryResult, setDeliveryResult] = useState([])
const [showResult, setShowResult] = useState(false)

const [deliverySearch, showDeliverySearch] = useState(false);
const [transport, setTransport] = useState('open')


const fetchData = (searchTerm: string) => {

    switch (searchTerm) {

        case 'origin':
            fetchLocation(origin, searchTerm)
            break;

        case 'delivery':
            fetchLocation(delivery, searchTerm)
            break;
    
        default:
            break;
    }
}

const fetchLocation = async(state: string, searchTerm: string) => {

    const whereQuery = JSON.stringify({or:[{city: {contains:state}},{zip: {contains:state}}]});

    console.log(whereQuery)

    const url = `${API_URL}?_where=${encodeURIComponent(whereQuery)}`
    
    // ?_where={"or":[{"city":${state}},{"zip":${state}}]}`
    // "http://localhost:3000/zips?_where={"or":[{"city":${state}},{"zip":${state}}]}"

    try {

        const response = await fetch(url);
        const result = await response.json();

        console.log('Result is:', result)

        if (searchTerm === 'origin') {
            setOriginResult(result)
        } else if (searchTerm === 'delivery') {
            setDeliveryResult(result)
        }
        
        
    } catch (error) {
        
    }


}


const handleSelectOrigin = (data: SelectedLocation, field: string) => {

    console.log(`${data.city}, ${data.state} ${data.zip}`);
    dispatchQuoteData({type: 'SET_ORIGIN', field: field, value: `${data.city}, ${data.state} ${data.zip}`})
    setShowResult(false)
    setOrigin(`${data.city}, ${data.state} ${data.zip}`)
    
}


const handleOriginChange = (e: ChangeEvent<HTMLInputElement>) => {

    
    setOrigin(e.target.value);
    setShowResult(true);
}

const hideResult = (e: React.MouseEvent<HTMLInputElement>, field: string) => {

    if (field === 'origin') {
        setShowResult(false);
    } else if (field === 'delivery') {
        showDeliverySearch(false)
    }
    
    
}

const handleDeliveryChange = (e: ChangeEvent<HTMLInputElement>) => {

    setDelivery(e.target.value);
    showDeliverySearch(true);
}

const handleSelectDelivery = (data: SelectedLocation, field: string) => {

    dispatchQuoteData({type: 'SET_DELIVERY', field: field, value: `${data.city}, ${data.state} ${data.zip}`})
    setDelivery(`${data.city}, ${data.state} ${data.zip}`);
    showDeliverySearch(false)
}

const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {

    setTransport(e.target.value)
    dispatchQuoteData({type: 'SET_TRANSPORT', field: 'transport', value: e.target.value})
}



    

    return(
        <form onSubmit={destinationSubmit} className='mt-6'>
            {/* Pickup and delivery ZIP codes */}
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                {/* Pickup ZIP */}
                <QuotePickupInput 
                    pickupZip={pickupZip}
                    origin={origin}
                    handleOriginChange={handleOriginChange}
                    handleSelectOrigin={handleSelectOrigin}
                    fetchData={fetchData}
                    originResult={originResult}
                    showResult={showResult}
                    hideResult={hideResult}
                    />
                
                {/* Delivery ZIP */}
                <QuoteDeliveryInput 
                    deliveryZip={deliveryZip}
                    delivery={delivery}
                    handleDeliveryChange={handleDeliveryChange}
                    deliveryResult={deliveryResult}
                    fetchData={fetchData}
                    deliverySearch={deliverySearch}
                    handleSelectDelivery={handleSelectDelivery}
                    />
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
                            value='open'
                            checked={transport === 'open'}
                            className='mr-1'
                            onChange={handleRadioChange}
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
                            value='enclosed'
                            checked={transport === 'enclosed'}
                            className='mr-1'  
                            onChange={handleRadioChange}                        
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