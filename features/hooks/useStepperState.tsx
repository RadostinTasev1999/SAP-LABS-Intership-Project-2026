import { useState } from "react";

const FIRST_STEP = 1;

export const useStepperState = () => {

    // create state for activated step
    const [activeStep, setActiveStep] = useState(FIRST_STEP);

    


    return {
        activeStep,
        setActiveStep
    }

}