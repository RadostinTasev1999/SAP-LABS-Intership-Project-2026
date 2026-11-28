"use client";

import MailIcon from "@/components/shared/icons/MailIcon";
import MapMarkerDistanceIcon from "@/components/shared/icons/MapMarkerDistance";
import PenIcon from "@/components/shared/icons/PenIcon";
import SportCarIcon from "@/components/shared/icons/SportCarIcon";
import TrailerIcon from "@/components/shared/icons/TrailerIcon";
import { usePrimaryContact } from "@/features/hooks/quoteOffer/usePrimaryContact";
import { useQuoteSummary } from "@/features/hooks/quoteOffer/useQuoteSummary";
import { useValidate } from "@/features/hooks/quoteOffer/useValidate";
import { QuoteCardData } from '@/lib/definitions';
import { ChangeEvent, useState } from "react";

export default function QuoteSideBar({
  recordData
}: QuoteCardData) {
  
  const { quoteSummary, setQuoteSummary, saveOffer } = useQuoteSummary();
  const { showEdit, setShowEdit } = usePrimaryContact()
  const { inputValidation, inputErrors, setInputErrors } = useValidate()

  // state for managing save button state
  const [isDisabled, setIsDisabled] = useState(false);

  const saveEdit = (e: MouseEvent<HTMLButtonElement>) => {

    // validate inputs
    const { isValid } = inputValidation(quoteSummary.primaryContact, quoteSummary.contactPhone)
   
    if (!isValid) {
      setIsDisabled(true);
      return;
    }

    // Logic if validation passes
    setShowEdit(false);

  }

  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {

    // show edit inputs
      setShowEdit(true)

  }
  
  const vehicleCondition = {
    operable: 'running',
    inoperable: 'inoperable'
  }

  const carrierType = {
    open: 'open',
    enclosed: 'enclosed'
  }

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {

    const field = e.target.name;

    switch (field) {
      case 'vehicle_condition_primary':
        // update condition state
        setQuoteSummary((state) => ({...state, condition: vehicleCondition.operable}))
          break;
      case 'vehicle_condition_secondary':
        // update condition state
        setQuoteSummary((state) => ({...state, condition: vehicleCondition.inoperable}))
        break;
      case'trailer-open':
        // update carrierType state
        setQuoteSummary((state) => ({...state, carrierType: carrierType.open}))
        break;
      case 'trailer-enclosed':
        // update carrierType state
        setQuoteSummary((state) => ({...state, carrierType: carrierType.enclosed}))
        break;
    
      default:
        break;
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    const field = e.target.name;

    switch (field) {
      case 'email':
        // update quoteSummary state
        setQuoteSummary((state) => ({...state, primaryContact: e.target.value}))
        // clear field errors
        setInputErrors((state) => ({...state, emailError: ''}));
        // enable submit button
        setIsDisabled(false);
        break;

      case 'phone':
      // update quoteSummary state
      setQuoteSummary((state) => ({...state, contactPhone: e.target.value}))
      // clear field errors
      setInputErrors((state) => ({...state, phoneError: ''}))
      // enable submit button
      setIsDisabled(false);
        break;
    
      default:
        break;
    }

  }


  

  // ! TODO -> render data from quoteSummary in JSX

  return (
    <aside className="w-full min-w-xs lg:w-[360px] sm:col-span-2 mx-auto my-auto sm:my-[100px]">
      <div className="sm:rounded-xl backdrop-blur-sm bg-blue-100/70 p-5">
        {/* Sidebar heading */}
        <div className="mb-5 border-b border-gray-700 pb-3">
          <span className="text-lg font-semibold text-slate-900">
            Summary of the Quote
          </span>
        </div>

        <div className="space-y-4" />

        {/* Vehicle */}
        <section>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <SportCarIcon />
              <span>Vehicle</span>
            </div>
          </div>

          <div className="pt-3">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="vehicle_operable_primary"
                  className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="vehicle_condition_primary"
                    id="vehicle_operable_primary"
                    value={vehicleCondition.operable}
                    checked={quoteSummary.condition === vehicleCondition.operable}
                    onChange={handleRadioChange}
                    className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                  />
                  <span>Running</span>
                </label>

                <label
                  htmlFor="vehicle_inoperable_secondary"
                  className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="vehicle_condition_secondary"
                    id="vehicle_inoperable_secondary"
                    value={vehicleCondition.inoperable}
                    checked={quoteSummary.condition === vehicleCondition.inoperable}
                    onChange={handleRadioChange}
                    className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focue:ring-blue-500"
                  />
                  <span>Non-running (+$200)</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        <div className="mb-5 border-b border-gray-700 pb-4" />

        {/* Carrier Type */}
        <section>
          <div className="flex items-center gap-2">
            <TrailerIcon />
            <span className="text-base font-semibold text-gray-900">
              Carrier Type
            </span>
          </div>

          <div className="pt-3">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="trailer-type1"
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="trailer-open"
                  id="trailer-type1"
                  value={carrierType.open}
                  checked={quoteSummary.carrierType === carrierType.open}
                  onChange={handleRadioChange}
                  className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                />
                <span>Open</span>
              </label>

              <label
                htmlFor="trailer-type2"
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  name="trailer-enclosed"
                  id="trailer-type2"
                  value={carrierType.enclosed}
                  checked={quoteSummary.carrierType === carrierType.enclosed}
                  onChange={handleRadioChange}
                  className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                />
                <span>Enclosed (+$600)</span>
              </label>
            </div>
          </div>
        </section>

        <div className="mb-5 border-b border-gray-700 pb-4" />

        {/* Route */}
        <section>
          <div className="flex items-center gap-2">
            <MapMarkerDistanceIcon />
            <span className="text-base font-semibold text-gray-900">Route</span>
          </div>

          <div className="pt-3">
            <div className="flex flex-col">
              <span className="mb-0 text-sm font-medium text-gray-500">
                From:
              </span>
              <span
                id="route-from"
                className="text-sm font-medium text-gray-800"
              >
                {recordData?.destinationForm.pickupLocation}
              </span>

              <span className="mb-0 mt-2 text-sm font-medium text-gray-500">
                To:
              </span>
              <span id="route-to" className="text-sm font-medium text-gray-800">
                {recordData?.destinationForm.deliveryLocation}
              </span>

              <span className="mb-0 mt-2 text-sm font-medium text-gray-500">
                Date:
              </span>
              <span id="time" className="text-sm font-medium text-gray-800">
                {recordData?.contactDetails.pickupDate}
              </span>
            </div>
          </div>
        </section>

        <div className="mb-5 border-b border-gray-700 pb-4" />

        {/* Primary Contact */}
        <section>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <MailIcon />
              <span className="text-base font-semibold text-gray-900">
                Primary Contact
              </span>
            </div>

            <button
              type="button"
              className="inline-flex bg-gray-50 gap-1 items-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={handleEdit}
            >
              <span>Edit</span>
              <PenIcon />
            </button>
            {/*  */}
          </div>

          {showEdit ? (
            // ! Edit form
            <div className="pt-2">
              <div className="flex flex-col gap-3">
                
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Email address"
                    value={quoteSummary.primaryContact}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                  {inputErrors.emailError && (
                    <p className="text-[#BF211E] text-xs font-semibold">
                      {inputErrors.emailError}
                    </p>
                  )}
                </div>
                
                <div className="w-full flex flex-col gap-1">
                  <label htmlFor="contact-phone">Phone number</label>
                  <input
                    type="text"
                    id="contact-phone"
                    name="phone"
                    placeholder="Phone number"
                    value={quoteSummary.contactPhone}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray 900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                  {inputErrors.phoneError && (
                    <p className="text-[#BF211E] text-xs font-semibold">
                      {inputErrors.phoneError}
                    </p>
                  )}
                </div>
              </div>
             
              <button
                type="button"
                className={`mt-3 flex w-full items-center justify-center rounded-md  px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 ${isDisabled ? "bg-slate-300 hover:bg-slate-400" : "bg-blue-600"}`}
                onClick={saveEdit}
                disabled={isDisabled}
              >
                Save
              </button>
            </div>
          ) : (
            // ! Primary Contact Data
            <div className="pt-3">
              <div className="flex flex-col">
                <span className="mb-0 text-sm font-medium text-gray-500">
                  Email:
                </span>
                <span className="text-sm font-medium text-gray-800">
                  {recordData?.contactDetails.email}
                </span>

                <span className="mb-0 mt-2 text-sm font-medium text-gray-500">
                  Phone:
                </span>
                <span className="text-sm font-medium text-gray-800">
                  {recordData?.contactDetails.phone}
                </span>
              </div>
            </div>
          )}
        </section>

        {/* Shipping plan */}
      </div>
    </aside>
  );
}
