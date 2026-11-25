import { useEffect, useState } from "react"

// http://localhost:3000/vehicleMake
export const useFetchMakes = (url: string) => {

    const [makes, setMakes] = useState({
        data: [],
        loading: true,
        error: { message: ''}
    });

    useEffect(() => {

        const fetchMakes = async (url: string) => {

            try {
                const response = await fetch(url)
                const result = await response.json();

                console.log('Result is:', result[0].makes)
                const data = result[0].makes;

                setMakes({
                    data: data,
                    loading: false,
                    error: { message: '' }
                })

            } catch (error) {

                setMakes({
                    data: [],
                    loading: false,
                    error: { message: 'Failed to fetch data'}
                })
            }




        }

        fetchMakes(url)
    },[])

    return makes

}

/*
    const fetchMakes = async() => {
      
      const response = await fetch('http://localhost:3000/vehicleMake')
      const result = await response.json();

      const vehicleMakes = result[0].makes

      console.log('VehicleMakes are:', vehicleMakes)

      setMake(vehicleMakes);

    }
*/