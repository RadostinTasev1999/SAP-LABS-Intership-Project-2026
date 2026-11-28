import { useEffect, useState } from "react";

// http://localhost:3000/vehicleMake
// https://vpic.nhtsa.dot.gov/api
const BASE_URL = 'https://vpic.nhtsa.dot.gov/api'

type VehicleMake = {
  MakeId: number,
  MakeName: string,
  VehicleTypeId: number,
  VehicleTypeName: string
}

export const useFetchMakes = () => {

  const [makes, setMakes] = useState({
    data: [],
    loading: true,
    error: { message: "" },
  });

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const url = process.env.NEXT_PUBLIC_BASE_URL

        if (!url) {
          throw new Error('Could not retrieve BASE_UR')
        }

        const query_params = `/vehicles/GetMakesForVehicleType/car?format=json`
        const API_URL = `${url}${query_params}`

        const response = await fetch(API_URL);
        const result = await response.json();

        const vehicleMakes = result.Results.map((make: VehicleMake) => make.MakeName)
        
        setMakes({
          data: vehicleMakes,
          loading: false,
          error: { message: "" },
        });
      } catch (error) {
        setMakes({
          data: [],
          loading: false,
          error: { message: "Failed to fetch data" },
        });
      }
    };

    fetchMakes();
  }, []);

  return makes;
};

/*
    const fetchMakes = async() => {
      
      const response = await fetch('http://localhost:3000/vehicleMake')
      const result = await response.json();

      const vehicleMakes = result[0].makes

      console.log('VehicleMakes are:', vehicleMakes)

      setMake(vehicleMakes);

    }
*/
