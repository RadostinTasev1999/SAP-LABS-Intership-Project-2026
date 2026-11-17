'use client'

import { createContext, useState, useReducer } from "react";
import { Dispatch } from "react";

type Action = {
    type: string,
    field: string,
    value: boolean | string
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
    checkoutState: initialCheckoutState,
    dispatchPickupError: Dispatch<Action>,
    pickupError: PickupErrors
}

type initialCheckoutState = {
    showTransport: boolean,
    showVehiclePickup: boolean,
    showVehicleDelivery: boolean,
    showBookshipment: boolean,
    showThankYou: boolean
}

const initialPickupErrors = {
    companyError: '',
    nameError: '',
    emailError: '',
    phoneError: ''
}

type PickupErrors = {
    companyError: string,
    nameError: string,
    emailError: string,
    phoneError: string
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
// { type: 'set_company_error', field: 'companyError', value: 'Please enter Company name'}
// { type: 'clear_company_error', field: 'companyError', value: ''}
// { type:'set_name_error', field: 'nameError', value: 'Please enter full name'}
// { type: 'clear_name_error', field: 'nameError', value: ''}
// { type: 'set_name_error', field: 'nameError', value: 'Please enter valid full name' }
// { type: 'set_email_error', field: 'emailError', value: 'Please enter email'}
// { type: 'clear_email_error', field: 'emailError', value: ''}
// { type: 'set_email_error', field: 'emailError', value: 'Please enter valid email'}
// { type: 'set_phone_error', field: 'phoneError', value: 'Please enter phone'}
// { type: 'clear_phone_error', field: 'phoneError', value: ''}
// { type: 'set_phone_error', field: 'phoneError', value: 'Please enter valid phone'}
const pickupReducer = (state: PickupErrors, action: Action) => {

    switch (action.type) {
        case 'set_company_error':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'clear_company_error':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'set_name_error':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'clear_name_error':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'set_email_error':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'clear_email_error':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'set_phone_error':
            return {
                ...state,
                [action.field]: action.value
            }

        case 'clear_phone_error':
            return {
                ...state,
                [action.field]: action.value
            }
            
    
        default:
            break;
    }
    return {
        ...state
    }
}

export const CheckoutContext = createContext<ContextProps>();

export function CheckoutProvider({ children }: React.PropsWithChildren){

    const [step, setStep] = useState(1);

    const [checkoutState, dispatchCheckoutState] = useReducer(checkoutReducer, initialCheckoutState)

    const [pickupError, dispatchPickupError] = useReducer(pickupReducer, initialPickupErrors)


    const handleStepChange = (value: number) => {
        console.log('Value in handleStepChange is:', value)
        setStep(value)
    }

    const handleNextStep = () => {
        setStep( step => step + 1 );
    }


    return (
        <CheckoutContext.Provider value={{ step, handleStepChange, handleNextStep, dispatchCheckoutState, checkoutState, dispatchPickupError, pickupError }}>
                {children}
        </CheckoutContext.Provider>
    )
}