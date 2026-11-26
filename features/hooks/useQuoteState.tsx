import { useReducer } from "react"
import { QuoteFormState } from "@/lib/definitions"
import { QuoteStateAction } from '@/lib/definitions'
import { QuoteStateActionType } from "@/lib/definitions"


const quoteInitialState = {
    showDestinationForm: true,
    showVehicleForm: false,
    showContactForm: false,
}

// {type: 'HIDE_DESTINATION', field: 'showDestinationForm', value: false}
// {type: 'SHOW_VEHICLE', field: 'showVehicleForm', value: true}
const stateReducer = (state: QuoteFormState, action: QuoteStateAction) => {

    const reducer: Record<QuoteStateActionType, QuoteFormState> = {
        SHOW_DESTINATION: {...state, [action.field]: action.value},
        HIDE_DESTINATION: {...state, [action.field]: action.value},
        SHOW_VEHICLE: {...state, [action.field]: action.value},
        HIDE_VEHICLE: {...state, [action.field]: action.value},
        SHOW_CONTACT: {...state, [action.field]: action.value},
        HIDE_CONTACT: {...state, [action.field]: action.value}
    }
    
    const new_state = reducer[action.type]

    return new_state
}
// Custom hook
export const useQuoteState = () => {

    const [quoteState, dispatchQuoteState] = useReducer(stateReducer, quoteInitialState);


    return {
        quoteState,
        dispatchQuoteState
    }

}