'use client'

import ArrowRight from "@/components/shared/icons/ArrowRight"
import { ChangeEvent, useState } from "react"
import { useContext } from "react"
import { CheckoutContext } from '@/components/providers/CheckoutProvider'
import { useEffect } from "react"
import { CheckoutReducerAction } from '@/lib/definitions'


const API_URL = 'http://localhost:3000/transportData';

const companyNameRegex = /^[A-Za-z0-9](?:[A-Za-z0-9 &.,'()/-]*[A-Za-z0-9)])?$/;
const fullNameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)+$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegExp = /^\(\d{3}\) \d{3}-\d{4}$/;

export default function TransportForm() {

    const { handleNextStep, dispatchCheckoutState, dispatchPickupError,  pickupError, dispatchCheckoutData, checkoutData } = useContext(CheckoutContext);

    // inputs state variables
    const [radioState, setRadioState] = useState('individual');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    // const [pickupComplete, setPickupcomplete] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);


    const validateTransportInfo = (company:string, name:string, email:string, phone:string) => {

        let isValid = true;
        
        // Validate company input
        if (radioState === 'business') {
            // set errorState for company input
            if (!company) {
                dispatchPickupError({ type: 'set_company_error', field: 'companyError', value: 'Please enter Company name' })

                isValid = false
            } else if (!companyNameRegex.test(company)) {
                dispatchPickupError({ type: 'set_company_error', field: 'companyError', value: 'Please enter valid Company name'})
                isValid = false
            }
        }
        // Validate name input
        if (!name) {
            // update input Error state
            dispatchPickupError({ type:'set_name_error', field: 'nameError', value: 'Please enter full name'})
            isValid = false
        } else if (!fullNameRegex.test(name)) {
            // Set error state
            dispatchPickupError({ type: 'set_name_error', field: 'nameError', value: 'Please enter valid full name' });
            isValid = false
        }

        // Validate email input
        if (!email) {
            // set input errors
            dispatchPickupError({ type: 'set_email_error', field: 'emailError', value: 'Please enter email'})
            // 
            isValid = false
        } else if (!emailRegExp.test(email)) {
            // set email errors
            dispatchPickupError({ type: 'set_email_error', field: 'emailError', value: 'Please enter valid email'})
            isValid = false
        }

        // Validate phone input
        if (!phone) {
            // set Phone errors
            dispatchPickupError({ type: 'set_phone_error', field: 'phoneError', value: 'Please enter phone'});
            isValid = false;
        } else if (!phoneRegExp.test(phone)) {
            // set phone errors
            dispatchPickupError({ type: 'set_phone_error', field: 'phoneError', value: 'Please enter valid phone'})
            
            isValid = false
        }


        return isValid
    }

    const onRadioClick = (e: MouseEvent<HTMLInputElement>) => {

        console.log(`Radio button ${e.target.value} has been clicked!`)
        setRadioState(e.target.value);
    }

    const handleTransportSubmit = (e: SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();
        // Validate inputs:
        const validation = validateTransportInfo(company, name, email, phone)

        if (!validation) {

            // Disable submit button
            setIsDisabled(true);
            return;
        }
        // Logic if validation passes

        // Save form data in global state
        saveTransportFormData(radioState, name, email, phone, company)
        // hide transport form
        hideForm({ type: 'HIDE_TRANSPORT', field: 'showTransport', value: false })
        // show Pickup Form
        showForm({ type: 'SHOW_VEHICLEPICKUP', field: 'showVehiclePickup', value: true})
        // Mark step as complete

        
    }

    const saveTransportFormData = (radioState: string, name: string, email: string, phone: string, company: string) => {

        const value = { 
            clientType: radioState,
            fullName: name,
            emailAddress: email,
            phoneNumber: phone,
            companyName: company
         }

        dispatchCheckoutData({ type: 'SET_TRANSPORT_DATA', field: 'transportForm', value: value})
        
    }

    const hideForm = (action: CheckoutReducerAction) => {

        // { type: 'HIDE_TRANSPORT', field: 'showTransport', value: false }
        dispatchCheckoutState(action)

    }

    const showForm = (action: CheckoutReducerAction) => {

        // { type: 'SHOW_VEHICLEPICKUP', field: 'showVehiclePickup', value: true}
        dispatchCheckoutState(action)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        console.log('target is:',e.target.name)
        const field = e.target.name;

        switch (field) {
            case 'companyName':
                // update input state
                setCompany(e.target.value);
                // clear error messages
                dispatchPickupError({ type: 'clear_company_error', field: 'companyError', value: ''})
                // enable submit button
                setIsDisabled(false)
                break;
            case 'name':
                // update input state
                setName(e.target.value)
                // clear error message
                dispatchPickupError({ type: 'clear_name_error', field: 'nameError', value: ''})
                // Enable submit button
                setIsDisabled(false);
                break;

            case 'email':
                // update input state
                setEmail(e.target.value)
                // clear email errors
                dispatchPickupError({ type: 'clear_email_error', field: 'emailError', value: ''})
                // enable submit button
                setIsDisabled(false);
                break;

            case 'phone':
                // update input state
                setPhone(e.target.value)
                // clear input errors
                dispatchPickupError({ type: 'clear_phone_error', field: 'phoneError', value: ''})
                // enable submit button
                setIsDisabled(false);
                break;
        
            default:
                break;
        }

    }

    useEffect(() => {
        console.log('CheckoutData is:', checkoutData)
    },[checkoutData])
    
    
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
        <form onSubmit={handleTransportSubmit}>
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
                                    value={company}
                                    placeholder="Company name"
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                                {
                                    pickupError.companyError && (
                                        <p className="text-[#BF211E] text-xs font-semibold">{pickupError.companyError}</p>
                                    )
                                }
                                
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
                        value={name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                    {
                        pickupError.nameError && (
                            <p className="text-[#BF211E] text-xs font-semibold">{pickupError.nameError}</p>
                        )
                    }
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
                        value={email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                    {
                        pickupError.emailError && (
                            <p className="text-[#BF211E] text-xs font-semibold">{pickupError.emailError}</p>
                        )
                    }
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
                        value={phone}
                        onChange={handleChange}
                        placeholder="(555) 555-1234"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray 900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                    {
                        pickupError.phoneError && (
                            <p className="text-[#BF211E] text-xs font-semibold">{pickupError.phoneError}</p>
                        )
                    }
                </div>
            </div>
            <button
                type="submit"
                className={`mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 ${isDisabled ? 'bg-slate-400 hover:bg-slate-300': ''}`}
                disabled={isDisabled}
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