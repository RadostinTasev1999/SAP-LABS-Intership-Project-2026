"use client";

import DashboardError from '@/components/layout/dashboard/DashboardError';
import { DashRing } from "@/components/shared/shadcn/dash-ring";
import { useFetchRecord } from "@/features/hooks/quoteDashboard/useFetchRecord";
import { useSearchParams } from "next/navigation";
import QuoteOfferCard from "./QuoteOfferCard";
import QuoteSideBar from "./QuoteSideBar";

export default function QuoteOffer() {

  const searchParams = useSearchParams();
  // quoteId=JA4oGR5IDgE
  const quote_id = searchParams.get('quoteId')
  // JA4oGR5IDgE

  const { quoteRecord, setQuoteRecord } = useFetchRecord(quote_id)
  /*
    {
        data: null,
        loading: false,
        errors: { message: '' }
    }
  */

  const updateRecord = () => {

    // udpate state
  }
  
  if (quoteRecord.loading) {
    return (   
        <DashRing className="size-12 mx-auto mt-60" />     
    )
  }

  if (quoteRecord.errors.message) {
    return (
      <DashboardError errorMessage={quoteRecord.errors.message} />
    )
  }

  return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-8">
        {/* Quote Card */}

        <QuoteOfferCard
          recordData={quoteRecord.data}
          updateRecord={updateRecord}
        />

        {/* Quote SideBar */}

        <QuoteSideBar
          recordData={quoteRecord.data}
        />
      </div>
  );
}
