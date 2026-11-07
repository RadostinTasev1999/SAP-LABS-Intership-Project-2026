"use client"

import QuoteContactForm from './contactForm/contactForm'

import { MouseEvent, MouseEventHandler } from 'react'

import { 
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger
} from '@/components/reui/stepper'

import { CheckIcon } from 'lucide-react'
import { LoaderCircleIcon } from 'lucide-react'

import QuoteVehicleForm from './vehicleForm/QuoteVehicleForm'
import HeroQuoteHeading from "./HeroQuoteHeading"
import HeroQuoteParagraph from "./HeroQuoteParagraph"
import QuoteDestinationForm from './destinationForm/QuoteDestinationForm'
import HeroSecNote from "./HeroSecNote"
import { QuoteFormState } from '@/lib/definitions'

import { useReducer } from "react"

import { HeroQuoteCardProps } from '@/lib/definitions'
import { DestinationFormState } from '@/lib/definitions'
import { Action } from '@/lib/definitions'


const initialState = {
    origin:'',
    delivery:'',
    transport: 'open',
    year: '',
    make: '',
    model: '',
    isDriving: true,
    email: '',
    pickupData: '',
    phone: ''
}

const quoteInitialState = {
    showDestinationForm: true,
    showVehicleForm: false,
    showContactForm: false

}

// { type: 'HIDE_DESTINATION', field:'showDestinationForm', value: false }
// { type: 'SHOW_VEHICLE', field: 'showVehicleForm', value: true}
// {type: 'HIDE_VEHICLE', field: 'showVehicleForm', value: false}
// { type: 'SHOW_CONTACT', field: 'showContactForm', value: true}
// -----------------------------------------------------------
// { type: 'SHOW_VEHICLE', field: 'showVehicleForm', value: true}
const stateReducer = (state: QuoteFormState, action: Action) => {

    switch (action.type) {

        case "HIDE_DESTINATION":
            
            return {
                ...state,
                [action.field]: action.value
            };
        case "SHOW_VEHICLE":
            
            return {
                ...state,
                [action.field]: action.value
            };
        case "HIDE_VEHICLE":

            return {
                ...state,
                [action.field]: action.value
            };
        case "SHOW_CONTACT":

            return {
                ...state,
                [action.field]: action.value
            };
        case "HIDE_CONTACT":

            return {
                ...state
            };
        
    
        default:
            return {
                ...state
            };
    }
}

const quoteReducer = (state: DestinationFormState, action: Action) => {

    switch (action.type) {
        case "SET_ORIGIN":
            
            return {
                ...state,
                [action.field]: action.value
            };

        case "SET_DELIVERY":
            
            return {
                ...state,
                [action.field]: action.value
            };

        case "SET_TRANSPORT":
            
            return {
                ...state,
                [action.field]: action.value
            };
    
        default:
            return {
                ...state
            };
    }
}

const steps = [
    {
        title: 'Destination'
    },
    {
        title: 'Vehicle'
    },
    {
        title: 'Contact Info'
    }
]

export default function HeroQuoteCard({
    quoteHeading,
    quoteParagraph,
    pickupZip,
    deliveryZip,
    transportType,
    submitBtn,
    securityNote
}: HeroQuoteCardProps){

    const [quoteData, dispatchQuoteData] = useReducer(quoteReducer, initialState);
    const [quoteState, dispatchQuoteState] = useReducer(stateReducer, quoteInitialState)

    // onClick handler for destination quote inputs
    const destinationComplete = (event: MouseEvent<HTMLButtonElement>) => {

        event.preventDefault()
        console.log('Quote data is:', quoteData)
        // Hide Destination form
        dispatchQuoteState({ type: 'HIDE_DESTINATION', field:'showDestinationForm', value: false })
        // Show Vehicle form
        dispatchQuoteState({ type: 'SHOW_VEHICLE', field: 'showVehicleForm', value: true})
    }

    // onClick handler for vehicle quote form

    const vehicleComplete = (event: MouseEvent<HTMLButtonElement>) => {

        event?.preventDefault();
        // Hide Vehicle inputs
        dispatchQuoteState({type: 'HIDE_VEHICLE', field: 'showVehicleForm', value: false});
        // Show Contact inputs
        dispatchQuoteState({ type: 'SHOW_CONTACT', field: 'showContactForm', value: true})
    }


    return (
        <div
            className='w-full p-6 sm:p-9'
        >
            

            {/* Quote text */}
            
            {/* Destination*/}
        {
            quoteState.showDestinationForm && (
                    <>
                        <HeroQuoteHeading
                            quoteHeading={quoteHeading}
                        />

                        <HeroQuoteParagraph
                            quoteParagraph={quoteParagraph}
                        />

                        <QuoteDestinationForm
                            pickupZip={pickupZip}
                            deliveryZip={deliveryZip}
                            transportType={transportType}
                            submitBtn={submitBtn}
                            destinationComplete={destinationComplete}
                            dispatchQuoteData={dispatchQuoteData}
                        />
                    </> 
            )
        }
            {
                quoteState.showVehicleForm && (
                    <QuoteVehicleForm 
                        vehicleComplete={vehicleComplete}
                        />
                )
            }
            {
                quoteState.showContactForm && (
                    <QuoteContactForm />
                )
            }
            

            

            {/* Stepper */}
            <Stepper
                className='w-full max-w-md space-y-8 mt-4 py-4 border-y border-slate-400'
                defaultValue={4}
                indicators={{
                    completed: (
                        <CheckIcon className='size-6 text-green-500' />
                    ),
                    loading: (
                        <LoaderCircleIcon className='size-3.5 animate-spin'/>
                    )
                }}
                >

                    <StepperNav>
                        {
                            steps.map((step, index) => (
                                <StepperItem
                                    key={index}
                                    step={index + 1}
                                    className='relative flex-1 items-start'
                                    >
                                        <StepperTrigger
                                            className='flex flex-col gap-2.5'
                                            >
                                            <StepperIndicator>{index + 1}</StepperIndicator>
                                            <StepperTitle>{step.title}</StepperTitle>
                                        </StepperTrigger>

                                        {
                                            steps.length > index + 1 && (
                                                <StepperSeparator className='group-data-[state=completed]/step:bg-primary absolute inset-x-0 top-3 left-[calc(50%+0.875rem)] m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none' />
                                            )
                                        }

                                </StepperItem>
                            ))
                        }
                    </StepperNav>

            </Stepper>

            {/* Security note */}
            {/* <HeroSecNote
                securityNote={securityNote}
            /> */}

        </div>
    )
}