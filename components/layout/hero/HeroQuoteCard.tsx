"use client";

import { MouseEvent, useEffect } from "react";

import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/shared/shadcn/stepper";

import { CheckIcon } from "lucide-react";
import { LoaderCircleIcon } from "lucide-react";

import QuoteVehicleForm from "../../forms/vehicleForm/QuoteVehicleForm";
import HeroQuoteHeading from "./HeroQuoteHeading";
import HeroQuoteParagraph from "./HeroQuoteParagraph";
import QuoteDestinationForm from "../../forms/destinationForm/QuoteDestinationForm";
import QuoteContactForm from "../../forms/contactForm/ContactForm";

import { QuoteFormState } from "@/lib/definitions";

import { useReducer, useState } from "react";

import { HeroQuoteCardProps } from "@/lib/definitions";
import { DestinationFormState } from "@/lib/definitions";
import { Action } from "@/lib/definitions";

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
const stateReducer = (state: QuoteFormState, action: Action) => {
  switch (action.type) {
    case "HIDE_DESTINATION":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SHOW_VEHICLE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "HIDE_VEHICLE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SHOW_CONTACT":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "HIDE_CONTACT":
      return {
        ...state,
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
    console.log("Step changed!", step);

    switch (step) {
      case 1:
        break;

      case 2:
        break;

      case 3:
        break;

      default:
        break;
    }
  };

  // onClick handler for vehicle quote form

  const vehicleComplete = (event: MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    // Mark Vehicle form as completed
    handleActiveStep(3);
    // Hide Vehicle inputs
    dispatchQuoteState({
      type: "HIDE_VEHICLE",
      field: "showVehicleForm",
      value: false,
    });

    console.log("Current quote data is:", quoteData);
    // Show Contact inputs
    dispatchQuoteState({
      type: "SHOW_CONTACT",
      field: "showContactForm",
      value: true,
    });
  };

  useEffect(() => {
    console.log("Quote data is:", quoteData);
  }, [quoteData]);

  return (
    <div className="w-full p-6 sm:p-9">
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
        />
      )}

      {/* Stepper */}
      <Stepper
        className="w-full max-w-md space-y-8 mt-4 py-4 border-y border-slate-400"
        value={activeStep}
        onValueChange={onStepChange}
        indicators={{
          completed: <CheckIcon className="size-6 text-green-500" />,
          loading: <LoaderCircleIcon className="size-3.5 animate-spin" />,
        }}
      >
        <StepperNav>
          {steps.map((step, index) => (
            <StepperItem
              key={index}
              step={index + 1}
              className="relative flex-1 items-start"
            >
              <StepperTrigger className="flex flex-col gap-2.5">
                <StepperIndicator>{index + 1}</StepperIndicator>
                <StepperTitle>{step.title}</StepperTitle>
              </StepperTrigger>

              {steps.length > index + 1 && (
                <StepperSeparator className="group-data-[state=completed]/step:bg-primary absolute inset-x-0 top-3 left-[calc(50%+0.875rem)] m-0 group-data-[orientation=horizontal]/stepper-nav:w-[calc(100%-2rem+0.225rem)] group-data-[orientation=horizontal]/stepper-nav:flex-none" />
              )}
            </StepperItem>
          ))}
        </StepperNav>
      </Stepper>

      {/* Security note */}
      {/* <HeroSecNote
                securityNote={securityNote}
            /> */}
    </div>
  );
}
