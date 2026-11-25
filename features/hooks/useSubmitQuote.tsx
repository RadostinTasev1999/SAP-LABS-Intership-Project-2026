import { useState, useEffect, useReducer } from "react";
import { useContext } from "react";
import { QuoteContext } from "@/components/providers/QuoteProvider";
import { ContactErrorState } from "@/lib/definitions";
import { ContactsAction } from "@/lib/definitions";
import { QuoteDataAction } from "@/lib/definitions";
import { useRouter } from "next/navigation";

const initialErrors = {
  emailError: "",
  phoneError: "",
  submitError: "",
};
// { type: "EMPTY_EMAIL", field: "emailError", value: "Please enter email" }
// { type: 'RESET_PHONE', field: 'phoneError', value: '' }
// { type: 'SUBMIT_ERROR', field: 'submitError', value: 'Failed to submit Quote'}
// { type: 'RESET_SUBMIT', field: 'submitError', value: ''}
const contactsReducer = (state: ContactErrorState, action: ContactsAction) => {
  switch (action.type) {
    case "SUBMIT_ERROR":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_SUBMIT":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "EMPTY_EMAIL":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "EMPTY_PHONE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET_EMAIL":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET_PHONE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "INVALID_EMAIL":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "INVALID_PHONE":
      return {
        ...state,
        [action.field]: action.value,
      };

    default:
      return {
        ...state,
      };
  }
};

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegExp = /^\(\d{3}\) \d{3}-\d{4}$/;

export const useSubmitQuote = (
  email: string,
  phone: string,
  priority: string,
  POST_URL: string,
) => {
  const { dispatchQuoteDataState, quoteDataState } = useContext(QuoteContext);

  const router = useRouter();

  const [submitQuote, setSubmitQuote] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [contactErrors, dispatchErrors] = useReducer(
    contactsReducer,
    initialErrors,
  );

  const setInputErrors = (action: ContactsAction) => {
    dispatchErrors(action);
  };
  // { type: 'RESET_PHONE', field: 'phoneError', value: '' }
  const clearInputErrors = (action: ContactsAction) => {
    dispatchErrors(action);
  };

  const validateContactInputs = (email: string, phone: string) => {
    let isValid = true;

    // verify if inputs are empty
    if (!email) {
      // update emailError state
      setInputErrors({
        type: "EMPTY_EMAIL",
        field: "emailError",
        value: "Please enter email",
      });

      isValid = false;
    }
    if (!phone) {
      // update phoneError state
      setInputErrors({
        type: "EMPTY_PHONE",
        field: "phoneError",
        value: "Please enter phone",
      });

      isValid = false;
    }
    // test email input against regex
    if (!emailRegExp.test(email)) {
      // show error message
      setInputErrors({
        type: "INVALID_EMAIL",
        field: "emailError",
        value: "Please enter valid email",
      });

      // disable submit button
      isValid = false;
    }
    // test phone input against regex
    if (!phoneRegExp.test(phone)) {
      // display error message
      setInputErrors({
        type: "INVALID_PHONE",
        field: "phoneError",
        value: "Please enter valid phone",
      });

      // disable submit button
      isValid = false;
    }

    return isValid;
  };

  const saveContactData = (action: QuoteDataAction) => {
    dispatchQuoteDataState(action);
  };

  const setContactErrors = (action: ContactsAction) => {
    dispatchErrors(action);
  };

  const contactComplete = (e: MouseEvent<HTMLButtonElement>) => {
    // Validate input data
    const validInputs = validateContactInputs(email, phone);

    if (!validInputs) {
      setIsDisabled(true);
      return;
    }
    //   Logic if validation passes

    const data = {
      email: email,
      pickupDate: priority,
      phone: phone,
    };
    // Update global state
    saveContactData({
      type: "SET_CONTACTDATA",
      field: "contactDetails",
      value: data,
    });
    //  Mark form as complete

    // Show loading spinner
    setLoading(true);
    // Mark form as complete
    // trigger effect function

    setTimeout(() => {
      setSubmitQuote(true);
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    if (!submitQuote) {
      return;
    }

    const sendQuote = async () => {
      try {
        // POST data
        await fetch(POST_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(quoteDataState),
        });
        // Show offer
        router.push("/dashboard");
      } catch (error) {
        setContactErrors({
          type: "SUBMIT_ERROR",
          field: "submitError",
          value: "Error submitting Quote",
        });
      }
    };

    sendQuote();
  }, [submitQuote]);

  return {
    contactComplete,
    isDisabled,
    setIsDisabled,
    clearInputErrors,
    contactErrors,
    loading,
  };
};
