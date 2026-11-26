"use client";

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

import { CheckoutContext } from "@/components/providers/CheckoutProvider";
import { useContext } from "react";

import { CheckIcon, LoaderCircleIcon } from "lucide-react";

const steps = [
  {
    title: "Transport",
  },
  {
    title: "Pickup",
  },
  {
    title: "Delivery",
  },
  {
    title: "Bookshipment",
  },
  {
    title: "Thank you",
  },
];

export default function CheckoutProgress() {
  const { step, handleStepChange } = useContext(CheckoutContext);

  return (
    <Stepper
      value={step}
      onValueChange={handleStepChange}
      indicators={{
        completed: <CheckIcon className="size-3.5 text-green-600" />,
        loading: <LoaderCircleIcon className="size-3.5 animate-spin" />,
      }}
      className="w-full max-w-5xl space-y-8 mx-auto"
    >
      <StepperNav>
        {steps.map((step, index) => (
          <StepperItem key={index} step={index + 1} className="relative">
            <StepperTrigger className="flex justify-start gap-1.5">
              <StepperIndicator>{index + 1}</StepperIndicator>
              <StepperTitle>{step.title}</StepperTitle>
            </StepperTrigger>

            {steps.length > index + 1 && (
              <StepperSeparator className="group-data-[state=completed]/step:bg-primary md:mx-2.5" />
            )}
          </StepperItem>
        ))}
      </StepperNav>
      {/* <StepperPanel className='text-sm'>
                {
                    steps.map((step,index) => (
                        <StepperContent
                            key={index}
                            value={index + 1}
                            className='flex items-center justify-center'
                            >
                                {step.title} content
                        </StepperContent>
                    ))
                }
            </StepperPanel> */}
    </Stepper>
  );
}
