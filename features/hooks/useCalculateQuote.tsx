import { QuoteContext } from "@/components/providers/QuoteProvider";
import { useEffect, useState } from "react";
import { useContext } from "react";

export const useCalculateQuote = (URL: string) => {
  const { quoteDataState } = useContext(QuoteContext);

  const origin = quoteDataState.destinationForm.pickupLocation;
  const destination = quoteDataState.destinationForm.deliveryLocation;
  const [price, setPrice] = useState(null);

  useEffect(() => {
    // console.log(`Quote Data state is: ${quoteDataState.destinationForm.pickupLocation}`)
  }, []);

  return {
    origin,
    destination,
    price,
  };
};
