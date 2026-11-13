'use client'

import QuoteOfferCard from './QuoteOfferCard'
import QuoteSideBar from './QuoteSideBar'

import { QuoteDBValues } from '@/lib/definitions'
import { QuoteResultState } from '@/lib/definitions'
import { QuoteResultAction } from '@/lib/definitions'

import { useState,useEffect, useReducer } from 'react'

const API_URL = 'http://localhost:3000/quoteData'

const initialState = {
    success: false,
    message: '',
    quote: {
        price: 0,
        distance: 0,
        estimatedDays: '',
        from: {
            zip: 0,
            city: '',
            state: ''
        },
        to: {
            zip:0,
            city:'',
            state: ''
        },
        vehicleType: '',
        carries: '',
        operational: true
    }
}
// { type: 'set_error', success: result.message.success, message: result.message.message, quote: result.message.quote }
// { type: 'set_result', success: result.success, quote: result.quote}
const quoteReducer = (state: QuoteResultState, action: QuoteResultAction) => {

    switch (action.type) {
        case 'set_error':
            return {
                success: action.success,
                message: action.message,
                quote: action.quote
            }

        case 'set_result':
            return {
                ...state,
                success: action.success,
                quote: action.quote
            }
            
    
        default:
            return {
                ...state
            }
    }
    
}

export default function QuoteOffer(){

    const [edit, setEdit] = useState(false);
    const [quoteResult, dispatchQuoteResult] = useReducer(quoteReducer, initialState)

    const handleEdit = () => {
        setEdit(true)
    }

    const handleSave = () => {
        // update email state
        // update phone number state

        // update edit state
    }

    useEffect(() => {

        // Fetch API
        const fetchAPI = async() => {
            // Get QuoteData
            const response = await fetch(API_URL);
            const result = await response.json();

            //  console.log('Result in QUoteOffer effect funciton is:', result)

            // Calculate quote
            calculateQuote(result)

        }
        // Calculate Quote
        const calculateQuote = async(quoteData: QuoteDBValues) => {

            const vehicleOrigin = quoteData[0].origin
            // Dallas, TX 75201
            const originZip = Number(vehicleOrigin.split(" ")[2])
            // console.log('Origin zip:', originZip)
            const vehicleDestination = quoteData[0].delivery
            // console.log('VehicleDestination is:', vehicleDestination)
            // Hartford, CT 06103
            const destinationZip = Number(vehicleDestination.split(" ")[2])
            // console.log('Destination zip is:', destinationZip)
            const API = 'https://carhauler247.com/api/public/v1'

            const query = `${API}/quote?fromZip=${originZip}&toZip=${destinationZip}&vehicleType=sedan`
            
            const response = await fetch(query);
            const result = await response.json();

            // console.log('Result in calculateQuote function is:', result)
            // Validate response:
            if (!result.success) {
                /*
                    {
                        "success": false,
                        "message": "Invalid value 'CT 06103' for parameter 'fromZip'. See https://carhauler247.com/api-docs",
                        "quote": null
                    }
                */
            //    console.log('Result is:', result)
               dispatchQuoteResult({ type: 'set_error', success: result.success, message: result.message, quote: result.quote })
                throw new Error(result.message.message)
            } else{
                // console.log('Result on success is:', result)

                dispatchQuoteResult({ type: 'set_result', success: result.success, quote: result.quote})
            }
        }

        fetchAPI();
        


    },[])

    return(
        <div className="w-full min-h-screen grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-8 bg-[url(/LoginBackgroundImage.jpg)] bg-cover bg-center">
            {/* Quote Card */}
            <QuoteOfferCard 
                price={quoteResult.quote?.price}
                origin={quoteResult.quote?.from}
                destination={quoteResult.quote?.to}
                distance={quoteResult.quote?.distance}
            />
            {/* Quote SideBar */}
            <QuoteSideBar 
                handleEdit={handleEdit}
                handleSave={handleSave}
                edit={edit}
                />
        </div>
    )
}