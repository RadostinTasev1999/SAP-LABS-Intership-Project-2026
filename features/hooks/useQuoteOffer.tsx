import { useState, useEffect, ChangeEvent } from "react"
/*
    -> GET request to 'http://localhost:3000/quoteData'
    -> manage state
*/
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegExp = /^\(\d{3}\) \d{3}-\d{4}$/;

export const useQuoteOffer = (DB_URL: string) => {

    
    // create state to hold inputted destination data
    const [destinationState, setDestinationState] = useState({ pickupLocation: '', deliveryLocation: '', transportType: ''})
    // create state to hold inputted contact details data
    const [contactDetails, setContactDetails] = useState({ emailContact: '', phoneContact: '', pickupDate: ''})
    //  create state to hold calculated quote price
    const [price, setPrice] = useState(null);
    // create state to hold errors on data fetching failures
    const [errors, setErrors] = useState({ message: '' })

    // ! State management and business logic for Summary card inputs
    // create state to conditionally render edit contact inputs
    const [showEdit, setShowEdit] = useState(false);
    // create state for input fields
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    // create state to show input field errors
    const [fieldErrors, setFieldErrors] = useState({ emailError: '', phoneError: ''})
    // create state for submit button
    const [isDisabled, setIsDisabled] = useState(false)

    // create a function to validate input data
    const validateInputs = (email: string, phone: string) => {

        let isValid = true;
        // validate empty email
        if (!email) {
            // set field errors
            setFieldErrors((state) => ({...state, emailError: 'Please enter an email'}))
            // disable button
            isValid = false;
        } else if (!emailRegExp.test(email)) {
            // set field errors
            setFieldErrors((state) => ({...state, emailError: 'Please enter valid email'}))
            // disable button
            isValid = false
        }
        // validate empty phone
        if (!phone) {
            // set Field errors
            setFieldErrors((state) => ({...state, phoneError: 'Please enter phone number'}))
            // disable button
            isValid = false;
        } else if (!phoneRegExp.test(phone)) {
            // set field errors
            setFieldErrors((state) => ({...state, phoneError: 'Please enter valid phone number'}))
            // disable submit button
            isValid = false
        }

        return isValid
    }
    // create onClick event handler function
    const saveEdit = (e: MouseEvent<HTMLButtonElement>) => {

        // Validate inputs
        const validate = validateInputs(email, phone)

        if (!validate) {
            // disable submit button
            setIsDisabled(true);
            return;
        }

        // If validation passes:

        // -> update global state to reflect changes in UI
        // { emailContact: null, phoneContact: null, pickupDate: null}
        setContactDetails((state) => ({...state, emailContact: email, phoneContact: phone }))
        // -> hide edit form
        setShowEdit(false)
        // 
        console.log('Save clicked')
    }
    // create onChange event handler function
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

        const field = e.target.name;
        
        switch (field) {
            case 'email':
                // update input state
                setEmail(e.target.value)
                // clear field errors
                if (fieldErrors.emailError) {
                    setFieldErrors((state) => ({...state, emailError: ''}))
                }
                // enable submit button
                if (isDisabled) {
                    setIsDisabled(false)
                }
                break;
            case 'phone':
                // update input state
                setPhone(e.target.value)
                // clear field errors
                if (fieldErrors.phoneError) {
                    setFieldErrors((state) => ({...state, phoneError: ''}))
                }
                // enable submit button
                if (isDisabled) {
                    setIsDisabled(false)
                }
                break;
        
            default:
                break;
        }
    }

    const handleEditClick = (e: MouseEvent<HTMLButtonElement>) => {

        console.log("Button has been clicked!")
        setShowEdit(true)
    }

    useEffect(() => {

        // function which gets the most recent quote data from DB
        const getQuoteData = async(DB_URL: string) => {

            try {
                // http://localhost:3000/quoteData
                const response = await fetch(DB_URL);
                const result = await response.json();
                
                // console.log('Result is:', result)
                const quoteData = result.pop();
                const destinationData = quoteData.destinationForm
                setDestinationState({ pickupLocation: destinationData.pickupLocation, deliveryLocation: destinationData.deliveryLocation, transportType: destinationData.transportType })
                const contactData = quoteData.contactDetails
                
                // update destination state
                setContactDetails({ emailContact: contactData.email, phoneContact: contactData.phone, pickupDate: contactData.pickupDate })

                

            } catch (error) {
                setErrors({
                    message: 'Error fetching DataBase'
                })
            }
            
            
            
        }

        getQuoteData(DB_URL)

    },[])

    return {
        price,
        destinationState,
        contactDetails,
        showEdit,
        email,
        phone,
        fieldErrors,
        isDisabled,
        saveEdit,
        handleInputChange,
        handleEditClick
    }
}

/*
    all states and effects inside the custom hook are part of the component, where you called the custom hook.
    The state update inside custom hooks re-renders the component where you used
    your custom hooks (even if it does not return anything)
*/