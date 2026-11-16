'use client'

import { createContext, useState, useReducer } from "react";
import { Dispatch } from "react";

type Action = {
    type: string,
    field: string,
    value: boolean
}

const initialCheckoutState = {
    showTransport: true,
    showVehiclePickup: false,
    showVehicleDelivery: false,
    showBookshipment: false,
    showThankYou: false
}

type ContextProps = {
    step: number,
    handleStepChange: (value: number) => void,
    handleNextStep: () => void,
    dispatchCheckoutState: Dispatch<Action>,
    checkoutState: initialCheckoutState
}

type initialCheckoutState = {
    showTransport: boolean,
    showVehiclePickup: boolean,
    showVehicleDelivery: boolean,
    showBookshipment: boolean,
    showThankYou: boolean
}


// { type: 'hide_transport', field: 'showTransport', value: false}
// { type: 'show_vehiclepickup', field: 'showVehiclePickup', value: true}
const checkoutReducer = (state: initialCheckoutState, action: Action ) => {

    switch (action.type) {
        case 'hide_transport':

            return {
                ...state,
                [action.field]: action.value
            }

        case 'show_vehiclepickup':

            return {
                ...state,
                [action.field]: action.value
            }

        case 'hide_vehiclepickup':

            return {
                ...state,
                [action.field]: action.value
            }

        case 'show_delivery':

            return {
                ...state,
                [action.field]: action.value
            }

        case 'hide_delivery':

            return {
                ...state,
                [action.field]: action.value
            }

        case 'show_bookshipment':

            return {
                ...state,
                [action.field]: action.value
            }
    
        default:
            return {
                ...state
            }
    }
}

export const CheckoutContext = createContext<ContextProps>();

export function CheckoutProvider({ children }: React.PropsWithChildren){

    const [step, setStep] = useState(1);

    const [checkoutState, dispatchCheckoutState] = useReducer(checkoutReducer, initialCheckoutState)

    const handleStepChange = (value: number) => {
        console.log('Value in handleStepChange is:', value)
        setStep(value)
    }

    const handleNextStep = () => {
        setStep( step => step + 1 );
    }




    return (
        <CheckoutContext.Provider value={{ step, handleStepChange, handleNextStep, dispatchCheckoutState, checkoutState }}>
                {children}
        </CheckoutContext.Provider>
    )
}