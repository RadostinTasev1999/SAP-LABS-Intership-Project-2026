"use client";

import QuoteOfferCard from "./QuoteOfferCard";
import QuoteSideBar from "./QuoteSideBar";

const API_URL = "https://carhauler247.com/api/public/v1";

export default function QuoteOffer() {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-8 bg-slate-100">
      {/* Quote Card */}

      <QuoteOfferCard />

      {/* Quote SideBar */}

      <QuoteSideBar />
    </div>
  );
}
