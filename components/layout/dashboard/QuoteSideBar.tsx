import MailIcon from "@/components/shared/icons/MailIcon";
import MapMarkerDistanceIcon from "@/components/shared/icons/MapMarkerDistance";
import SportCarIcon from "@/components/shared/icons/SportCarIcon";
import TrailerIcon from "@/components/shared/icons/TrailerIcon";
import PenIcon from "@/components/shared/icons/PenIcon";

import { QuoteSideBarProps } from '@/lib/definitions'

export default function QuoteSideBar({
    handleEdit,
    handleSave,
    edit
}: QuoteSideBarProps){

    return(
        <aside className="w-full min-w-xs lg:w-[360px] sm:col-span-2 mx-auto my-auto sm:my-[100px]">
            <div className="sm:rounded-xl backdrop-blur-sm bg-blue-100/70 p-5">
                {/* Sidebar heading */}
                <div className="mb-5 border-b border-gray-700 pb-3">
                    <span className="text-lg font-semibold text-slate-900">
                        Summary of the Quote
                    </span>
                </div>

                <div className="space-y-4" />

                {/* Vehicle */}
                <section>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
                            <SportCarIcon />
                            <span>
                                Vehicle
                            </span>
                        </div>
                    </div>
                    
                    <div className="pt-3">
                        <div className="flex flex-col gap-3">
                            <div id="vehicle" className="text-sm font-medium capitalize text-gray-800">
                                sedan midsize
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="" className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                                    <input 
                                        type="radio" 
                                        name="vehicle_condition_primary"
                                        id="vehicle_operable_primary"
                                        value="0"
                                        className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                                        />
                                        <span>Running</span>
                                </label>

                                <label htmlFor="" className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                                    <input 
                                        type="radio" 
                                        name="vehicle_condition_secondary"
                                        id="vehicle_inoperable_secondary"
                                        value="1"
                                        className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focue:ring-blue-500"
                                        />
                                        <span>Non-running (+$200)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mb-5 border-b border-gray-700 pb-4" />

                {/* Carrier Type */}
                <section>
                    <div className="flex items-center gap-2">
                        <TrailerIcon />
                            <span className="text-base font-semibold text-gray-900">
                                Carrier Type
                            </span>
                    </div>
                    
                    <div className="pt-3">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="" className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                                <input 
                                    type="radio" 
                                    name="trailer-type"
                                    id="trailer-type1"
                                    value="1"
                                    className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                                    />
                                    <span>Open</span>
                            </label>

                            <label htmlFor="" className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
                                <input 
                                    type="radio" 
                                    name="trailer-type"
                                    id="trailer-type2"
                                    value="2"
                                    className="h-4 w-4 border-gray-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                                    />
                                    <span>Enclosed (+$600)</span>

                            </label>
                        </div>
                    </div>
                </section>

                <div className="mb-5 border-b border-gray-700 pb-4" />

                {/* Route */}
                <section>
                    <div className="flex items-center gap-2">
                        <MapMarkerDistanceIcon />
                        <span className="text-base font-semibold text-gray-900">
                            Route
                        </span>
                    </div>

                    <div className="pt-3">
                        <div className="flex flex-col">
                            <span className="mb-0 text-sm font-medium text-gray-500">
                                From:
                            </span>
                            <span id="route-from" className="text-sm font-medium text-gray-800">
                                Seattle,WA
                            </span>

                            <span className="mb-0 mt-2 text-sm font-medium text-gray-500">
                                To:
                            </span>
                            <span id="route-to" className="text-sm font-medium text-gray-800">
                            Prague, OK
                            </span>

                            <span className="mb-0 mt-2 text-sm font-medium text-gray-500">
                            Date:
                            </span>
                            <span id="time" className="text-sm font-medium text-gray-800">
                            Within 7 days
                            </span>
                        </div>
                    </div>
                </section>

                <div className="mb-5 border-b border-gray-700 pb-4" />


                {/* Primary Contact */}
                <section>
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <MailIcon />
                            <span className="text-base font-semibold text-gray-900">
                                Primary Contact
                            </span>
                        </div>

                        <button
                            type="button"
                            className="inline-flex bg-gray-50 gap-1 items-center rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={handleEdit}
                            >
                            <span>Edit</span>
                            <PenIcon />
                        </button>
                        {/*  */}
                    </div>
                    {
                        edit ? (
                            <>
                                <div className="pt-2">
                                    <div className="flex flex-col gap-3">
                                        {/* Email input */}
                                        <div className="w-full flex flex-col gap-1">
                                            <label htmlFor="contact-email">
                                                Email address
                                            </label>
                                            <input 
                                                type="email" 
                                                id="contact-email"
                                                name="email"
                                                placeholder="Email address"
                                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                                />
                                        </div>
                                        {/* Phone Input */}
                                        <div className="w-full flex flex-col gap-1">
                                            <label htmlFor="contact-phone">
                                                Phone number
                                            </label>
                                            <input 
                                                type="text" 
                                                id="contact-phone"
                                                name="phone"
                                                value=""
                                                placeholder="Phone number"
                                                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray 900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                                />
                                        </div>
                                    </div>
                                    {/* Save Button */}
                                    <button
                                        type="button"
                                        className="mt-3 flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800"
                                        onClick={handleSave}
                                        >
                                            Save
                                    </button>
                                </div>
                            </>
                        )
                        :
                        (
                                <div className="pt-3">
                                    <div className="flex flex-col">
                                        <span className="mb-0 text-sm font-medium text-gray-500">
                                            Email:
                                        </span>
                                        <span className="text-sm font-medium text-gray-800">
                                            tasevdev19@gmail.com
                                        </span>

                                        <span className="mb-0 mt-2 text-sm font-medium text-gray-500">
                                            Phone:
                                        </span>
                                        <span className="text-sm font-medium text-gray-800">
                                            (555) 232-4421
                                        </span>
                                    </div>
                                </div>
                        )
                    }
                    
                </section>

                {/* Shipping plan */}
            </div>
        </aside>
    )
}