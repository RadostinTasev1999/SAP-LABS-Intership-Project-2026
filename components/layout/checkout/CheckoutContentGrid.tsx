import TransportForm from "@/components/forms/checkoutForms/TransportForm"
import VehiclePickup from "@/components/forms/checkoutForms/VehiclePickup"
import BookingSummary from "./BookingSummary"
import { CheckoutContext } from "@/components/providers/CheckoutProvider"
import DeliveryForm from "@/components/forms/checkoutForms/DeliveryForm"
import BookshipmentForm from "@/components/forms/checkoutForms/BookshipmentForm"
import ThankYouPage from "@/components/shared/other/ThankYouPage"


import { useContext } from "react"

export default function CheckoutContent(){

    const { checkoutState } = useContext(CheckoutContext);

    return (
        <div
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            {/* Left column */}
            <div className="min-w-0 max-w-2xl">
                {
                    checkoutState.showTransport && (
                        <TransportForm />
                    )
                }
                {
                    checkoutState.showVehiclePickup && (
                        <VehiclePickup />
                    )
                }
                {
                    checkoutState.showVehicleDelivery && (
                        <DeliveryForm />
                    )
                }
                {
                    checkoutState.showBookshipment && (
                        <BookshipmentForm />
                    )
                }
                {
                    checkoutState.showThankYou && (
                        <ThankYouPage />
                    )
                }
            </div>
            {/* Right column */}
            <aside
                className="min-w-0 space-y-5 overflow-hidden rounded-lg border border-gray-200 bg-white">
                <BookingSummary />
            </aside>
        </div>
    )
}