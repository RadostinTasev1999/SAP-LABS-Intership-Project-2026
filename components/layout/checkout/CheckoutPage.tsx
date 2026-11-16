'use client'

import {CheckoutProvider} from '@/components/providers/CheckoutProvider'
import CheckoutProgress from "./CheckoutProgress"
import CheckoutContent from './CheckoutContentGrid'

export default function CheckoutPage(){

    return (
        <CheckoutProvider>
        <main className="min-h-screen bg-gray-50">
            {/* Progress Steps */}
            <section className="mx-auto max-w-7xl px-4 py-8 mt-26">
                <CheckoutProgress />
            </section>
            {/* Main checkout content */}
            <section className="mx-auto max-w-7xl px-4 pb-12 mt-16">
                <CheckoutContent />
            </section>
        </main>
        </CheckoutProvider>
    )
}