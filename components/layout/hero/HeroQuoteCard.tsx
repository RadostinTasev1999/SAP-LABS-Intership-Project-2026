"use client";

import { MouseEvent, useEffect } from "react";
import { DashRing } from "@/components/shared/shadcn/dash-ring";

import QuoteVehicleForm from "../../forms/vehicleForm/QuoteVehicleForm";
import HeroQuoteHeading from "./HeroQuoteHeading";
import HeroQuoteParagraph from "./HeroQuoteParagraph";
import QuoteDestinationForm from "../../forms/destinationForm/QuoteDestinationForm";
import QuoteContactForm from "../../forms/contactForm/ContactForm";
import StepperComponent from '@/components/shared/stepper/Stepper'

import { QuoteFormState } from "@/lib/definitions";

import { useReducer, useState, useCallback,Suspense } from "react";

import { HeroQuoteCardProps } from "@/lib/definitions";
import { DestinationFormState } from "@/lib/definitions";
import { QuoteStateAction } from "@/lib/definitions";

const initialState = {
  origin: "",
  delivery: "",
  transport: "open",
  year: "",
  make: "",
  model: "",
  isDriving: true,
  email: "",
  priority: "",
  phone: "",
};

const quoteInitialState = {
  showDestinationForm: true,
  showVehicleForm: false,
  showContactForm: false,
};

// { type: 'SHOW_VEHICLE', field: 'showVehicleForm', value: true }
/*
  {type: 'hide_contact', field: 'showContactForm', value: false }
*/
const stateReducer = (state: QuoteFormState, action: QuoteStateAction) => {
  switch (action.type) {
    case "show_destination":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "hide_destination":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "show_vehicle":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "hide_vehicle":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "show_contact":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "hide_contact":
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};

// { type: 'SHOW_VEHICLE', field: 'showVehicleForm', value: true }

// { type: 'set_contactdata', email: email, priority: priority, phone: phone}
const quoteReducer = (state: DestinationFormState, action: Action) => {
  switch (action.type) {
    case "SET_ORIGIN":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_DELIVERY":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_TRANSPORT":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_YEAR":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_MAKE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_MODEL":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "set_contactdata":
      return {
        ...state,
        email: action.email,
        priority: action.priority,
        phone: action.phone,
      };

    default:
      return {
        ...state,
      };
  }
};

const steps = [
  {
    title: "Destination",
  },
  {
    title: "Vehicle",
  },
  {
    title: "Contact Info",
  },
];

const initialDestination = {
  success: "",
  errors: {
    origin: "",
    delivery: "",
    message: "",
  },
};

export default function HeroQuoteCard({
  quoteHeading,
  quoteParagraph,
  pickupZip,
  deliveryZip,
  transportType,
  submitBtn,
  securityNote,
  renderOffer
}: HeroQuoteCardProps) {
  const [quoteData, dispatchQuoteData] = useReducer(quoteReducer, initialState);
  const [quoteState, dispatchQuoteState] = useReducer(
    stateReducer,
    quoteInitialState,
  );
  const [activeStep, setActiveStep] = useState(1);

  // const [destinationState, dispatchDestination] = useReducer(destinationReducer, initialDestination)

  const handleActiveStep = (state: number) => {
    setActiveStep(state);
  };

  const onStepChange = (step: number) => {
    switch (step) {
      case 1:
        // If Destination form is active, do nothing
        if (quoteState.showDestinationForm) {
          return;
        }

        // hide vehicle or contact infor inputs
        if (quoteState.showVehicleForm) {
          dispatchQuoteState({
            type: "hide_vehicle",
            field: "showVehicleForm",
            value: false,
          });
        } else if (quoteState.showContactForm) {
          dispatchQuoteState({
            type: "hide_contact",
            field: "showContactForm",
            value: false,
          });
        }
        // Show destination form
        dispatchQuoteState({
          type: "show_destination",
          field: "showDestinationForm",
          value: true,
        });
        // update active step
        setActiveStep(step);

        break;

      case 2:
        // If Vehicle form is active, do nothing
        if (quoteState.showVehicleForm || quoteState.showDestinationForm) {
          return;
        }

        // Hide Contact Info Form
        if (quoteState.showContactForm) {
          dispatchQuoteState({
            type: "hide_contact",
            field: "showContactForm",
            value: false,
          });
        }
        // Show Vehicle form
        dispatchQuoteState({
          type: "show_vehicle",
          field: "showVehicleForm",
          value: true,
        });
        // Update Active step
        setActiveStep(step);
        break;

      case 3:
        // Do nothing

        break;

      default:
        break;
    }
  };

  // onClick handler for vehicle quote form

  const vehicleComplete = useCallback(() => {
    // Mark Vehicle form as completed
    handleActiveStep(3);
    // Hide Vehicle inputs
    dispatchQuoteState({
      type: "hide_vehicle",
      field: "showVehicleForm",
      value: false,
    });

    // Show Contact inputs
    dispatchQuoteState({
      type: "show_contact",
      field: "showContactForm",
      value: true,
    });
  }, []);

  useEffect(() => {
    console.log("Quote data is:", quoteData);
  }, [quoteData]);

  return (
    <div className="w-full p-6 sm:p-9">
      <Suspense fallback={<DashRing className="size-10 mx-auto my-4" />}>
        {quoteState.showDestinationForm && (
          <>
            <HeroQuoteHeading quoteHeading={quoteHeading} />

            <HeroQuoteParagraph quoteParagraph={quoteParagraph} />

            <QuoteDestinationForm
              pickupZip={pickupZip}
              deliveryZip={deliveryZip}
              transportType={transportType}
              submitBtn={submitBtn}
              dispatchQuoteData={dispatchQuoteData}
              dispatchQuoteState={dispatchQuoteState}
              handleActiveStep={handleActiveStep}
            />
          </>
        )}
        {quoteState.showVehicleForm && (
          <QuoteVehicleForm
            vehicleComplete={vehicleComplete}
            dispatchQuoteData={dispatchQuoteData}
            handleActiveStep={handleActiveStep}
          />
        )}
        {quoteState.showContactForm && (
          <QuoteContactForm
            dispatchQuoteData={dispatchQuoteData}
            handleActiveStep={handleActiveStep}
            renderOffer={renderOffer}
          />
        )}

        {/* Stepper */}
        <StepperComponent
            activeStep={activeStep}
            onStepChange={onStepChange}
            steps={steps}
            />
      </Suspense>
      {/* Security note */}
      {/* <HeroSecNote
                securityNote={securityNote}
            /> */}
    </div>
  );
}
