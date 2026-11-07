import ArrowRight from "@/components/ui/ArrowRight"
import PriorityItems from './priorityItems'


const priorityList = [
    {
        id: 1,
        value: 'As soon as possible'
    },
    {
        id: 2,
        value: 'Within 2 weeks'
    },
    {
        id: 3,
        value: 'Within 30 days'
    },
    {
        id: 4,
        value: 'More than 30 days'
    }
]

export default function QuoteContactForm(){



    return (
        <div className="mb-4 p-[18px]">
            <h1 className="mb-[14px] text-base font-semibold text-slate-600">
                Enter Your Contact Details
            </h1>

            <div className="grid grid-cols-2 gap-[14px]">

                {/* Col 1 email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-slate-800">
                        Email <span className="text-[#BF211E]">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="johndoe@company.com"
                        required
                        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                    />
                </div>

                {/* Col 2 Select list */}
                <div className="mb-4">
                    <label htmlFor="pickup-date" className="mb-1.5 block text-[13px] font-semibold text-slate-800">
                        Pickup date <span className="text-[#BF211E]">*</span>
                    </label>
                    {/* <input
                        id="pickup-date"
                        name="pickupdate"
                        type="text"
                        required
                        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                    /> */}
                    <select
                        name="selectedPriority"
                        defaultValue={priorityList[0].value}
                        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                    >

                        {
                            priorityList.map((el) => (
                                <PriorityItems
                                    key={el.id}
                                    text={el.value}
                                    value={el.value}
                                />
                            ))
                        }
                    </select>
                </div>

                {/* Col 3 Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="mb-1.5 block text-[13px] font-semibold text-slate-800">
                        Phone <span className="text-slate-800/70 text-xs">(Optional)</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="(555) 555-1234"
                        className="border w-full rounded-[5px] border-gray-300 bg-gray-50 px-[14px] py-[11px] text-sm text-gray-800 outline-none transition-colors focus:border-blue-500"
                    />
                </div>

                {/* button */}
                <div className="flex items-center">

                    <button className="inline-flex w-full items-center justify-center rounded-md bg-green-600 px-[14px] py-[11px] gap-2 mt-2.5 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-green-500">
                        Calculate Quote
                        <ArrowRight />
                    </button>
                </div>

            </div>


        </div>
    )
}