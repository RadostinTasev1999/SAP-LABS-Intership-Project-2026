'use client'

import ArrowRight from "@/components/shared/icons/ArrowRight"
import { useState } from "react"



export default function TransportForm() {

    const [radioState, setRadioState] = useState('individual')

    const onRadioClick = (e: MouseEvent<HTMLInputElement>) => {

        console.log(`Radio button ${e.target.value} has been clicked!`)
        setRadioState(e.target.value);
    }
    
    
    return(
        <>
        {/* Heading */}
        <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
                Transport information
            </h2>
            <p className="mt-2 text-sm text-gray-500">
                Enter your contact information to continue with your shipment.
            </p>

        </div>
        <form>
            <div className="flex flex-col gap-3">
                {/* Client type radio inputs */}
                <fieldset>
                    <legend>
                        You are
                    </legend>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {/* radio1 */}
                            <label
                                className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                            >
                                <input
                                    type="radio"
                                    name='individual'
                                    value='individual'
                                    checked={radioState === 'individual'}
                                    onClick={onRadioClick}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                An individual
                            </label>
                            {/* radio2 */}
                            <label
                                className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                            >
                                <input
                                    type="radio"
                                    name='business'
                                    value='business'
                                    checked={radioState === 'business'}
                                    onClick={onRadioClick}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                Representing a business
                            </label>
                    </div>
                </fieldset>
                {/* Company Input */}
                {
                    radioState === 'business' && (
                            <div className="w-full flex flex-col gap-1">
                                <label htmlFor="company-name">
                                    Company name
                                </label>
                                <input
                                    type="text"
                                    id="company-name"
                                    name="companyName"
                                    placeholder="Company name"
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>
                    )
                }
                {/* Name input */}
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="contact-name">
                        Your full name
                    </label>
                    <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="Full name"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
                {/* Email Input */}
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="contact-email">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="Email address"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
                {/* Phone number */}
                <div className="w-full flex flex-col gap-1">
                    <label htmlFor="contact-phone">
                        Phone number
                    </label>
                    <input
                        type="text"
                        id="contact-phone"
                        name="phone"
                        value=""
                        placeholder="Phone number"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray 900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
            </div>
            <button
                type="button"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
                
            >
                Pickup info
                <ArrowRight />
            </button>
        </form>
        </>
    )
}
/*
    
*/