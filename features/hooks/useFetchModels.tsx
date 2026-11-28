import { useEffect, useState } from "react";

// "https://vpic.nhtsa.dot.gov/api
type ResultObj = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export const useFetchModels = (
  selectedYear: number | null,
  selectedMake: string | null,
) => {
  const [models, setModels] = useState({
    data: [],
    loading: true,
    errors: { message: "" },
  });



  useEffect(() => {
    if (!selectedYear || !selectedMake) {
      
      return;
    }

    // Fetch API

    const fetchModels = async (
      selectedYear: number,
      selectedMake: string,
    ) => {
      // construct API URL
      const url = process.env.NEXT_PUBLIC_BASE_URL

      if (!url) {
        throw new Error('Could not retrieve BASE_URL environment variable')
      }

      const query = `/vehicles/GetModelsForMakeYear/make/${selectedMake}/modelyear/${selectedYear}?format=json`;
      const api_url = `${url}${query}`;

      try {
        const response = await fetch(api_url);
        const result = await response.json();

        const model_names = result.Results.map(
          (el: ResultObj) => el.Model_Name,
        );

        setModels({
          data: model_names,
          loading: false,
          errors: { message: "" },
        });
      } catch (error) {
        setModels({
          data: [],
          loading: false,
          errors: { message: "Error fetching car models" },
        });
      }
    };

    fetchModels(selectedYear, selectedMake);

  }, [selectedYear, selectedMake]);

  return models;
};
