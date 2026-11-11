"use client"

import ArrowRight from "@/components/ui/ArrowRight"

import EmailInput from './EmailInput'
import PhoneInput from './PhoneInput'
import PriorityInput from './PriorityInput'

import {QuoteContactProps} from '@/lib/definitions'
import { ContactErrorState } from '@/lib/definitions'
import { ContactsAction } from '@/lib/definitions'
import { ChangeEvent, useState, useEffect } from "react"
import { useReducer } from "react"

const API_URL = "http://localhost:3000/priorityList";

const initialErrors = {
    emailError: '',
    phoneError: ''
}

// {type: 'EMPTY_EMAIL', field: 'emailError', value: 'Please enter email' }
// {type: 'EMPTY_EMAIL', field: 'emailError', value: 'Please enter email' }
// { type: 'RESET_EMAIL', field: 'emailError', value: ''}

// { type: 'RESET_EMAIL', field: 'emailError', value: ''}

// { type: 'EMPTY_PHONE', field: 'phoneError', value: 'Please enter phone'}
// {type: 'RESET_PHONE', field: 'phoneError', value: ''}
const contactsReducer = (state: ContactErrorState, action: ContactsAction) => {

    switch (action.type) {

        case 'EMPTY_EMAIL':
            
        return {
            ...state,
            [action.field]: action.value
        }

        case 'EMPTY_PHONE':
            
        return {
            ...state,
            [action.field]: action.value
        }

        case 'RESET_EMAIL':
            
        return {
            ...state,
            [action.field]: action.value
        }

        case 'RESET_PHONE':
            
        return {
            ...state,
            [action.field]: action.value
        }
            
    
        default:
            return {
                ...state
            }
    }
    
}

export default function QuoteContactForm({
    dispatchQuoteData
}: QuoteContactProps){

    const [email, setEmail] = useState('');
    const [priorityList, setPriorityList] = useState([]);
    const [priority, setPriority] = useState('As soon as possible');
    const [phone, setPhone] = useState('');

    const [contactErrors, dispatchErrors] = useReducer(contactsReducer, initialErrors)

    const [isDisabled, setIsDisabled] = useState(false)


    const validateContactInputs = (email: string, phone: string) => {
        
        let isValid = true;

        // verify if inputs are empty
        if (!email) {
            // update emailError state
            dispatchErrors({type: 'EMPTY_EMAIL', field: 'emailError', value: 'Please enter email' })
            isValid = false;
        }
        if (!phone) {
            // update phoneError state
            dispatchErrors({ type: 'EMPTY_PHONE', field: 'phoneError', value: 'Please enter phone'})
            isValid = false;
        }


        return isValid
    }

    const contactComplete = (event: MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        // Validate input data
        const validInputs = validateContactInputs(email, phone);

        // disable button if validation fails
        if (!validInputs) {
            setIsDisabled(true);
            return;
        }
        

    }

    const handleInputChange = (e: ChangeEvent) => {
        

        const field = e.target.name;

        switch (field) {

            case "email":
                // update email input state
                setEmail(e.target.value);
                // update QuoteData state
                dispatchQuoteData({ type: 'SET_EMAIL', field: field, value: e.target.value})
                // 
                if (isDisabled) {
                    // clear error message
                    dispatchErrors({ type: 'RESET_EMAIL', field: 'emailError', value: ''})
                    // enable submit button
                    setIsDisabled(false)
                }
                break;

            case "phone":
                // update phone input state
                setPhone(e.target.value);
                // update quoteData state
                dispatchQuoteData({ type: 'SET_PHONE', field: field, value: e.target.value })
                
                if (isDisabled) {
                    // remove error message
                    dispatchErrors({type: 'RESET_PHONE', field: 'phoneError', value: ''})
                    // enable submit button
                    setIsDisabled(false);
                }
                break;

            case "priority":
                
                setPriority(e.target.value)
                dispatchQuoteData({ type: 'SET_PRIORITY', field: field, value: e.target.value })
                break;
        
            default:
                break;
        }
    }

    useEffect(() => {

        const fetchData = async() => {

            const response = await fetch(API_URL);
            const result = await response.json();

            setPriorityList(result)
        }

        fetchData();

    },[])

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

                    <button 
                        onClick={contactComplete} 
                        className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-[14px] py-[11px] gap-2 mt-2.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-green-500"
                        disabled={isDisabled ? true : false}     
                            >
                        Calculate Quote
                        <ArrowRight />
                    </button>
                </div>

            </div>


        </div>
    )
}