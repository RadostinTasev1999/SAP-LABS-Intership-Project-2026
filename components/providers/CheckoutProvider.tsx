'use client'

import { createContext, useState, useReducer } from "react";
import { Dispatch } from "react";
import { DeliveryErrorActionType, InitialCheckoutDataProp } from '@/lib/definitions'
import { CheckoutDataAction } from '@/lib/definitions'
import { CheckoutReducerAction } from '@/lib/definitions'
import { ActionType } from '@/lib/definitions'
import { VehiclePickupErrorAction } from '@/lib/definitions'
import { PickupErrorActionType } from '@/lib/definitions'
import { CheckoutDataActionType } from '@/lib/definitions'
import { CheckoutTypeValues } from '@/lib/definitions'
import { VehicleDeliveryErrorAction } from  '@/lib/definitions'

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
    pickupError: PickupErrors,
    dispatchCheckoutData: Dispatch<CheckoutDataAction>,
    checkoutData: InitialCheckoutDataProp,
    dispatchVehiclePickupError: Dispatch<VehiclePickupErrorAction>,
    vehiclePickupError: VehiclePickupErrorState,
    dispatchVehicleDeliveryError: Dispatch<VehicleDeliveryErrorAction>,
    vehicleDeliveryError: VehicleDeliveryErrorState,
    hideBookingForm: (action: CheckoutReducerAction) => void,
    showVehicleDeliveryForm:(action: CheckoutReducerAction) => void,
    revertStep: () => void
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


// { type: 'HIDE_DELIVERY', field: 'showVehicleDelivery', value: false}
// { type: 'SHOW_BOOKSHIPMENT', field: 'showBookshipment', value: true}
// { type:'HIDE_BOOKSHIPMENT', field: 'showBookshipment', value: false}
// { type: 'SHOW_DELIVERY', field: 'showVehicleDelivery', value: true}
const checkoutReducer = (state: initialCheckoutState, action: CheckoutReducerAction ) => {
    // Record<Keys, Type>
    const reducer: Record<ActionType, initialCheckoutState> = {
        SHOW_TRANSPORT: {...state},
        HIDE_TRANSPORT: {...state, [action.field]: action.value},
        SHOW_VEHICLEPICKUP: {...state, [action.field]: action.value},
        HIDE_VEHICLEPICKUP: {...state, [action.field]: action.value},
        SHOW_DELIVERY: {...state, [action.field]: action.value},
        HIDE_DELIVERY: {...state, [action.field]: action.value},
        SHOW_BOOKSHIPMENT: {...state, [action.field]: action.value},
        HIDE_BOOKSHIPMENT: {...state, [action.field]: action.value}
    }

    const new_state = reducer[action.type]

    return new_state
        
    
}

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

const initialCheckoutData = {
    transportForm: {
        clientType: '',
        companyName: '',
        fullName: '',
        emailAddress: '',
        phoneNumber: ''
    },
    vehiclePickupForm: {
        streetAddress: '',
        addressDetails:'',
        addressType: '',
        contactPerson: ''
    },
    vehicleDeliveryForm: {
        streetAddress: '',
        addressDetails:'',
        addressType: 'residential',
        contactPerson: 'contact_me',
        accompanyingName: '',
        accompanyingPhone:'',
        showAccompanyingInputs: false
    },
    bookShipmentForm: {
        cardNumber: '',
        fullNameCard: '',
        expDate: '',
        securityCode: '',
        billingAddress: {
            street: '',
            apartment: '',
            city: '',
            state: '',
            zipCode: ''
        }


    }
    
}

const initialDeliveryErrors = {
    streetAddressError: '',
    addressDetailsError: '',
    accompanyingNameError: '',
    accompanyingPhoneError: ''
}

type VehicleDeliveryErrorState = {
    streetAddressError: string,
    addressDetailsError: string,
    accompanyingNameError: string,
    accompanyingPhoneError: string
}

// { type: 'SET_STREET_ERROR', field: 'streetAddressError', value: 'Please enter Street Address'}
// { type: 'CLEAR_STREET_ERROR', field: 'streetAddressError', value: ''}
// { type: 'CLEAR_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: ''}
// { type: 'SET_STREET_ERROR', field: 'streetAddressError', value: 'Please enter valid Street Address'}
// { type: 'SET_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: 'Please enter accompanying person name'}
const vehicleDeliveryReducer = (state: VehicleDeliveryErrorState, action: VehicleDeliveryErrorAction) => {

    const reducer: Record<DeliveryErrorActionType, VehicleDeliveryErrorState> = {
        SET_STREET_ERROR: {...state, [action.field]: action.value},
        SET_ADDRESS_DETAIL_ERROR: {...state, [action.field]: action.value},
        SET_ACCOMPANYING_NAME_ERROR: {...state, [action.field]: action.value},
        SET_ACCOMPANYING_PHONE_ERROR: {...state, [action.field]: action.value},
        CLEAR_STREET_ERROR: {...state, [action.field]: action.value},
        CLEAR_ADDRESS_DETAIL_ERROR: {...state, [action.field]: action.value},
        CLEAR_ACCOMPANYING_NAME_ERROR: {...state, [action.field]: action.value},
        CLEAR_ACCOMPANYING_PHONE_ERROR: {...state, [action.field]: action.value}
    }

    const new_state = reducer[action.type];

    return new_state
}

const vehiclePickupReducer = (state: VehiclePickupErrorState, action: VehiclePickupErrorAction) => {

    const reducer:Record<PickupErrorActionType, VehiclePickupErrorState> = {
        SET_STREET_ERROR: {...state, [action.field]: action.value},
        SET_ADDRESS_DETAIL_ERROR: {...state, [action.field]: action.value},
        SET_ACCOMPANYING_NAME_ERROR: {...state, [action.field]: action.value},
        SET_ACCOMPANYING_PHONE_ERROR: {...state, [action.field]: action.value},
        CLEAR_STREET_ERROR: {...state, [action.field]: action.value},
        CLEAR_ADDRESS_DETAIL_ERROR: {...state, [action.field]: action.value},
        CLEAR_ACCOMPANYING_NAME_ERROR: {...state, [action.field]: action.value},
        CLEAR_ACCOMPANYING_PHONE_ERROR: {...state, [action.field]: action.value}
    }

    const new_state = reducer[action.type]

    return new_state
    
}


// { type: 'SET_BOOKING_DATA', field: 'bookShipmentForm', value: bookingData}
// { type: 'SET_DELIVERY_DATA', field: 'vehicleDeliveryForm', value: value}
const checkoutDataReducer = (state: InitialCheckoutDataProp, action: CheckoutDataAction ) => {

    const reducer: Record<CheckoutDataActionType, InitialCheckoutDataProp> = {
        SET_TRANSPORT_DATA: {...state, [action.field]: action.value},
        SET_PICKUP_DATA: {...state, [action.field]: action.value},
        SET_DELIVERY_DATA: {...state, [action.field]: action.value},
        SET_BOOKING_DATA: {...state, [action.field]: action.value}
    }

    const new_state = reducer[action.type]

    return new_state
}

export const CheckoutContext = createContext<ContextProps>();

export function CheckoutProvider({ children }: React.PropsWithChildren){

    const [step, setStep] = useState(1);

    const [checkoutState, dispatchCheckoutState] = useReducer(checkoutReducer, initialCheckoutState)

    const [pickupError, dispatchPickupError] = useReducer(pickupReducer, initialPickupErrors)

    const [vehiclePickupError, dispatchVehiclePickupError] = useReducer(vehiclePickupReducer, initalVehiclePickupErrors)

    const [vehicleDeliveryError, dispatchVehicleDeliveryError] = useReducer(vehicleDeliveryReducer, initialDeliveryErrors)
    // Global state for CheckoutData
    const [checkoutData, dispatchCheckoutData] = useReducer(checkoutDataReducer, initialCheckoutData);


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

    const revertStep = () => {
        setStep(step => step - 1);
    }

    const handleNextStep = () => {
        setStep( step => step + 1 );
    }

    // { type:'HIDE_BOOKSHIPMENT', field: 'showBookshipment', value: false}
    const hideBookingForm = (action: CheckoutReducerAction) => {

        dispatchCheckoutState(action)
    }

    // { type: 'SHOW_DELIVERY', field: 'showVehicleDelivery', value: true}
    const showVehicleDeliveryForm = (action: CheckoutReducerAction) => {
        
        dispatchCheckoutState(action)
    }

    return (
        <CheckoutContext.Provider value={{ step, handleStepChange, handleNextStep, dispatchCheckoutState, checkoutState, dispatchPickupError, pickupError, dispatchCheckoutData, checkoutData, dispatchVehiclePickupError, vehiclePickupError, dispatchVehicleDeliveryError, vehicleDeliveryError, hideBookingForm, showVehicleDeliveryForm, revertStep }}>
                {children}
        </CheckoutContext.Provider>
    )
}