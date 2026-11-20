import React from 'react'
import { ChangeEvent, useContext, useState, useEffect } from 'react'
import { CheckoutContext } from '@/components/providers/CheckoutProvider'
import ArrowRight from '@/components/shared/icons/ArrowRight'
import { VehicleDeliveryErrorAction } from '@/lib/definitions'
import { CheckoutReducerAction } from '@/lib/definitions'


const street_address_regexp = /^\d+\s+[A-Za-z0-9\s.,#'-]+$/
const delivery_contact_regexp = /^[A-Za-z]+(?:[ '-][A-Za-z]+)+$/
const delivery_contact_phone_regexp = /^\(\d{3}\) \d{3}-\d{4}$/

export default function DeliveryForm(){

    const { handleNextStep, dispatchCheckoutState, dispatchVehicleDeliveryError, vehicleDeliveryError, dispatchCheckoutData, checkoutData } = useContext(CheckoutContext)

    const [streetAddress, setStreetAddress] = useState('');
    const [addressDetails, setAddressDetails] = useState('');
    const [radioAddress, setRadioAddress] = useState('residential');
    // first radio input state
    const [radioOneAddress, setRadioOneAddress] = useState('residential');
    // second radio input state
    const [radioTwoAddress, setRadioTwoAddress] = useState('business')

    const [radioContact, setRadioContact] = useState('contact_me');
    // first radio input state
    const [radioOneContact, setRadioOneContact] = useState('contact_me');
    // second radio input state
    const [radioTwoContact, setRadioTwoContact] = useState('accompanying_person');

    // accompanying_person inputs state
    const [accompanyingName, setAccompanyingName] = useState('');
    const [accompanyingPhone, setAccompanyingPhone] = useState('');

    // show / hide accompanying_person inputs state
    const [showAccompanyingInputs, setShowAccompanyingInputs] = useState(false)

    // submit button enabled / disabled state
    const [isValid, setIsValid] = useState(true)

    const inputValidation = (streetAddress: string, addressDetails: string, accompanyingName: string, accompanyingPhone: string) => {
        
        let isValid = true;
        // validate streetAddress input
        if (!streetAddress) {
            // set input field errors
            setFieldErrors({ type: 'SET_STREET_ERROR', field: 'streetAddressError', value: 'Please enter Street Address'})
            isValid = false
        } else if (!street_address_regexp.test(streetAddress)) {
            // set input field errors
            setFieldErrors({ type: 'SET_STREET_ERROR', field: 'streetAddressError', value: 'Please enter valid Street Address'})
            // disable submit button
            isValid = false
        }

        if (radioContact === radioTwoContact) {


            // validate accompanyingName input
            if (!accompanyingName) {
                // set Field Error
                setFieldErrors({ type: 'SET_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: 'Please enter accompanying person name' })
                isValid = false
            } else if (!delivery_contact_regexp.test(accompanyingName)) {
                // set Field errors:
                setFieldErrors({ type: 'SET_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: 'Please enter valid name' })
                isValid = false
            }

            // validate accompanyingPhone input
            if (!accompanyingPhone) {
                // set Field errors
                setFieldErrors({ type: 'SET_ACCOMPANYING_PHONE_ERROR', field: 'accompanyingPhoneError', value: 'Please enter accompanying person phone' })
                isValid = false
            } else if (!delivery_contact_phone_regexp.test(accompanyingPhone)) {
                // setFieldErrors
                setFieldErrors({ type: 'SET_ACCOMPANYING_PHONE_ERROR', field: 'accompanyingPhoneError', value: 'Please enter valid accompanying person phone' })
                isValid = false
            }

        }

        return isValid
    }

    const setFieldErrors = (action: VehicleDeliveryErrorAction) => {
        // { type: 'SET_STREET_ERROR', field: 'streetAddressError', value: 'Please enter Street Address'}
        // { type: 'SET_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: 'Please enter accompanying person name'}
        dispatchVehicleDeliveryError(action)

    }

    


    const handleDeliverySubmit = (e: SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()
        // validate inputs
        const validation = inputValidation(streetAddress, addressDetails, accompanyingName, accompanyingPhone)

        if (!validation) {
            setIsValid(false)
            return;
        }

        /*
             Logic if validation passes:
        */
    //    ! ----------------------------------------
        // Update Global State
        saveVehicleDeliveryData(streetAddress,addressDetails,radioAddress, radioContact, accompanyingName, accompanyingPhone)

        // hide Delivery form
        hideCheckoutForm({ type: 'HIDE_DELIVERY', field: 'showVehicleDelivery', value: false})

        // Update step
        handleNextStep()

        // show BookShipment form
        showCheckoutForm({ type: 'SHOW_BOOKSHIPMENT', field: 'showBookshipment', value: true})
        // dispatchCheckoutState({ type: 'show_bookshipment', field: 'showBookshipment', value: true })
    }

    const hideCheckoutForm = (action: CheckoutReducerAction) => {
        // { type: 'HIDE_DELIVERY', field: 'showVehicleDelivery', value: false}
        dispatchCheckoutState(action)

    }

    const showCheckoutForm = (action: CheckoutReducerAction) => {
        // { type: 'SHOW_BOOKSHIPMENT', field: 'showBookshipment', value: true}

        dispatchCheckoutState(action)
    }

    const saveVehicleDeliveryData = (streetAddress: string ,addressDetails: string ,radioAddress: string , radioContact: string , accompanyingName: string , accompanyingPhone: string ) => {
        
        const value = {
            streetAddress: streetAddress,
            addressDetails: addressDetails,
            addressType: radioAddress,
            contactPerson: radioContact,
            accompanyingName: accompanyingName,
            accompanyingPhone: accompanyingPhone
        }

        dispatchCheckoutData({ type: 'SET_DELIVERY_DATA', field: 'vehicleDeliveryForm', value: value})

    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const field = e.target.name;

        console.log('Field is:', field)

        switch (field) {
            case 'street-address':
                // update input state
                setStreetAddress(e.target.value);
                // clear input errors
                clearFieldErrors({ type: 'CLEAR_STREET_ERROR', field: 'streetAddressError', value: ''})
                // enable submit button
                setIsValid(true)
                break;

            case 'pickup_contact_name':
                // update input state
                setAccompanyingName(e.target.value)
                // clear input errors
                clearFieldErrors({ type: 'CLEAR_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: ''})
                // enable submit button
                setIsValid(true)
                break;

            case 'pickup_contact_phone':
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

    const clearFieldErrors = (action: VehicleDeliveryErrorAction) => {
        // { type: 'CLEAR_ACCOMPANYING_NAME_ERROR', field: 'accompanyingNameError', value: ''}
        dispatchVehicleDeliveryError(action)
    }

    const handleRadioClick = (e: MouseEvent<HTMLInputElement>) => {

        const field = e.target.name;

        console.log('Field is:', field)

        switch (field) {
            case 'residential-address':
                // check if input is checked
                if (radioAddress === radioOneAddress) {
                    return;
                }
                // else set checked attribute to true
                setRadioAddress(radioOneAddress);

                break;

            case 'business-address':
                // check if input is checked
                if (radioAddress === radioTwoAddress) {
                    return;
                }
                // else set checked attribute to true
                setRadioAddress(radioTwoAddress);

                break;

            case 'contact-client':
                // check if input is checked
                if (radioContact === radioOneContact) {
                    return;
                }
                // else set checked attribute to true
                setRadioContact(radioOneContact)
                // hide additional inputs
                setShowAccompanyingInputs(false)

                break;

            case 'accompanying-person':
                // check if input is checked
                if (radioContact === radioTwoContact) {
                    return;
                }
                // else set checked attribute to true
                setRadioContact(radioTwoContact)
                // show additional input fields
                setShowAccompanyingInputs(true)
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
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                    Vehicle delivery details
                </h2>
                {/* Form */}
                <form onSubmit={handleDeliverySubmit}>
                    <div className="flex flex-col gap-3">
                        {/* Delivery address */}
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="delivery-address">
                                Delivery address
                            </label>
                            <input
                                type="text"
                                id="delivery-address"
                                name="street-address"
                                value={streetAddress}
                                onChange={handleInputChange}
                                placeholder="Street Address"
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        {
                            vehicleDeliveryError.streetAddressError && (
                                <p className="text-[#BF211E] text-xs font-semibold">{vehicleDeliveryError.streetAddressError}</p>
                            )
                        }
                            <input
                                type="text"
                                id="delivery-address"
                                name="delivery-details"
                                placeholder="Apt, Suite, etc. (optional)"
                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />


                        </div>

                        {/* Delivery location tag */}
                        <p>San Francisco, CA 94112</p>

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
                                        id="residential-address"
                                        name="residential-address"
                                        value={radioOneAddress}
                                        checked={radioAddress === radioOneAddress}
                                        onClick={handleRadioClick}
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
                                        id="business-address"
                                        name="business-address"
                                        value={radioTwoAddress}
                                        checked={radioAddress === radioTwoAddress}
                                        onClick={handleRadioClick}
                                        className="h-4 w-4 accent-blue-600"
                                    />
                                    Business address
                                </label>
                            </div>
                        </fieldset>

                        {/* Contact person */}

                        <fieldset>
                            <legend>
                                Who do we contact about delivery?
                            </legend>
                            <div className="flex flex-col items-start gap-3 mt-2">
                                <label
                                    htmlFor="contact-client"
                                    className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-700"
                                >
                                    <input
                                        type="radio"
                                        id="contact-client"
                                        name="contact-client"
                                        value={radioOneContact}
                                        checked={radioContact === radioOneContact}
                                        onClick={handleRadioClick}
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
                                        id="accompanying-person"
                                        name="accompanying-person"
                                        value={radioTwoContact}
                                        checked={radioContact === radioTwoContact}
                                        onClick={handleRadioClick}
                                        className="h-4 w-4 accent-blue-600"
                                    />
                                    Contact an accompanying person
                                </label>
                            </div>
                        </fieldset>

                        {
                            showAccompanyingInputs && (
                                <React.Fragment>
                                    {/* input one */}
                                    <div className="w-full flex flex-col gap-1">
                                        <label htmlFor="contact-name">
                                            Delivery contact full name
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="pickup_contact_name"
                                            value={accompanyingName}
                                            onChange={handleInputChange}
                                            placeholder="e.g. John Doe"
                                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                {
                                    vehicleDeliveryError.accompanyingNameError && (
                                        <p className="text-[#BF211E] text-xs font-semibold">{vehicleDeliveryError.accompanyingNameError}</p>
                                    )
                                }

                                    </div>
                                    {/* input two */}
                                    <div className="w-full flex flex-col gap-1">
                                        <label htmlFor="contact-phone">
                                            Phone number
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-phone"
                                            name="pickup_contact_phone"
                                            value={accompanyingPhone}
                                            onChange={handleInputChange}
                                            placeholder="(555) 321-2232"
                                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray 900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />

                                    {
                                        vehicleDeliveryError.accompanyingPhoneError && (
                                            <p className="text-[#BF211E] text-xs font-semibold">{vehicleDeliveryError.accompanyingPhoneError}</p>
                                        )
                                    }

                                    </div>
                                </React.Fragment>
                            )
                        }
                    </div>
                    <button
                        type="submit"
                        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  ${!isValid ? 'bg-slate-400 hover:bg-slate-300': 'active:bg-blue-800'}`}
                        disabled={!isValid}
                    >
                        Continue
                        <ArrowRight />
                    </button>
                </form>

            </div>
        </>
    )
}