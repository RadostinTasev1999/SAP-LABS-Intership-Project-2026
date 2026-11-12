import CheckBadge from "@/components/shared/icons/CheckBadge";
import { CheckCircle } from "lucide-react";

export default function QuoteOffer(){

    return(
        <div className="w-full min-h-screen grid grid-cols-2 bg-[url(/LoginBackgroundImage.jpg)] bg-cover bg-center">
            {/* Quote Card */}
            <div className="max-w-lg mb-[20px] mt-[110px] ml-[14px] rounded-2xl backdrop-blur-xs border border-slate-300 bg-white/70 p-7 sm:px-4 sm:py-[22px]">
                {/* Header */}
                <div className="mb-[14px] text-[11px] font-bold uppercase tracking-[1px]">
                    Your Quote
                </div>

                {/* Route information */}
                <div className="mb-5 flex flex-wrap items-center gap-3 rounded-lg px-5 py-4 text-[13px] sm:px-4 sm:py-3.5">
                    <span className="font-semibold">📍 Beverly Hills, CA 90210</span>

                    <span className="text-xl font-bold">
                        →
                    </span>

                    <span className="font-semibold">📍 Atlanta, GA 30303</span>

                    <span className="font-semibold text-xs">
                        ~299 mi
                    </span>
                </div>

                {/* Inoperable vehicle checkbox */}
                <label htmlFor="" className="mb-[14px] flex cursor-pointer items-start gap-2.5 rounded-lg border-[1.5px] px-3.5 py-3 ">
                    <input type="checkbox" className="mt-0.5" />

                    <div>
                        <span className="block text-[13px] font-semibold">
                            This vehicle does not run or drive
                        </span>
                        <span className="mt-[3px] block text-[11px] ">
                            Carriers will use a winch or flatbed for loading. Toggling will refresh pricing.
                        </span>
                    </div>
                </label>
            {/* Price */}
                <div className="mb-4">
                    <span className="text-xl font-bold">Price</span>
                </div>

            {/* Price cards */}
            <div className="flex w-full justify-center">
                {/* Reccomended price card */}

                <div className="w-full max-w-md overflow-hidden border-t border-slate-400 ">
                    <div className="p-3">
                        {/* Price heading */}
                        <div className="mb-5">
                            <div className="price-title flex items-center justify-between gap-3">
                                <span className="text-lg font-bold text-slate-800">
                                    Full Service Price
                                </span>
                                
                            </div>
                        </div>
                        {/* Price amout */}
                        <div className="mb-6">
                            {/* Current price */}
                            <div id="price">
                                <div id="best-price" className="text-3xl font-extrabold tracking-tight text-slate-900">
                                    <b className="mr-1 text-3xl font-semibold">$</b>835
                                </div>
                            </div>

                        </div>

                        {/* Card benefits */}
                        <div className="space-y-4">
                            {/* Benefit 1 */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                                    <CheckCircle />
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-slate-700">
                                        Proper Due Diligence
                                    </span>
                                </div>
                            </div>

                            {/* Benefit 2 */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                                    <CheckCircle />
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-slate-700">
                                        Door to Door Car Pickup & Delivery
                                    </span>
                                </div>
                            </div>
                            {/* Benefit 3 */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                                    <CheckCircle />
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-slate-700">
                                        10+ Year Experience
                                    </span>
                                </div>
                            </div>
                            {/* Benefit 4 */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                                    <CheckCircle />
                                </div>
                                <div>
                                    <span className="text-sm font-medium text-slate-700">
                                        Dedicated Dispatch and Customer Support Team from Booking to Delivery
                                    </span>
                                </div>
                            </div>

                        </div>
                        {/* Additional Description */}
                        <div className="mb-4 mt-4 border-t border-slate-400 pt-4">
                            <div>
                                <span className="text-sm leading-6 text-slate-700">
                                        Enjoy the peace of mind that comes with a professional team,
                                        around-the-clock support, and expert oversight of your vehicle
                                        from pick up to delivery.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Continue to booking button */}
            <button
                type="button"
                className="mt-2 w-full rounded-[5px] bg-green-600 border border-slate-300 rounded-xl px-3.5 py-2.5 text-base text-white hover:bg-green-500"
                >
                    Continue to booking
            </button>
            {/* Edit Quote Button */}
            <button
                type="button"
                className="mt-2 w-full rounded-[5px] border border-slate-300 rounded-xl bg-white/80 px-3.5 py-2.5 text-base hover:bg-gray-50"
                >
                    ← Edit Quote
            </button>
            
            
            </div>
            {/* Summary of Quote SideBar */}
            <div>Summary</div>
        </div>
    )
}