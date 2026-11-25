"use client";

import { createContext, useReducer } from "react";
import { QuoteDataState } from "@/lib/definitions";
import { QuoteDataAction } from "@/lib/definitions";
import { QuoteActionType } from "@/lib/definitions";
import { Dispatch, useState } from "react";

type QuoteContextData = {
  quoteDataState: QuoteDataState;
  dispatchQuoteDataState: Dispatch<QuoteDataAction>;
  handleVehicleErrors: (field: string, value: string) => void;
  vehicleErrors: vehicleErrorState;
};

export const QuoteContext = createContext<QuoteContextData>();

const initialQuoteData = {
  destinationForm: {
    pickupLocation: "",
    deliveryLocation: "",
    transportType: "",
  },
  vehicleDetails: {
    year: null,
    make: "",
    model: "",
  },
  contactDetails: {
    email: "",
    pickupDate: "",
    phone: "",
  },
};

// { type: 'SET_DESTINATION', field: 'destinationForm', value: data}

// { type: 'SET_DESTINATION', field: 'destinationForm', value: data}
// { type: 'SET_DESTINATION', field: 'destinationForm', value: data}
// { type: 'SET_VEHICLEDATA', field: 'vehicleDetails', value: data}
// {type: 'SET_CONTACTDATA', field: 'contactDetails', value: data}
// { type: 'SET_CONTACTDATA', field: 'contactDetails', value: data}
const quoteDataReducer = (state: QuoteDataState, action: QuoteDataAction) => {
  const reducer: Record<QuoteActionType, QuoteDataState> = {
    SET_DESTINATION: { ...state, [action.field]: action.value },
    SET_VEHICLEDATA: { ...state, [action.field]: action.value },
    SET_CONTACTDATA: { ...state, [action.field]: action.value },
  };

  const new_state = reducer[action.type];

  return new_state;
};

const initialVehicleErrors = {
  vehicleYearError: "",
  vehicleMakeError: "",
  vehicleModelError: "",
};

type vehicleErrorState = {
  vehicleYearError: string;
  vehicleMakeError: string;
  vehicleModelError: string;
};

export function QuoteProvider({ children }: React.PropsWithChildren) {
  // Global state for quote calculator

  const [quoteDataState, dispatchQuoteDataState] = useReducer(
    quoteDataReducer,
    initialQuoteData,
  );
  const [vehicleErrors, setVehicleErrors] = useState(initialVehicleErrors);

  const handleVehicleErrors = (field: string, value: string) => {
    // 'vehicleYearError', 'Please select Year'
    setVehicleErrors((state) => ({ ...state, [field]: value }));
  };

  return (
    <QuoteContext.Provider
      value={{
        quoteDataState,
        dispatchQuoteDataState,
        handleVehicleErrors,
        vehicleErrors,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}
