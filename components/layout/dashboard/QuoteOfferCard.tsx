'use client'

import ApproximateEqualsIcon from "@/components/shared/icons/ApproximateEquals";
import { CheckCircle } from "lucide-react";
import { QuoteCardData } from '@/lib/definitions';
import { useCalculateOffer } from "@/features/hooks/quoteDashboard/useCalculateOffer";


export default function QuoteOfferCard({
  recordData,
  updateRecord
}: QuoteCardData) {

  const pickupLocation = recordData?.destinationForm.pickupLocation;
  const deliveryLocation = recordData?.destinationForm.deliveryLocation


  useCalculateOffer(updateRecord, pickupLocation, deliveryLocation)

    

  return (
    <div className="min-w-xs sm:col-span-2 sm:mx-auto my-[100px] sm:rounded-2xl backdrop-blur-xs sm:border sm:border-slate-300 bg-blue-100/80 p-7 sm:px-4 sm:py-[22px]">
      {/* Header */}
      <div className="mb-[14px] text-[11px] font-bold uppercase tracking-[1px]">
        Your Quote
      </div>

      {/* Route information */}
      <div className="flex flex-wrap items-center gap-3 rounded-lg px-5 py-4 text-[13px] sm:px-4 sm:py-3.5">
        <span className="font-semibold">
          📍{recordData?.destinationForm.pickupLocation}
        </span>

        <span className="text-xl font-bold">→</span>

        <span className="font-semibold">
          📍{recordData?.destinationForm.deliveryLocation}
        </span>

        <span className="inline-flex items-center gap-1 font-semibold text-xs">
          <ApproximateEqualsIcon /> Miles
        </span>
      </div>

      {/* Inoperable vehicle checkbox */}
      {/* Price */}

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
                <div
                  id="best-price"
                  className="text-3xl font-extrabold tracking-tight text-slate-900"
                >
                  <b className="mr-1 text-3xl font-semibold">$</b>
                  
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
                    Dedicated Dispatch and Customer Support Team from Booking to
                    Delivery
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
        className="mt-2 w-full border-b border-slate-400 font-semibold text-green-600 sm:bg-green-600 sm:border sm:border-slate-300 sm:rounded-xl px-3.5 py-2.5 text-base sm:text-white hover:bg-green-500"
        // onClick={handleOfferConfirm}
      >
        Continue to booking
      </button>
      {/* Edit Quote Button */}
      <button
        type="button"
        className="mt-2 w-full border-b border-slate-400 font-semibold text-slate-800 sm:border sm:border-slate-300 sm:rounded-xl sm:bg-white/80 px-3.5 py-2.5 text-base hover:bg-gray-50"
        // onClick={handleRouteBack}
      >
      Back to Quote
      </button>
    </div>
  );
}


/*
  const { offerCard, calculatePrice, setOfferCard, setCalculatePrice } = useOffer()
  const { router } = useDashboardRouter()

  const handleOfferConfirm = (e: MouseEvent<HTMLButtonElement>) => {

    console.log('Offer Card is:', offerCard)
    router.replace('/checkout')

  }

  const handleRouteBack = (e: MouseEvent<HTMLButtonElement>) => {

    router.back();
  }

  useEffect(() => {

    if (!calculatePrice) {
      return;
    }
    

    // Logic to fetch api to calculate carrer market rates (price before broker fee)
    const calculateCarrierPrice = async() => {

      const API_URL = process.env.NEXT_PUBLIC_MARKET_PRICE

      if (!API_URL) {
        throw new Error('Unable to retrieve API_URL from environment variable')
      }

      const pickupArray = offerCard.pickupLocation.split(" ");
      
      const pickupZip = Number(pickupArray[pickupArray.length - 1]);

      const deliveryArray = offerCard.deliveryLocation.split(" ");
      const deliveryZip = Number(deliveryArray[deliveryArray.length - 1])

      const query = `/quote?fromZip=${pickupZip}&toZip=${deliveryZip}&vehicleType=sedan`

      try {
          
        const response = await fetch(`${API_URL}${query}`);
        const result = await response.json();

        if (!result.success) {
          throw new Error('Failed to fetch API')
        }

        const quoteResult = result.quote;


        setOfferCard((state) => ({...state, price: quoteResult.price, miles: quoteResult.distance}))
        
       
        saveOfferDetails({
          pickupLocation: offerCard.pickupLocation, 
          deliveryLocation: offerCard.deliveryLocation,
          price: quoteResult.price, 
          miles: quoteResult.distance
        })

        setCalculatePrice(false)

        

      } catch (error) {
        throw new Error('Failed to fetch API')
      }


    }

    calculateCarrierPrice()

  },[calculatePrice])
*/