"use client";

import {StepKeys, StepValues} from '@/lib/definitions'
import { QuoteProvider } from "@/components/providers/QuoteProvider";
import React from "react";

import StepperComponent from '@/components/shared/stepper/Stepper';
import QuoteContactForm from "../../forms/contactForm/ContactForm";
import QuoteDestinationForm from "../../forms/destinationForm/QuoteDestinationForm";
import QuoteVehicleForm from "../../forms/vehicleForm/QuoteVehicleForm";
import HeroQuoteHeading from "./HeroQuoteHeading";
import HeroQuoteParagraph from "./HeroQuoteParagraph";
import { HeroQuoteCardProps, QuoteStateAction } from "@/lib/definitions";

import { useQuoteState } from "@/features/hooks/useQuoteState";
import { useStepperState } from "@/features/hooks/useStepperState";


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
  /*
    {
    showDestinationForm: boolean;
    showVehicleForm: boolean;
    showContactForm: boolean;
}
  */
  const { activeStep, setActiveStep} = useStepperState();


const stepper_indicator: Record<StepKeys,StepValues> = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3
  }

  const updateActiveStep = (STEP: string) => {


    switch (STEP) {
      case "FIRST":
        // update state
        setActiveStep(stepper_indicator[STEP])
        break;
      case "SECOND":
        // update state
        setActiveStep(stepper_indicator[STEP])
        break;

      default:
        break;
    }

  }

  const handleActiveStep = (state: number) => {
    setActiveStep(state);
  };

  const updateQuoteState = (action: QuoteStateAction) => {

    dispatchQuoteState(action)
  }

  
  const destinationStep = (STEP: string) => {

    if (quoteState.showDestinationForm) {
      return;
    }
    if (quoteState.showVehicleForm) {
      // Hide vehicle form
      updateQuoteState({ type: 'HIDE_VEHICLE', field: 'showVehicleForm', value: false })
    } else if (quoteState.showContactForm) {
      // Hide contact form
      updateQuoteState({ type: 'HIDE_CONTACT', field: 'showContactForm', value: false })
    }
    // Show destination form
    updateQuoteState({ type: 'SHOW_DESTINATION', field: 'showDestinationForm', value: true })

    // update active step
    updateActiveStep(STEP);
  }

  const vehicleStep = (STEP: string) => {
    // If Vehicle form is active, do nothing
        if (quoteState.showVehicleForm || quoteState.showDestinationForm) {
          return;
        }
         // Hide Contact Info Form
        if (quoteState.showContactForm) {
          updateQuoteState({ type: 'HIDE_CONTACT', field: 'showContactForm', value: false})
        }
        // Show Vehicle form
        updateQuoteState({ type: 'SHOW_VEHICLE', field: 'showVehicleForm', value: true})
        

        // Update Active step
        updateActiveStep(STEP)
  }

  const onStepChange = (step: number) => {

    const triggered_step = Object.entries(stepper_indicator).find((entry) => entry[1] === step)

    const step_indicator = triggered_step !== undefined ? triggered_step[0] : undefined;

    if (!step_indicator) {
        return;
    }

    switch (step_indicator) {
      case "FIRST":
        // invoke function to perform business logic
        
        destinationStep(step_indicator)
        break;

      case "SECOND":
        // invoke function to perform business logic
        vehicleStep(step_indicator)
        break;
    
      default:
        break;
    }

  };

  // handler for hiding vehicle form
  const hideQuoteForm = (action: QuoteStateAction) => {
    dispatchQuoteState(action);
  };

  // handler for
  const showQuoteForm = (action: QuoteStateAction) => {
    dispatchQuoteState(action);
  };

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
