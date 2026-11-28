'use client'
import { useState, useEffect } from "react";

// http://localhost:3000/vehicleYears
export const useFetchYears = () => {

  const [years, setYears] = useState({
    data: [],
    loading: true,
    error: { message: "" },
  });

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_YEAR_URL;

        if (!apiUrl) {
          throw new Error('Missing YEAR_URL environment variable')
        }

        const response = await fetch(apiUrl);
        const result = await response.json();

        // console.log(`Years are: ${result[0].years.reverse()}`)

        const vehicleYears = result[0].years.reverse()

        setYears({
          data: vehicleYears,
          loading: false,
          error: { message: "" },
        });
      } catch (error) {
        setYears({
          data: [],
          loading: false,
          error: { message: "Error fetching vehicle years" },
        });
      }
    };

    fetchYears();
  }, []);

  return years;
};
