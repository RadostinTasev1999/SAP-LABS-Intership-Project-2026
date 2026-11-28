import { DashboardErrorProp } from '@/lib/definitions'

export default function DashboardError({
    errorMessage
}: DashboardErrorProp){

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
            <div className="w-full max-w-md text-center">                
                <div className="flex justify-center mb-5">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-100">
                        <svg
                            className="w-7 h-7 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 9v2m0 4h.01M5.5 19h13a1.5 1.5 0 001.3-2.25l-6.5-11.25a1.5 1.5 0 00-2.6 0L4.2 16.75A1.5 1.5 0 005.5 19z"
                            />
                        </svg>
                    </div>
                </div>             
                <div role="alert">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Something went wrong
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        {errorMessage}
                    </p>
                </div>

            </div>
        </div>
    )
}