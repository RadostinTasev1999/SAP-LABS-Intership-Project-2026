import LockIcon from "@/components/shared/icons/LockIcon";
import MasterCardIcon from "@/components/shared/icons/MasterCardIcon";
import PayPalIcon from "@/components/shared/icons/PayPalIcon";
import VisaIcon from "@/components/shared/icons/VisaIcon";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { CheckoutContext } from "@/components/providers/CheckoutProvider";
import Image from "next/image";
import { CheckoutDataAction } from "@/lib/definitions";
import ChevronLeft from "@/components/shared/icons/ChevronLeft";
import CreditCardIcon from "@/components/shared/icons/CreditCardIcon";
import React from "react";

export default function BookshipmentForm() {
  const {
    checkoutData,
    dispatchCheckoutData,
    hideBookingForm,
    showVehicleDeliveryForm,
    revertStep,
  } = useContext(CheckoutContext);

  const [selectedTab, setSelectedTab] = useState("card_button");
  const pickupAddress = checkoutData.vehiclePickupForm.streetAddress;
  const deliveryAddress = checkoutData.vehicleDeliveryForm.streetAddress;
  const otherAddress = "other";

  const [billingAddress, setBillingAddress] = useState(pickupAddress);

  // Stateful variables to hold credit card information
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [billingAddressData, setBillingAddressData] = useState({
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleRadioClick = (e: MouseEvent<HTMLInputElement>) => {
    const field = e.target.name;

    console.log("Field is:", field);

    switch (field) {
      case "pickupAddress":
        // verify if the input is already checked
        if (billingAddress === pickupAddress) {
          return;
        }
        // set radio as checked
        setBillingAddress(e.target.value);
        break;

      case "deliveryAddress":
        // verify if the input is already checked
        if (billingAddress === deliveryAddress) {
          return;
        }
        // set radio as checked
        setBillingAddress(e.target.value);
        break;

      case "otherBillingAddress":
        // verify if the input is already checked
        if (billingAddress === otherAddress) {
          return;
        }
        // set radio as checked
        setBillingAddress(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const field = e.target.name;
    console.log("Field is:", field);

    switch (field) {
      case "cardNumber":
        // update input state
        setCardNumber(e.target.value);

        break;

      case "cardHolderName":
        // update input state
        setCardHolder(e.target.value);

        break;

      case "expDate":
        // update input state
        setExpDate(e.target.value);

        break;

      case "cardCode":
        // update input state
        setCvv(e.target.value);

        break;

      case "street":
        // update input state
        setBillingAddressData((state) => ({
          ...state,
          street: e.target.value,
        }));

        break;

      case "apartment":
        // update input state
        setBillingAddressData((state) => ({
          ...state,
          apartment: e.target.value,
        }));

        break;

      case "city":
        // update input state
        setBillingAddressData((state) => ({ ...state, city: e.target.value }));

        break;

      case "state":
        // update input state
        setBillingAddressData((state) => ({ ...state, state: e.target.value }));

        break;

      case "zipCode":
        // update input state
        setBillingAddressData((state) => ({
          ...state,
          zipCode: e.target.value,
        }));

        break;

      default:
        break;
    }
  };

  const processOrder = (e: MouseEvent<HTMLButtonElement>) => {
    // validate inputs

    // Logic if validation passes

    const bookingData = {
      cardNumber: cardNumber,
      fullNameCard: cardHolder,
      expDate: expDate,
      securityCode: cvv,
      billingAddress: "",
    };

    if (billingAddress === otherAddress) {
      Object.assign(bookingData, { billingAddress: billingAddressData });
    } else {
      Object.assign(bookingData, { billingAddress: billingAddress });
    }

    console.log("Booking Data is:", bookingData);
    // Save input states in global state
    saveBookShipmentData({
      type: "SET_BOOKING_DATA",
      field: "bookShipmentForm",
      value: bookingData,
    });
  };

  const saveBookShipmentData = (action: CheckoutDataAction) => {
    // { type: 'SET_BOOKING_DATA', field: 'bookShipmentForm', value: bookingData}
    dispatchCheckoutData(action);
  };

  const handleBackClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Go Back!");
    // Hide booking form
    hideBookingForm({
      type: "HIDE_BOOKSHIPMENT",
      field: "showBookshipment",
      value: false,
    });
    // Show Vehicle Delivery form
    showVehicleDeliveryForm({
      type: "SHOW_DELIVERY",
      field: "showVehicleDelivery",
      value: true,
    });
    // revert step
    revertStep();
  };

  // helper function to hide form

  const handleTabClick = (e: MouseEvent<HTMLButtonElement>) => {
    const field = e.target.name;

    console.log("Field is:", field);
    switch (field) {
      case "card_button":
        // check if button is already selected
        if (selectedTab === field) {
          return;
        }
        setSelectedTab(field);

        break;

      case "paypal_button":
        // check if button is already selected
        if (selectedTab === field) {
          return;
        }
        setSelectedTab(field);

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    console.log("Selected tab is:", selectedTab);
  }, [selectedTab]);

  return (
    <section
      id="checkout-complete-block"
      className="mx-auto w-full max-w-2xl rounded-xl bg-white p-5 sm:p-8"
    >
      {/* Header */}
      <div className="flex items-center justify-start gap-4">
        <button
          type="button"
          aria-label="Go back"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400"
          onClick={handleBackClick}
        >
          {/* Back icon */}
          <ChevronLeft />
        </button>

        <h1 className="text-2xl font-bold text-slate-900">Last step!</h1>
      </div>

      {/* Payment methods tabs */}
      <div
        role="tablist"
        aria-label="Payment method"
        className="mt-6 grid grid-cols-2 border-b border-slate-200"
      >
        <button
          type="button"
          role="tab"
          name="card_button"
          aria-selected={selectedTab === "card_button"}
          onClick={handleTabClick}
          className={`flex items-center justify-center gap-2 ${selectedTab === "card_button" && "border-b-2 border-blue-600 text-blue-700"} px-4 py-4 text-sm font-semibold `}
        >
          <CreditCardIcon />
          Credit Card
        </button>

        <button
          type="button"
          role="tab"
          name="paypal_button"
          aria-selected={selectedTab === "paypal_button"}
          onClick={handleTabClick}
          className={`flex items-center justify-center gap-2 ${selectedTab === "paypal_button" ? "border-b-2 border-blue-600 text-blue-700" : "text-slate-800"} px-4 py-4 text-sm font-medium transition`}
        >
          <PayPalIcon />
          PayPal
        </button>
      </div>

      {/* Payment information */}
      {selectedTab === "card_button" && (
        <React.Fragment>
          <div className="mt-6 space-y-5">
            {/* Payment due information */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <h2 className="text-lg font-bold text-slate-900">$0 Due now</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Your credit card will not be charged until the order is assigned
                to a carrier.
              </p>
            </div>

            {/* Security message */}
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <LockIcon />
              <p>This is a secure 256-bit SSL Encrypted site.</p>
            </div>

            {/* Credit card form */}
            <div className="rounded-xl border border-slate-200 p-4 sm:p-5">
              {/* Card number section */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="cardNumber"
                    className="text-sm font-medium text-slate-700"
                  >
                    Card number
                  </label>
                  <div id="cards" className="flex flex-row gap-3">
                    <MasterCardIcon />
                    <VisaIcon />
                    {/* <AmexIcon /> */}
                  </div>
                </div>
                {/* ------------- */}
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    autoComplete="cc-number"
                    inputMode="numeric"
                    maxLength={19}
                    value={cardNumber}
                    onChange={handleInputChange}
                    placeholder="Credit Card Number"
                    className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11"
                  />
                  <LockIcon className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Additional card info */}
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Cardholder name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="cardHolderName"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name on card
                  </label>

                  <input
                    type="text"
                    name="cardHolderName"
                    id="cardHolderName"
                    autoComplete="cc-name"
                    value={cardHolder}
                    onChange={handleInputChange}
                    placeholder="e.g. John Smith"
                    className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11"
                  />
                </div>

                {/* Expiration date */}
                <div>
                  <label
                    htmlFor="expDate"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Expiration date
                  </label>

                  <input
                    type="text"
                    name="expDate"
                    id="expDate"
                    autoComplete="cc-exp"
                    value={expDate}
                    onChange={handleInputChange}
                    placeholder="MM / YY"
                    className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11"
                  />
                </div>

                {/* Security Code */}

                <div>
                  <div className="mb-2 flex items-center gap-1.5">
                    <label
                      htmlFor="cardCode"
                      className="text-sm font-medium text-slate-700"
                    >
                      Security Code
                    </label>

                    <button
                      type="button"
                      title="The card security code is located on the back of the credit or debit cards and is typically a separate group of the three digits to the right of the signature strip."
                      aria-label="Security code information"
                      className="shrink-0"
                    >
                      {/* Info Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4 text-slate-400"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16v-4m0-4h.01"
                        />
                      </svg>
                    </button>
                  </div>

                  <input
                    type="text"
                    name="cardCode"
                    id="cardCode"
                    autoComplete="cc-csc"
                    inputMode="numeric"
                    maxLength={4}
                    value={cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11"
                  />
                </div>
              </div>
            </div>

            {/* Verification & Security badges */}
            <div className="flex items-center gap-6">
              {/* PayPal logo */}
              <span>
                <Image
                  src="/paypal-svgrepo-com.svg"
                  alt="paypal_logo"
                  width={300}
                  height={300}
                  className="w-[80px] h-[60px]"
                ></Image>
              </span>

              {/* SSL Verification Seal */}
              <span>
                <Image
                  src="/authorize.net.svg"
                  alt="authorize_net_logo"
                  width={300}
                  height={300}
                  className="w-[110px]"
                ></Image>
              </span>

              {/* Authorize.net Logo */}
              <span>
                <Image
                  src="/ssl_certificate.svg"
                  width={300}
                  height={300}
                  alt="ssl_certificate"
                  className="w-[40px] "
                ></Image>
              </span>
              {/* BBB Accredited Logo */}
            </div>
          </div>

          {/* Billing Address radio buttons */}
          <div className="space-y-4 mt-4">
            {/* Billing address heading */}
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-900">
                Billing address
              </p>
              {/* Help tooltip */}
              <button
                type="button"
                title="Enter the zip code of the billing address for your credit/debit card. It is the address where you receive the card statements."
                aria-label="Billing address information"
                className="inline-flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 520 520"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M260 20a240 240 0 100 480 240 240 0 100-480m0 121c17 0 30 13 30 30s-13 30-30 30-30-13-30-30 13-30 30-30m50 210c0 5-4 9-10 9h-80c-5 0-10-3-10-9v-20c0-5 4-11 10-11 5 0 10-3 10-9v-40c0-5-4-11-10-11-5 0-10-3-10-9v-20c0-5 4-11 10-11h60c5 0 10 5 10 11v80c0 5 4 9 10 9 5 0 10 5 10 11z" />
                </svg>
              </button>
            </div>
            {/* Billing address radio group */}
            <fieldset className="space-y-3">
              <legend className="text-base font-semibold text-slate-600">
                Select a billing address
              </legend>

              {/* Option 1 -> Pickup address*/}
              <label
                htmlFor="pickupAddress"
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  id="pickupAddress"
                  name="pickupAddress"
                  value={pickupAddress}
                  checked={billingAddress === pickupAddress}
                  onClick={handleRadioClick}
                />

                <span aria-hidden="true" className="">
                  <span>{pickupAddress}</span>
                </span>
              </label>
              {/* Option 2 -> Delivery Address*/}
              <label
                htmlFor="deliveryAddress"
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={deliveryAddress}
                  checked={billingAddress === deliveryAddress}
                  onClick={handleRadioClick}
                />

                <span aria-hidden="true" className="">
                  <span>{deliveryAddress}</span>
                </span>
              </label>
              {/* Option 3 -> Additional inputs*/}
              <label
                htmlFor="otherBillingAddress"
                className="flex cursor-pointer items-center gap-2 text-sm text-gray-700"
              >
                <input
                  type="radio"
                  id="otherBillingAddress"
                  name="otherBillingAddress"
                  value={otherAddress}
                  checked={billingAddress === otherAddress}
                  onClick={handleRadioClick}
                />

                <span aria-hidden="true" className="">
                  <span>Other address</span>
                </span>
              </label>
            </fieldset>
          </div>
          {billingAddress === otherAddress && (
            <div className="space-y-3 mt-4">
              {/* Street address */}
              <div className="w-full">
                <label htmlFor="street">Street</label>

                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street"
                  value={billingAddressData.street}
                  onChange={handleInputChange}
                  autoComplete="address-line1"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              {/* Additional address fields */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                {/* Apartment / Suite */}
                <div className="sm:col-span-3">
                  <label htmlFor="apartment">Apartment</label>

                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    placeholder="Apt"
                    value={billingAddressData.apartment}
                    onChange={handleInputChange}
                    autoComplete="address-line2"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* City */}
                <div className="sm:col-span-4">
                  <label htmlFor="city">City</label>

                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={billingAddressData.city}
                    onChange={handleInputChange}
                    autoComplete="address-level2"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                {/* State */}
                <div className="sm:col-span-2">
                  <label htmlFor="state">State</label>

                  <div className="relative">
                    <select
                      name="state"
                      id="state"
                      autoComplete="address-level1"
                      value={billingAddressData.state}
                      onChange={handleInputChange}
                      className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2.5 pr-9 text-sm text-gray-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="" disabled>
                        State
                      </option>
                      <option value="CA">California</option>
                      <option value="FL">Florida</option>
                      <option value="IL">Illinois</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                    </select>

                    {/* Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4 text-gray-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.22a.75.75 0 011.06 0L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 8.28a.75.75 0 010-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Zip Code */}
                <div className="sm:col-span-3">
                  <label htmlFor="zipCode">ZIP Code</label>

                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zipcode"
                    value={billingAddressData.zipCode}
                    onChange={handleInputChange}
                    autoComplete="postal-code"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
          <button
            type="button"
            className="mt-6 w-full rounded-md bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
            onClick={processOrder}
          >
            Book Shipment
          </button>
        </React.Fragment>
      )}
      {selectedTab === "paypal_button" && (
        <React.Fragment>
          <div className="mt-6 space-y-5">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Your PayPal account will be charged $1129.
              </p>
            </div>
            <button
              type="button"
              className="mt-6 w-full max-w-sm rounded-md bg-blue-500 px-4 py-2.5 text-lg italic font-bold text-white transition hover:bg-green-600"
            >
              PayPal
            </button>
          </div>
        </React.Fragment>
      )}
      {/* Submit button */}
    </section>
  );
}
