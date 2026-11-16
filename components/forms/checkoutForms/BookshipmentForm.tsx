import LockIcon from '@/components/shared/icons/LockIcon'
import MasterCardIcon from '@/components/shared/icons/MasterCardIcon'
import PayPalIcon from '@/components/shared/icons/PayPalIcon'
import VisaIcon from '@/components/shared/icons/VisaIcon'
import AmexIcon from '@/components/shared/icons/AmexIcon'

export default function BookshipmentForm(){

    return (
        <section
            id="checkout-complete-block"
            className="mx-auto w-full max-w-2xl rounded-xl bg-white p-5 sm:p-8"
        >
            {/* Header */}
            <div className="flex items-center justify-start gap-4">

                <button
                    type="button"
                    disabled
                    aria-label="Go back"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400"
                >
                    {/* Back icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <h1 className="text-2xl font-bold text-slate-900">
                    Last step!
                </h1>


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
                    aria-selected="true"
                    className="flex items-center justify-center gap-2 border-b-2 border-blue-600 px-4 py-4 text-sm font-semibold text-blue-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                        aria-hidden="true"
                    >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 9h20M6 15h4" />
                    </svg>
                    Credit Card
                </button>

                <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="flex items-center justify-center gap-2 border-b-2 border-transparent px-4 py-4 text-sm font-medium text-slate-500 transition hover:text-slate-800"
                >
                    <PayPalIcon />
                </button>

            </div>

            {/* Payment information */}
            <div className='mt-6 space-y-5'>

                {/* Payment due information */}
                <div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
                    <h2 className='text-lg font-bold text-slate-900'>
                        $0 Due now
                    </h2>
                    <p className='mt-1 text-sm leading-6 text-slate-600'>
                        Your credit card will not be charged until the order is assigned to a carrier.
                    </p>
                </div>

                {/* Security message */}
                <div className='flex items-center gap-3 text-sm text-slate-600'>
                    <LockIcon />
                    <p>
                        This is a secure 256-bit SSL Encrypted site.
                    </p>
                </div>

                {/* Credit card form */}
                <div className='rounded-xl border border-slate-200 p-4 sm:p-5'>
                    {/* Card number section */}
                    <div>
                        <div className='mb-2 flex items-center justify-between gap-3'>
                            <label
                                htmlFor="cardNumber"
                                className='text-sm font-medium text-slate-700'
                            >
                                Card number
                            </label>
                            <div
                                id="cards"
                                className='flex flex-row gap-3'
                            >
                                <MasterCardIcon />
                                <VisaIcon />
                                {/* <AmexIcon /> */}
                            </div>


                        </div>
                        {/* ------------- */}
                        <div className='relative'>
                            <input
                                type="text"
                                name='cardNumber'
                                id='cardNumber'
                                autoComplete='cc-number'
                                inputMode='numeric'
                                maxLength={19}
                                placeholder='Credit Card Number'
                                className='block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11'

                            />
                            <LockIcon className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />



                        </div>
                    </div>

                    {/* Additional card info */}
                    <div className='mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                        {/* Cardholder name */}
                        <div className='sm:col-span-2'>
                            <label
                                htmlFor="cardHolderName"
                                className='mb-2 block text-sm font-medium text-slate-700'
                            >
                                Full name on card
                            </label>

                            <input
                                type="text"
                                name='cardHolderName'
                                id='cardHolderName'
                                autoComplete='cc-name'
                                placeholder='e.g. John Smith'
                                className='block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11'
                            />
                        </div>

                        {/* Expiration date */}
                        <div>
                            <label
                                htmlFor="expDate"
                                className='mb-2 block text-sm font-medium text-slate-700'
                            >
                                Expiration date
                            </label>

                            <input
                                type="text"
                                name='expDate'
                                id='expDate'
                                autoComplete='cc-exp'
                                maxLength={5}
                                placeholder='MM / YY'
                                className='block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11'
                            />

                        </div>

                        {/* Security Code */}

                        <div>
                            <div className='mb-2 flex items-center gap-1.5'>
                                <label
                                    htmlFor="cardCode"
                                    className='text-sm font-medium text-slate-700'
                                >
                                    Security Code
                                </label>

                                <button
                                    type='button'
                                    title='The card security code is located on the back of the credit or debit cards and is typically a separate group of the three digits to the right of the signature strip.'
                                    aria-label='Security code information'
                                    className='shrink-0'
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
                                name='cardCode'
                                id='cardCode'
                                autoComplete='cc-csc'
                                inputMode='numeric'
                                maxLength={4}
                                placeholder='CVV'
                                className='block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 pr-11'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}