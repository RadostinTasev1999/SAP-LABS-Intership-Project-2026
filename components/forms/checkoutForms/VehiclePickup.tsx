"use client"

import ArrowRight from "@/components/shared/icons/ArrowRight"
import { ChangeEvent, useContext, useState, useEffect } from "react"
import {CheckoutContext} from '@/components/providers/CheckoutProvider'


export default function VehiclePickup(){

    const { dispatchCheckoutState, handleNextStep } = useContext(CheckoutContext);

    const [street, setStreet] = useState('');
    const [addressDetails, setAddressDetails] = useState('');
    const [radioAddress, setRadioAddress] = useState('residential')
    const [radioContact, setRadioContact] = useState('contact_me')
    // radioAddress
    const [firstAddress, setFirstAddress] = useState('residential')
    const [secondAddress, setSecondAddress] = useState('business')
    // radioContact
    const [firstContact, setFirstContact] = useState('contact_me');
    const [secondContact, setSecondContact] = useState('accompanying_person');
    //  conditional rendering
    const [showAccompanyingInput, setShowAccompanyingInput] = useState(false)
    // pickup contact state
    const [accompanyingName, setAccompanyingName] = useState('');
    const [accompanyingPhone, setAccompanyingPhone] = useState('');
    // dependency state
    const [deliveryComplete, setDeliveryComplete] = useState(false)


    const validateInputs = (street:string, addressDetails:string,  accompanyingName:string,  accompanyingPhone:string)  => {

        let isValid = true;

        // validate streetAddress input
        if (!street) {
            
        }

        return isValid
    }

    const handlePickupSubmit = (e: SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        const pickupData = {
            streetAddress: street,
            addressDetails: addressDetails,
            addressType: radioAddress,
            contactPerson: radioContact,
            accompanyingName: accompanyingName,
            accompanyingPhone: accompanyingPhone
        }

        // Validate input data
        validateInputs(street,addressDetails, accompanyingName, accompanyingPhone)
        // If validation passes, trigger useEffect setup function


        
        // update step
        // handleNextStep()
        //  hide pickup-form
        // dispatchCheckoutState({ type: 'hide_vehiclepickup', field: 'showVehiclePickup', value: false})
        // show delivery form
        // dispatchCheckoutState({ type: 'show_delivery', field: 'showVehicleDelivery', value: true})
    }

    const handleAddressClick = (e: MouseEvent<HTMLInputElement>) => {

        const inputValue = e.target.value;

        if (radioAddress === inputValue) {
            return
        }

        setRadioAddress(inputValue);
    }

    const handleContactClick = (e: MouseEvent<HTMLInputElement>) => {

        const field = e.target.name;
        console.log('Field is:', field)
        const value = e.target.value;

        if (radioContact === value) {
            return;
        }

        setRadioContact(value)
        if (field === 'accompanying-person') {
            setShowAccompanyingInput(true)
        } else if (field === 'contact-client') {
            setShowAccompanyingInput(false)
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const field = e.target.name;
        // street-address
        // pickup-details

        switch (field) {
            case 'street-address':
                // update street state
                setStreet(e.target.value)
                break;
            
            case 'pickup-details':
                // update addressDetails state
                setAddressDetails(e.target.value)
                break;
        
            default:
                break;
        }
    }

    const handlePickupContactChange = (e: ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name;

        console.log('Field is:', field)

        switch (field) {
            case 'name':
                // update input state
                setAccompanyingName(e.target.value)
                break;

            case 'phone':
                // update input state
                setAccompanyingPhone(e.target.value)
                break;
        
            default:
                break;
        }
    }


    useEffect(() => {

        if (!deliveryComplete) {
            return;  
        }



    },[deliveryComplete])


    return(
        <>
            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                    Vehicle pickup details
                </h2>
                

            </div>
            {/* Form */}
            <form onSubmit={handlePickupSubmit}>
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
                            value={street}
                            onChange={handleInputChange}
                            placeholder="Street Address"
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                        <input
                            type="text"
                            id="pickup-address"
                            name="pickup-details"
                            value={addressDetails}
                            onChange={handleInputChange}
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
                                    value={firstAddress}
                                    checked={radioAddress === firstAddress}
                                    onClick={handleAddressClick}
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
                                    value={secondAddress}
                                    checked={radioAddress === secondAddress}
                                    onClick={handleAddressClick}
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
                                    value={firstContact}
                                    checked={radioContact === firstContact}
                                    onClick={handleContactClick}
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
                                    value={secondContact}
                                    checked={radioContact === secondContact}
                                    onClick={handleContactClick}
                                    className="h-4 w-4 accent-blue-600"
                                />
                                Contact an accompanying person
                            </label>
                        </div>
                    </fieldset>

                    {/* Pickup contact accompaying person */}
                    {
                        showAccompanyingInput && (
                            <>
                                < div className="w-full flex flex-col gap-1">
                                    <label htmlFor="contact-name">
                                        Pickup contact full name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        value={accompanyingName}
                                        onChange={handlePickupContactChange}
                                        placeholder="e.g. John Doe"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>
                                {/* Phone number input */}
                                <div className="w-full flex flex-col gap-1">
                                    <label htmlFor="contact-phone">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-phone"
                                        name="phone"
                                        value={accompanyingPhone}
                                        onChange={handlePickupContactChange}
                                        placeholder="(555) 555-1234"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray 900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                </div>
                            </>
                        )
                    }
                    

                </div>
                <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
                >
                    Delivery info
                    <ArrowRight />
                </button>
            </form>
        </>
    )
}