"use client"

import ArrowRight from "@/components/shared/icons/ArrowRight"
import { ChangeEvent, useContext, useState, useEffect } from "react"
import {CheckoutContext} from '@/components/providers/CheckoutProvider'
import { VehiclePickupErrorAction } from '@/lib/definitions'
import { CheckoutReducerAction } from '@/lib/definitions'
// import { useEffect } from "react"

const street_address_regexp = /^\d+\s+[A-Za-z0-9\s.,#'-]+$/
const pickup_contact_regexp = /^[A-Za-z]+(?:[ '-][A-Za-z]+)+$/
const pickup_contact_phone_regexp = /^\(\d{3}\) \d{3}-\d{4}$/

export default function VehiclePickup(){

    const { dispatchCheckoutState, handleNextStep, dispatchVehiclePickupError, vehiclePickupError, dispatchCheckoutData, checkoutData } = useContext(CheckoutContext);

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
    // stateful submit button
    const [isValid, setIsValid] = useState(true)


    const validateInputs = (street:string, addressDetails:string,  accompanyingName:string,  accompanyingPhone:string)  => {

        let isValid = true;

        // validate streetAddress input
        if (!street) {
            // Set field error
            setFieldError({ type: 'SET_STREET_ERROR', field: 'streetAddressError', value: 'Please enter Street Address'})
            isValid = false;
        } else if (!street_address_regexp.test(street)) {
            setFieldError({ type: 'SET_STREET_ERROR', field: 'streetAddressError', value: 'Please enter valid Street Address'})
            isValid = false;
        }

        // validate accompaying person full name
        if (radioContact === secondContact) {
            if (!accompanyingName) {
                setFieldError({ type: 'SET_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: 'Please enter Accompanying-person Name' })
                isValid = false
            } else if (!pickup_contact_regexp.test(accompanyingName)) {
                setFieldError({ type: 'SET_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: 'Please enter valid Accompanying-person Name' })
                isValid = false
            }

            // validate accompaying person phone number
            if (!accompanyingPhone) {
                setFieldError({ type: 'SET_ACCOMPANYING_PHONE_ERROR', field: 'accompanyingPhoneError', value: 'Please enter Accompanying-person Phone' })
                isValid = false
            } else if (!pickup_contact_phone_regexp.test(accompanyingPhone)) {
                setFieldError({ type: 'SET_ACCOMPANYING_PHONE_ERROR', field: 'accompanyingPhoneError', value: 'Please enter valid Accompanying-person Phone' })
                isValid = false
            }
        }

        return isValid
    }

    const setFieldError = (action: VehiclePickupErrorAction) => {

        // { type: 'SET_ACCOMPANYING_PHONE_ERROR', field: 'accompanyingPhoneError', value: 'Please enter Accompanying-person Phone'}

        dispatchVehiclePickupError(action)

    }

    const handlePickupSubmit = (e: SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        // Validate input data
        const validation = validateInputs(street,addressDetails, accompanyingName, accompanyingPhone)
        
        if (!validation) {
            // disable submit button
            setIsValid(false);
            return;
        }
        // Logic if validation passes:

        // Update global state
        saveVehiclePickupData(street, addressDetails, radioAddress, radioContact, accompanyingName, accompanyingPhone)
         
        //  hide pickup-form
        hideCheckoutForm({ type: 'HIDE_VEHICLEPICKUP', field: 'showVehiclePickup', value: false})
        // update step
        handleNextStep()
        // show delivery form
        showCheckoutForm({ type: 'SHOW_DELIVERY', field: 'showVehicleDelivery', value: true})
    }

    const hideCheckoutForm = (action: CheckoutReducerAction) => {
        // { type: 'HIDE_VEHICLEPICKUP', field: 'showVehiclePickup', value: false}
        dispatchCheckoutState(action)

    }

    const showCheckoutForm = (action: CheckoutReducerAction) => {
        // { type: 'SHOW_DELIVERY', field: 'showVehicleDelivery', value: true}
        dispatchCheckoutState(action)
    }

    const saveVehiclePickupData = (street: string, addressDetails: string, radioAddress: string, radioContact: string, accompanyingName:string, accompanyingPhone: string) => {
        
        const value = { 
             streetAddress: street,
             addressDetails: addressDetails,
             addressType: radioAddress,
             contactPerson: radioContact,
             accompanyingName: accompanyingName,
             accompanyingPhone: accompanyingPhone
         }
        // Update global state
        dispatchCheckoutData({ type:'SET_PICKUP_DATA', field: 'vehiclePickupForm', value: value})
        
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
                // clear input errors
                clearFieldErrors({ type: 'CLEAR_STREET_ERROR', field: 'streetAddressError', value: ''})
                // enable submit button
                setIsValid(true)
                break;
            
            case 'pickup-details':
                // update addressDetails state
                setAddressDetails(e.target.value)
                break;
        
            default:
                break;
        }
    }

    const clearFieldErrors = (action: VehiclePickupErrorAction) => {

        // { type: 'CLEAR_STREET_ERROR', field: 'streetAddressError', value: ''}
        dispatchVehiclePickupError(action)

    }

    const handlePickupContactChange = (e: ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name;

        console.log('Field is:', field)

        switch (field) {
            case 'name':
                // update input state
                setAccompanyingName(e.target.value)
                // clear error messages
                clearFieldErrors({ type: 'CLEAR_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: ''})
                // enable submit button
                setIsValid(true)
                break;

            case 'phone':
                // update input state
                setAccompanyingPhone(e.target.value)
                // clear input errors
                clearFieldErrors({ type: 'CLEAR_ACCOMPANYING_PHONE_ERROR', field: 'accompanyingPhoneError', value: ''})
                // enable submit button
                setIsValid(true)
                break;
        
            default:
                break;
        }
    }


    useEffect(() => {
        
        console.log('Checkout data is:', checkoutData)

    },[checkoutData])


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
                    {
                        vehiclePickupError.streetAddressError && (
                            <p className="text-[#BF211E] text-xs font-semibold">{vehiclePickupError.streetAddressError}</p>
                        )
                    }
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
                                
                                {
                                    vehiclePickupError.accompanyingNameError && (
                                        <p className="text-[#BF211E] text-xs font-semibold">{vehiclePickupError.accompanyingNameError}</p>
                                    )
                                }

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
                                        placeholder="(555) 321-2232"
                                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray 900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />
                                
                                {
                                    vehiclePickupError.accompanyingPhoneError && (
                                        <p className="text-[#BF211E] text-xs font-semibold">{vehiclePickupError.accompanyingPhoneError}</p>
                                    )
                                }

                                </div>
                            </>
                        )
                    }
                    

                </div>
                <button
                    type="submit"
                    className={`mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  ${!isValid ? 'bg-slate-400 hover:bg-slate-300' : 'active:bg-blue-800' }`}
                    disabled={!isValid}
                >
                    Delivery info
                    <ArrowRight />
                </button>
            </form>
        </>
    )
}