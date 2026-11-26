import AppHeader from "@/components/layout/header/Header";
import AppFooter from "@/components/layout/footer/Footer";
import QuoteOffer from "@/components/layout/dashboard/QuoteOffer";

// static data imports
import { footerGridData } from "@/lib/placeholderdata";
import { footerBottomData } from "@/lib/placeholderdata";

import React from "react";

export default function Dashboard() {
  return (
    <React.Fragment>
      <AppHeader />

      <QuoteOffer />
      {/* -------- */}
      <AppFooter
        footerGridData={footerGridData}
        footerBottomData={footerBottomData}
      />
    </React.Fragment>
  );
}
