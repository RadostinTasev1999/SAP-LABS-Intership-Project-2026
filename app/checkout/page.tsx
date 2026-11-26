import AppHeader from "@/components/layout/header/Header";
import AppFooter from "@/components/layout/footer/Footer";
import CheckoutPage from "@/components/layout/checkout/CheckoutPage";

import { footerGridData } from "@/lib/placeholderdata";
import { footerBottomData } from "@/lib/placeholderdata";

export default function BookingPage() {
  return (
    <>
      <AppHeader />

      {/* Checkout Page */}
      <CheckoutPage />

      <AppFooter
        footerGridData={footerGridData}
        footerBottomData={footerBottomData}
      />
    </>
  );
}
