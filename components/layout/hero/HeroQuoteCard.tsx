"use client";

import { QuoteProvider } from "@/components/providers/QuoteProvider";
import React from "react";

import StepperComponent from '@/components/shared/stepper/Stepper';
import QuoteContactForm from "../../forms/contactForm/ContactForm";
import QuoteDestinationForm from "../../forms/destinationForm/QuoteDestinationForm";
import QuoteVehicleForm from "../../forms/vehicleForm/QuoteVehicleForm";
import HeroQuoteHeading from "./HeroQuoteHeading";
import HeroQuoteParagraph from "./HeroQuoteParagraph";

import { useState } from "react";

import { HeroQuoteCardProps, QuoteStateAction } from "@/lib/definitions";

import { useQuoteState } from "@/features/hooks/useQuoteState";

// const initialState = {
//   origin: "",
//   delivery: "",
//   transport: "open",
//   year: "",
//   make: "",
//   model: "",
//   isDriving: true,
//   email: "",
//   priority: "",
//   phone: "",
// };


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
  renderOffer
}: HeroQuoteCardProps) {

  const { quoteState, dispatchQuoteState } = useQuoteState();

// ! TODO: implement global state management for quoteData state
  
  const [activeStep, setActiveStep] = useState(1);

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


  // handler for hiding vehicle form
  const hideQuoteForm = (action: QuoteStateAction) => {

    dispatchQuoteState(action)
  }

  // handler for 
  const showQuoteForm = (action: QuoteStateAction) => {

    dispatchQuoteState(action)
  }


  

  return (
    <QuoteProvider>
      <div className="w-full p-6 sm:p-9">
        {quoteState.showDestinationForm && (
          <React.Fragment>
            <HeroQuoteHeading quoteHeading={quoteHeading} />

            <HeroQuoteParagraph quoteParagraph={quoteParagraph} />

            <QuoteDestinationForm
              pickupZip={pickupZip}
              deliveryZip={deliveryZip}
              transportType={transportType}
              submitBtn={submitBtn}
              handleActiveStep={handleActiveStep}
              hideQuoteForm={hideQuoteForm}
              showQuoteForm={showQuoteForm}
            />
          </React.Fragment>
        )}
        {quoteState.showVehicleForm && (
          <QuoteVehicleForm
            handleActiveStep={handleActiveStep}
            hideQuoteForm={hideQuoteForm}
            showQuoteForm={showQuoteForm}
          />
        )}
        {quoteState.showContactForm && (
          <QuoteContactForm
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
        {/* Security note */}
        {/* <HeroSecNote
                securityNote={securityNote}
            /> */}
      </div>
    </QuoteProvider>
  );
}
