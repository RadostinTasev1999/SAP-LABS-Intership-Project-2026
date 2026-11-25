"use client";

import { useFetchPriorityList } from "@/features/hooks/useFetchPriorityList";
import { useRouter } from "next/navigation";
import { DashRing } from "@/components/shared/shadcn/dash-ring";
import { Alert } from "@mui/material";

import ArrowRight from "@/components/shared/icons/ArrowRight";

import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";
import PriorityInput from "./PriorityInput";

import { QuoteContactProps } from "@/lib/definitions";
import { ContactErrorState } from "@/lib/definitions";
import { ContactsAction } from "@/lib/definitions";
import { ChangeEvent, useState, useEffect } from "react";
import { useReducer, useCallback } from "react";
import { useContext } from "react";
import { QuoteContext } from "@/components/providers/QuoteProvider";
import { QuoteDataAction } from "@/lib/definitions";
import { useSubmitQuote } from "@/features/hooks/useSubmitQuote";

const API_URL = "http://localhost:3000/priorityList";
const POST_URL = "http://localhost:3000/quoteData";

export default function QuoteContactForm({
  handleActiveStep,
  renderOffer,
}: QuoteContactProps) {
  const { dispatchQuoteDataState, quoteDataState } = useContext(QuoteContext);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [priority, setPriority] = useState("As soon as possible");
  const { priorityList } = useFetchPriorityList(API_URL);
  const [phone, setPhone] = useState("");

  const {
    contactComplete,
    isDisabled,
    setIsDisabled,
    clearInputErrors,
    contactErrors,
    loading,
  } = useSubmitQuote(email, phone, priority, POST_URL);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const field = e.target.name;
    console.log("Field is:", field);
    switch (field) {
      case "email":
        // update email input state
        setEmail(e.target.value);

        if (isDisabled) {
          // enable submit button
          setIsDisabled(false);
        }
        if (contactErrors.emailError) {
          // clear error message
          clearInputErrors({
            type: "RESET_EMAIL",
            field: "emailError",
            value: "",
          });
        }
        if (contactErrors.submitError) {
          clearInputErrors({
            type: "RESET_SUBMIT",
            field: "submitError",
            value: "",
          });
        }

        break;

      case "phone":
        // update phone input state
        setPhone(e.target.value);
        // update quoteData state

        if (isDisabled) {
          // enable submit button
          setIsDisabled(false);
        }
        if (contactErrors.phoneError) {
          // clear error message
          clearInputErrors({
            type: "RESET_PHONE",
            field: "phoneError",
            value: "",
          });
        }
        if (contactErrors.submitError) {
          clearInputErrors({
            type: "RESET_SUBMIT",
            field: "submitError",
            value: "",
          });
        }
        break;

      case "priority":
        // update priority state
        setPriority(e.target.value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    console.log("Quote data state is:", quoteDataState);
  }, [quoteDataState]);

  return (
    <div className="mb-4 p-[18px]">
      <h1 className="mb-[14px] text-base font-semibold text-slate-600">
        Enter Your Contact Details
      </h1>

      <div className="grid grid-cols-2 gap-[14px]">
        {/* Col 1 email */}

        <EmailInput
          id="email"
          label="Email"
          name="email"
          placeholder="johndoe@company.com"
          email={email}
          handleInputChange={handleInputChange}
          contactErrors={contactErrors}
        />
        {/* Col 2 Select list */}
        <PriorityInput
          id="pickup-date"
          label="Pickup date"
          name="priority"
          handleInputChange={handleInputChange}
          priorityList={priorityList}
          priority={priority}
        />

        {/* Col 3 Phone */}
        <PhoneInput
          id="phone"
          label="Phone"
          name="phone"
          placeholder="(555) 555-1234"
          handleInputChange={handleInputChange}
          phone={phone}
          contactErrors={contactErrors}
        />

        {/* button */}
        <div className="flex items-center">
          {contactErrors.submitError ? (
            <Alert severity="error">{contactErrors.submitError}</Alert>
          ) : (
            <button
              onClick={contactComplete}
              className={`inline-flex w-full items-center justify-center rounded-md bg-green-600 px-[14px] py-[11px] gap-2 mt-2.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-green-500 ${isDisabled ? "bg-slate-400 hover:bg-slate-600" : ""}`}
              disabled={isDisabled}
            >
              Calculate Quote
              {loading ? <DashRing className="size-6" /> : <ArrowRight />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
