import { useEffect, useState } from "react";

// "https://vpic.nhtsa.dot.gov/api
type ResultObj = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};

export const useFetchModels = (
  base_url: string,
  selectedYear: number | null,
  selectedMake: string | null,
) => {
  const [models, setModels] = useState({
    data: [],
    loading: true,
    errors: { message: "" },
  });

  /*
        {
        data: [],
        loading: true,
        errors: { message: '' }
    }
    */

  useEffect(() => {
    if (!selectedYear || !selectedMake) {
      console.log(
        `Selected year is: ${selectedYear}, Selected make is: ${selectedMake}`,
      );
      return;
    }

    // Fetch API
    console.log(
      `After if condition values: ${selectedYear}, Selected make is: ${selectedMake}`,
    );

    const fetchModels = async (
      base_url: string,
      selectedYear: number,
      selectedMake: string,
    ) => {
      // construct API URL
      const query = `/vehicles/GetModelsForMakeYear/make/${selectedMake}/modelyear/${selectedYear}?format=json`;
      const api_url = `${base_url}${query}`;

      try {
        const response = await fetch(api_url);
        const result = await response.json();

        // console.log('Result in fetchModels function is:', result.Results)
        console.log(result);
        const model_names = result.Results.map(
          (el: ResultObj) => el.Model_Name,
        );

        console.log("Model names are:", model_names);

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

    fetchModels(base_url, selectedYear, selectedMake);
  }, [selectedYear, selectedMake]);

  return models;
};
