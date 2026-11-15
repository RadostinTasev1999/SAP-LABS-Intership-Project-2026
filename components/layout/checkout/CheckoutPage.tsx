import CheckoutProgress from "./CheckoutProgress"
import TransportForm from '@/components/forms/checkoutForms/TransportForm'
import BookingSummary from "./BookingSummary"


export default function CheckoutPage(){

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Progress Steps */}
            <section className="mx-auto max-w-7xl px-4 py-8 mt-26">
                <CheckoutProgress />
            </section>
            {/* Main checkout content */}
            <section className="mx-auto max-w-7xl px-4 pb-12 mt-16">
                <div 
                    className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
                    {/* Left column */}
                    <div className="min-w-0 max-w-md">
                        {/* Transport Form */}
                        <TransportForm />
                    </div>
                    {/* Right column */}
                    <aside 
                        className="min-w-0 space-y-5 overflow-hidden rounded-lg border border-gray-200 bg-white">
                            <BookingSummary />
                    </aside>
                </div>
            </section>
        </main>
    )
}