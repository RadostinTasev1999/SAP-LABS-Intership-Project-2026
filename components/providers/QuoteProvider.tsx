import { createContext, useReducer } from "react";
import { QuoteDataState } from "@/lib/definitions";
import { QuoteDataAction } from "@/lib/definitions";
import { QuoteActionType } from "@/lib/definitions";
import { Dispatch } from "react";

type QuoteContextData = {
    quoteDataState: QuoteDataState,
    dispatchQuoteDataState: Dispatch<QuoteDataAction>

}

export const QuoteContext = createContext<QuoteContextData>();

const initialQuoteData = {
    destinationForm: {
        pickupLocation: '',
        deliveryLocation: '',
        transportType: ''
    },
    vehicleDetails: {
        year: '',
        make: '',
        model: ''
    },
    contactDetails: {
        email: '',
        pickupDate: '',
        phone: ''
    }
}


// { type: 'SET_DESTINATION', field: 'destinationForm', value: data}
const quoteDataReducer = (state: QuoteDataState, action: QuoteDataAction) => {

    const reducer: Record<QuoteActionType, QuoteDataState> = {
        SET_DESTINATION: {...state, [action.field]: action.value},
    }

    const new_state = reducer[action.type]

    return new_state
   
}

export function QuoteProvider({ children }: React.PropsWithChildren){

    // Global state for quote calculator

    const [quoteDataState, dispatchQuoteDataState] = useReducer(quoteDataReducer, initialQuoteData);
    
    return (
        <QuoteContext.Provider value={{ quoteDataState, dispatchQuoteDataState }}>
            {children}
        </QuoteContext.Provider>
    )
}