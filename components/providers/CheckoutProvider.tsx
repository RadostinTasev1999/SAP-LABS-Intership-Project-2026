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
// { type: 'hide_vehiclepickup', field: 'showVehiclePickup', value: false}
// { type: 'show_transport', field: 'showTransport', value: true}
// { type: 'hide_delivery', field: 'showVehicleDelivery', value: false}
// { type: 'show_vehiclepickup', field: 'showVehiclePickup', value: true}
// { type: 'hide_bookshipment', field: 'showBookshipment', value: false}
const checkoutReducer = (state: initialCheckoutState, action: Action ) => {

    switch (action.type) {

        case 'show_transport':

            return {
                ...state,
                [action.field]: action.value
            }

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

        case 'hide_bookshipment':

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

const initalVehiclePickupErrors = {
    streetAddressError: '',
    addressDetailsError: '',
    accompanyingNameError: '',
    accompanyingPhoneError: ''
}

type VehiclePickupErrorState = {
    streetAddressError: string,
    addressDetailsError: string,
    accompanyingNameError: string,
    accompanyingPhoneError: string
}

const vehiclePickupReducer = (state: VehiclePickupErrorState, action: Action) => {

    switch (action.type) {
        case 'value':
            return {
                ...state
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

    const [pickupError, dispatchPickupError] = useReducer(pickupReducer, initialPickupErrors)

    const [vehiclePickupError, setVehiclePickupError] = useReducer(vehiclePickupReducer, initalVehiclePickupErrors)


    const handleStepChange = (value: number) => {
        
        // Get active step:
        const activeStep = step
        console.log('Active step is:', step)
        // Get triggered step
        const triggeredStep = value
        console.log('Triggered step is:', value)

        switch (triggeredStep) {
            case 1:
                // Transport form
                if (activeStep === triggeredStep) {
                    break;
                }
                if (activeStep < triggeredStep) {
                    break;
                } else if (activeStep > triggeredStep) {
                    // hide form corresponding to activeStep
                    hideCheckoutForm(activeStep)
                    // show form corresponding to triggered step
                    showCheckoutForm(triggeredStep)
                    // update stepper's active step
                    setStep(triggeredStep)
                }
                
                break;
            case 2:
                // Pickup form
                if (triggeredStep === activeStep) {
                    break;
                }
                if (triggeredStep > activeStep) {
                    break;
                } else if (activeStep > triggeredStep) {
                    // hide form corresponding to active step
                    hideCheckoutForm(activeStep)
                    // show form corresponding to triggered step
                    showCheckoutForm(triggeredStep)
                    // update stepper active step
                    setStep(triggeredStep)
                }
                break;

            case 3:
                // Delivery form
                if (triggeredStep === activeStep) {
                    break;
                }
                if (triggeredStep > activeStep) {
                    break;
                } else if (triggeredStep < activeStep) {
                    // hide form corresponding to active step
                    hideCheckoutForm(activeStep)
                    // show form corresponding to triggered step
                    showCheckoutForm(triggeredStep)
                    // update stepper active step to triggered step
                    setStep(triggeredStep)
                }

                break;
        
            default:
                break;
        }

        // setStep(value)
    }

    const hideCheckoutForm = (activeStep: number) => {

        switch (activeStep) {
            case 1:
                
                break;

            case 2:
                // Pickup form
                dispatchCheckoutState({ type: 'hide_vehiclepickup', field: 'showVehiclePickup', value: false})
                break;

            case 3:
                // Delivery form
                dispatchCheckoutState({ type: 'hide_delivery', field: 'showVehicleDelivery', value: false})

                break;

            case 4:
                // Bookshipment
                dispatchCheckoutState({ type: 'hide_bookshipment', field: 'showBookshipment', value: false})
                break;
        
            default:
                break;
        }
    }

    const showCheckoutForm = (triggeredStep: number) => {

        switch (triggeredStep) {
            case 1:
                // Transport form
                dispatchCheckoutState({ type: 'show_transport', field: 'showTransport', value: true})
                break;

            case 2:
                // Pickup form
                dispatchCheckoutState({ type: 'show_vehiclepickup', field: 'showVehiclePickup', value: true})
                break;

            case 3:
                // Delivery form
                dispatchCheckoutState({ type: 'show_delivery', field: 'showVehicleDelivery', value: true})
                break;
        
            default:
                break;
        }
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