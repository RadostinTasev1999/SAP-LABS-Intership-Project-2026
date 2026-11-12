import { StepperProps } from '@/lib/definitions'

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

export default function StepperComponent({
    activeStep,
    onStepChange,
    steps
}: StepperProps){

    return(
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
    )
}