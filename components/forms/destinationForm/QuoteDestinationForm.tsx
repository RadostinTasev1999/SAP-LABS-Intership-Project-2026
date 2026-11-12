"use client";

import { ErrorState } from "@/lib/definitions";
import QuotePickupInput from "./QuotePickupInput";
import QuoteDeliveryInput from "./QuoteDeliveryInput";
import { DestinationAction } from "@/lib/definitions";

import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

import { ChangeEvent, useReducer, useState, useCallback } from "react";

import { SelectedLocation } from "@/lib/definitions";

import ArrowRight from "@/components/shared/icons/ArrowRight";

import { QuoteDestinationProps } from "@/lib/definitions";

import QuestionCircleIcon from "@/components/shared/icons/QuestionCircleIcon";

// MUI library
const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    describeChild
    {...props}
    classes={{ popper: className }}
    placement="top-start"
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

const API_URL = "http://localhost:3000/zips";
// {type: 'SET_ORIGIN', field: field, value: `${data.city}, ${data.state} ${data.zip}`}
// {type: 'SET_DELIVERY', field: field, value: `${data.city}, ${data.state} ${data.zip}`}
// {type: 'SET_TRANSPORT', field: 'transport', value: e.target.value}

const initialErrors = {
  originError: "",
  deliveryError: "",
};
// { type: 'ORIGIN_ERROR', field: 'origin', value: 'Please Select Valid Origin'}
// {type: 'ORIGIN_ERROR', field: 'origin', value: 'Please Select Pickup location'}
// {type: 'ORIGIN_ERROR', field: 'origin', value: 'Please Select Pickup location'}

// {type: 'ORIGIN_ERROR', field: 'origin', value: 'Please Select Pickup location'}

// { type: 'DELIVERY_ERROR', field: 'deliveryError', value: 'Please Select Delivery location'}

// { type: 'RESET_ORIGIN', field: 'originError', value: ''}
// { type: 'RESET_DELIVERY', field: 'deliveryError', value: ''}
// {type: 'INVALID_ORIGIN', field: 'originError', value: 'Please Select Valid Origin' }
// { type: 'INVALID_DELIVERY', field: 'deliveryError', value: 'Please Select Valid Delivery Location'}

// { type: 'INVALID_DELIVERY', field: 'deliveryError', value: 'Please Select Valid Delivery Location'}
const errorReducer = (state: ErrorState, action: DestinationAction) => {
  switch (action.type) {
    case "ORIGIN_ERROR":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "DELIVERY_ERROR":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET_ORIGIN":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET_DELIVERY":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "INVALID_ORIGIN":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "INVALID_DELIVERY":
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

const locationRegExp = /^[A-Za-z0-9]+(?:[ .'-][A-Za-z0-9]+)*, [A-Z]{2} \d{5}$/;

export default function QuoteDestinationForm({
  pickupZip,
  deliveryZip,
  transportType,
  submitBtn,
  dispatchQuoteData,
  dispatchQuoteState,
  handleActiveStep,
}: QuoteDestinationProps) {
  const [origin, setOrigin] = useState("");
  const [delivery, setDelivery] = useState("");
  const [originResult, setOriginResult] = useState([]);
  const [deliveryResult, setDeliveryResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const [deliverySearch, showDeliverySearch] = useState(false);
  const [transport, setTransport] = useState("open");
  const [isDisabled, setIsDisabled] = useState(false);

  const [destinationErrors, dispatchErrors] = useReducer(
    errorReducer,
    initialErrors,
  );

  const validateDestinationInputs = (
    origin: string,
    delivery: string,
  ): boolean => {
    let isValid = true;

    // validate empty inputs
    if (!origin) {
      console.log("Origin is an empty string!");
      dispatchErrors({
        type: "ORIGIN_ERROR",
        field: "originError",
        value: "Please Select Pickup location",
      });
      isValid = false;
    }
    if (!delivery) {
      console.log("Delivery is:", delivery);
      dispatchErrors({
        type: "DELIVERY_ERROR",
        field: "deliveryError",
        value: "Please Select Delivery location",
      });
      isValid = false;
    }

    // Validate origin field against regular expression
    if (!locationRegExp.test(origin)) {
      // update state of originError prop
      dispatchErrors({
        type: "INVALID_ORIGIN",
        field: "originError",
        value: "Please Select Valid Pickup location",
      });
      // disable submit button
      isValid = false;
    }
    // Validate delivery field against regular expression
    if (!locationRegExp.test(delivery)) {
      console.log("Delivery after regex test is:", delivery);
      // Miami, FL 33101
      // Update deliveryError prop
      dispatchErrors({
        type: "INVALID_DELIVERY",
        field: "deliveryError",
        value: "Please Select Valid Delivery Location",
      });
      // disable submit button
      isValid = false;
    }

    return isValid;
  };

  const destinationComplete = useCallback(() => {
    // Validate inputs
    const inputValidation = validateDestinationInputs(origin, delivery);

    if (!inputValidation) {
      setIsDisabled(true);
      return;
    }
    // safeParse -> validates unknown data against a schema, without throwing an exception when validation fails
    // Mark Destination Stepper as complete
    handleActiveStep(2);
    // Hide Destination form
    dispatchQuoteState({
      type: "hide_destination",
      field: "showDestinationForm",
      value: false,
    });
    // Show Vehicle form
    dispatchQuoteState({
      type: "show_vehicle",
      field: "showVehicleForm",
      value: true,
    });
  }, [origin, delivery]);

  const fetchData = (searchTerm: string) => {
    switch (searchTerm) {
      case "origin":
        fetchLocation(origin, searchTerm);
        break;

      case "delivery":
        fetchLocation(delivery, searchTerm);
        break;

      default:
        break;
    }
  };

  const fetchLocation = async (state: string, searchTerm: string) => {
    const whereQuery = JSON.stringify({
      or: [{ city: { contains: state } }, { zip: { contains: state } }],
    });

    const url = `${API_URL}?_where=${encodeURIComponent(whereQuery)}`;

    // ?_where={"or":[{"city":${state}},{"zip":${state}}]}`
    // "http://localhost:3000/zips?_where={"or":[{"city":${state}},{"zip":${state}}]}"

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (searchTerm === "origin") {
        setOriginResult(result);
      } else if (searchTerm === "delivery") {
        setDeliveryResult(result);
      }
    } catch (error) {}
  };

  const handleSelectOrigin = (data: SelectedLocation, field: string) => {
    console.log(`${data.city}, ${data.state} ${data.zip}`);
    // Update QuoteData state
    dispatchQuoteData({
      type: "SET_ORIGIN",
      field: field,
      value: `${data.city}, ${data.state} ${data.zip}`,
    });
    // hide select list
    setShowResult(false);
    // update origin field state
    setOrigin(`${data.city}, ${data.state} ${data.zip}`);
    if (isDisabled) {
      // remove error message
      dispatchErrors({ type: "RESET_ORIGIN", field: "originError", value: "" });
      // enable submit button
      setIsDisabled(false);
    }
  };

  const handleOriginChange = (e: ChangeEvent<HTMLInputElement>) => {
    // ! TODO
    // Update input state
    setOrigin(e.target.value);
    // Remove error message
    dispatchErrors({ type: "RESET_ORIGIN", field: "originError", value: "" });
    // Show result list
    setShowResult(true);
    // enable submit button
    setIsDisabled(false);
  };

  const hideResult = (e: React.MouseEvent<HTMLInputElement>, field: string) => {
    if (field === "origin") {
      setShowResult(false);
    } else if (field === "delivery") {
      showDeliverySearch(false);
    }
  };

  const handleDeliveryChange = (e: ChangeEvent<HTMLInputElement>) => {
    // update input state
    setDelivery(e.target.value);
    // remove error message
    dispatchErrors({
      type: "RESET_DELIVERY",
      field: "deliveryError",
      value: "",
    });
    // show search list
    showDeliverySearch(true);
    // enable submit button
    setIsDisabled(false);
  };

  const handleSelectDelivery = (data: SelectedLocation, field: string) => {
    // update QuoteData state
    dispatchQuoteData({
      type: "SET_DELIVERY",
      field: field,
      value: `${data.city}, ${data.state} ${data.zip}`,
    });
    // update delivery input state
    setDelivery(`${data.city}, ${data.state} ${data.zip}`);
    // hide delivery result list
    showDeliverySearch(false);
    if (isDisabled) {
      // reset deliveryError state
      dispatchErrors({
        type: "RESET_DELIVERY",
        field: "deliveryError",
        value: "",
      });
      // enable submit button
      setIsDisabled(false);
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTransport(e.target.value);
    dispatchQuoteData({
      type: "SET_TRANSPORT",
      field: "transport",
      value: e.target.value,
    });
  };

  return (
    <div className="mt-6">
      {/* Pickup and delivery ZIP codes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Pickup ZIP */}
        <QuotePickupInput
          pickupZip={pickupZip}
          origin={origin}
          handleOriginChange={handleOriginChange}
          handleSelectOrigin={handleSelectOrigin}
          fetchData={fetchData}
          originResult={originResult}
          showResult={showResult}
          hideResult={hideResult}
          destinationErrors={destinationErrors}
        />

        {/* Delivery ZIP */}
        <QuoteDeliveryInput
          deliveryZip={deliveryZip}
          delivery={delivery}
          handleDeliveryChange={handleDeliveryChange}
          deliveryResult={deliveryResult}
          fetchData={fetchData}
          deliverySearch={deliverySearch}
          handleSelectDelivery={handleSelectDelivery}
          destinationErrors={destinationErrors}
        />
      </div>

      {/* Transport type radio */}
      <div className="mt-3">
        <p className="mb-3 font-semibold text-slate-800">Transport type</p>
        {/* radio container */}
        <div className="flex gap-1 items-center">
          {/* option 1 */}
          <label
            htmlFor="typeOne"
            className="text-sm font-semibold text-slate-800"
          >
            <input
              type="radio"
              id="typeOne"
              name="open"
              value="open"
              checked={transport === "open"}
              className="mr-1"
              onChange={handleRadioChange}
            />
            {transportType.radioOne}
          </label>
          {/* Tool tip */}
          <LightTooltip title={transportType.tipOpen}>
            <IconButton>
              <QuestionCircleIcon />
            </IconButton>
          </LightTooltip>
          {/* option 2 */}
          <label
            htmlFor="typeTwo"
            className="text-sm font-semibold text-slate-800"
          >
            <input
              type="radio"
              id="typeTwo"
              name="enclosed"
              value="enclosed"
              checked={transport === "enclosed"}
              className="mr-1"
              onChange={handleRadioChange}
            />
            {transportType.radioTwo}
          </label>
          <LightTooltip title={transportType.tipEnclosed}>
            <IconButton>
              <QuestionCircleIcon />
            </IconButton>
          </LightTooltip>
          {/* Tool tip */}
        </div>
      </div>

      {/* Submit button */}
      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
        onClick={destinationComplete}
        disabled={isDisabled ? true : false}
      >
        {submitBtn.label}
        {submitBtn.icon === "arrow-right" ? <ArrowRight /> : ""}
      </button>
    </div>
  );
}
