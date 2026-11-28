"use client";

import { stepperSteps } from "@/lib/placeholderdata";
import { QuoteDataAction } from "@/lib/definitions";

import ArrowRight from "@/components/shared/icons/ArrowRight";

import VehicleSelectInput from "./VehicleSelectInput";

import { QuoteVehicleProps } from "@/lib/definitions";

import { QuoteContext } from "@/components/providers/QuoteProvider";
import { useContext } from "react";

import { ChangeEvent, useState } from "react";

import { useFetchMakes } from "@/features/hooks/useFetchMakes";
import { useFetchModels } from "@/features/hooks/useFetchModels";
import { useFetchYears } from "@/features/hooks/useFetchYears";


export default function QuoteVehicleForm({
  hideQuoteForm,
  showQuoteForm,
  handleActiveStep,
}: QuoteVehicleProps) {

  const { handleVehicleErrors, dispatchQuoteDataState } =
    useContext(QuoteContext);

  // submit button state
  const [isDisabled, setIsDisabled] = useState(false);

  // const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  
  // vehicle years
  const years = useFetchYears();
// vehicle makes
  const makes = useFetchMakes();

  // vehicle model
  const models = useFetchModels(selectedYear, selectedMake);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    
    const field = e.target.name;


    switch (field) {
      case "selectedYear":
        // set selected year
        setSelectedYear(Number(e.target.value));
        // clear input errors
        handleVehicleErrors("vehicleYearError", "");
        // enable submit button
        setIsDisabled(false);
        break;

      case "selectedMake":
        // set selected make
        setSelectedMake(e.target.value);
        // clear field errors
        handleVehicleErrors("vehicleMakeError", "");
        // enable submit button
        setIsDisabled(false);
        break;

      case "selectedModel":
        // set selected model
        setSelectedModel(e.target.value);
        // clear field errors
        handleVehicleErrors("vehicleModelError", "");
        // enable submit button
        setIsDisabled(false);
        break;

      default:
        break;
    }
  };

  const inputValidation = (
    selectedYear: number | null,
    selectedMake: string | null,
    selectedModel: string | null,
  ) => {
    let isValid = true;

    // validate selectedYear
    if (!selectedYear) {
      // set input errors
      handleVehicleErrors("vehicleYearError", "Please select Year");
      // disable button
      isValid = false;
    }
    // validate selected make
    if (!selectedMake) {
      // set field errors
      handleVehicleErrors("vehicleMakeError", "Please select Make");
      // disable submit button
      isValid = false;
    }

    if (!selectedModel) {
      // set field errors
      handleVehicleErrors("vehicleModelError", "Please select Model");
      // disable submit button
      isValid = false;
    }

    /*
      handleVehicleErrors - calls setVehicleErrors  in QuoteProvider.tsx 
                            which creates a new error-state object
                            and schedules a provider update.
                            The provider then creates a new value object
                            ,so components consuming QuoteCOntext including QUoteVehicleForm
                            will re-render
    */

    return isValid;
  };

  const vehicleComplete = (e: MouseEvent<HTMLButtonElement>) => {
    // validate inputs
    const validation = inputValidation(
      selectedYear,
      selectedMake,
      selectedModel,
    );

    if (!validation) {
      // disable submit button
      setIsDisabled(true);
      return;
    }
    // If validation passes, update global state
    const data = {
      year: selectedYear,
      make: selectedMake,
      model: selectedModel,
    };
    saveVehicleData({
      type: "SET_VEHICLEDATA",
      field: "vehicleDetails",
      value: data,
    });
    // Hide Vehicle form
    hideQuoteForm({
      type: 'HIDE_VEHICLE',
      field: 'showVehicleForm',
      value: false
    })
   
    // Update stepper
    handleActiveStep(stepperSteps.THIRD);
    // Show Contact form
    showQuoteForm({
      type: 'SHOW_CONTACT',
      field: 'showContactForm',
      value: true
    })
   
  };

  const saveVehicleData = (action: QuoteDataAction) => {
    dispatchQuoteDataState(action);
  };

  

  return (
    <div className="mb-4 p-[18px]">
      <h1 className="mb-[14px] text-base font-semibold text-slate-600">
        Enter Your Vehicle Details
      </h1>

      <div className="grid grid-cols-2 gap-[14px]">
        {/* Col 1 Year */}

        <VehicleSelectInput
          years={years}
          label="Year"
          id="years"
          name="selectedYear"
          defaultValue="Select Year"
          handleSelectChange={handleSelectChange}
        />

        {/* Col 2 Make */}
        <VehicleSelectInput
          makes={makes}
          label="Make"
          id="make"
          name="selectedMake"
          defaultValue="Select Make"
          handleSelectChange={handleSelectChange}
        />

        {/* Col 3 Model */}
        <VehicleSelectInput
          models={models}
          label="Model"
          id="model"
          name="selectedModel"
          defaultValue="Select Model"
          handleSelectChange={handleSelectChange}
          // handleSelectClick={handleSelectClick}
        />

        {/* button */}
        <div className="flex items-center">
          <button
            onClick={vehicleComplete}
            className={`inline-flex w-full items-center justify-center rounded-md px-[14px] py-[11px] gap-2 mt-2.5 text-base font-bold text-white transition-all hover:-translate-y-0.5  ${isDisabled ? "bg-slate-300 hover:bg-slate-400" : "bg-slate-900 hover:bg-slate-800"}`}
            disabled={isDisabled}
          >
            Enter Contact
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
