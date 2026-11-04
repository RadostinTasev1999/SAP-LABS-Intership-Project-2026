"use client"

import HeroQuoteHeading from "./HeroQuoteHeading"
import HeroQuoteParagraph from "./HeroQuoteParagraph"
import QuoteDestinationForm from './QuoteDestinationForm'
import HeroSecNote from "./HeroSecNote"

import { HeroQuoteCardProps } from '@/lib/definitions'
import { useReducer } from "react"

import { DestinationState, Action } from '@/lib/definitions'

const initialDestination = {
    origin: '',
    destination: '',
    open: true,
    enclosed: false
}

/*
    { type: 'transportType', field: 'transportType', value: e.currentTarget.value}
*/

// { type: 'transportType', field: 'open', value: e.currentTarget.value}
// { type: 'transportType', field: 'open', value: e.currentTarget.value}
// { type: 'transportType', field: 'open', value: e.currentTarget.value}
// { type: 'transportType', field: 'enclosed', value: e.currentTarget.value }
const destinationReducer = (state: DestinationState, action: Action) => {
    
    switch (action.type) {

        case 'pickupLocation':
            
        return {
            ...state,
            [action.field]: action.value
        }

        case 'deliveryLocation':

        return {
            ...state,
            [action.field]: action.value
        }
            
        case 'transportType':

            if (action.field === 'open') {

                return {
                    ...state,
                    [action.field]: action.value,
                    'enclosed': !state.enclosed
                }
            } else if (action.field === 'enclosed') {
                
                return {
                    ...state,
                    [action.field]: action.value,
                    'open': !state.open
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default function HeroQuoteCard({
    quoteHeading,
    quoteParagraph,
    pickupZip,
    deliveryZip,
    transportType,
    submitBtn,
    securityNote
}: HeroQuoteCardProps){

    const [destinationState, dispatchDestination] = useReducer(destinationReducer, initialDestination)


    const destinationSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Form state is:', destinationState)
    }

    return (
        <div
            className='w-full p-6 sm:p-9'
        >
            {/* Card heading */}
            <HeroQuoteHeading
                quoteHeading={quoteHeading}
            />

            {/* Quote text */}
            <HeroQuoteParagraph
                quoteParagraph={quoteParagraph}
            />
            {/* Quote form */}

            <QuoteDestinationForm
                destinationState={destinationState}
                dispatchDestination={dispatchDestination}
                destinationSubmit={destinationSubmit}
                pickupZip={pickupZip}
                deliveryZip={deliveryZip}
                transportType={transportType}
                submitBtn={submitBtn}
            />

            {/* Security note */}
            <HeroSecNote
                securityNote={securityNote}
            />

        </div>
    )
}