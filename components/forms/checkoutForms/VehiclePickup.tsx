"use client"

import ArrowRight from "@/components/shared/icons/ArrowRight"
import { useContext } from "react"
import {CheckoutContext} from '@/components/providers/CheckoutProvider'


export default function VehiclePickup(){

const { dispatchCheckoutState, handleNextStep } = useContext(CheckoutContext);



    const handlePickupSubmit = (e: MouseEvent<HTMLButtonElement>) => {

        // update step
        handleNextStep()
        //  hide pickup-form
        dispatchCheckoutState({ type: 'hide_vehiclepickup', field: 'showVehiclePickup', value: false})
        // show delivery form
        dispatchCheckoutState({ type: 'show_delivery', field: 'showVehicleDelivery', value: true})
    }


    return(
        <>
            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                    Vehicle pickup details
                </h2>
                {/* <p className="mt-2 text-sm text-gray-500">
                    Enter your contact information to continue with your shipment.
                </p> */}

            </div>
            {/* Form */}
            <form>
                <div className="flex flex-col gap-3">
                    {/* Pick-up address */}
                    <div className="w-full flex flex-col gap-1">
                        <label htmlFor="pickup-address">
                            Pickup address
                        </label>
                        <input
                            type="text"
                            id="pickup-address"
                            name="street-address"
                            placeholder="Street Address"
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                        <input
                            type="text"
                            id="pickup-address"
                            name="pickup-details"
                            placeholder="Apt, Suite, etc. (optional)"
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />


                    </div>

                    {/* Pick-up location tag */}
                    <p>Los Angeles, TX 78014</p>

                    {/* Address type */}
                    <fieldset>
                        <legend>
                            This is a
                        </legend>
                        <div className="flex flex-col items-start gap-3 mt-2">
                            <label
                                htmlFor="residential-address"
                                className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                            >
                                <input
                                    type="radio"
                                    name="residential-address"
                                    value="residential"
                                    checked={true}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                Residential address
                            </label>

                            {/*  */}
                            <label
                                htmlFor="business-address"
                                className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                            >
                                <input
                                    type="radio"
                                    name="business-address"
                                    value="business"
                                    checked={false}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                Business address
                            </label>
                        </div>
                    </fieldset>

                    {/* Contact person */}

                    <fieldset>
                        <legend>
                            Who do we contact about pickup?
                        </legend>
                        <div className="flex flex-col items-start gap-3 mt-2">
                            <label
                                htmlFor="contact-client"
                                className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                            >
                                <input
                                    type="radio"
                                    name="contact-client"
                                    value="contact-me"
                                    checked={true}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                Contact me
                            </label>

                            {/*  */}
                            <label
                                htmlFor="accompanying-person"
                                className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                            >
                                <input
                                    type="radio"
                                    name="accompanying-person"
                                    value="accompanying-person"
                                    checked={false}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                Contact an accompanying person
                            </label>
                        </div>
                    </fieldset>
                </div>
                <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
                    onClick={handlePickupSubmit}
                >
                    Delivery info
                    <ArrowRight />
                </button>
            </form>
        </>
    )
}