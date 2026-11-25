import { useState, useEffect } from "react"

// http://localhost:3000/vehicleYears
export const useFetchYears = (url: string) => {

    const [years, setYears] = useState({
        data: [],
        loading: true,
        error: { message: '' }
    })

    useEffect(() => {

        const fetchYears = async(url: string) => {

            try {
                const response = await fetch(url);
                const result = await response.json();

                // console.log('Years are:', result[0].years.reverse())
                // const data = result[0].years.reverse();
                
                const reversedYears = result[0].years.reverse();
                console.log('Reversed years are:', reversedYears);

                setYears({
                    data: reversedYears,
                    loading: false,
                    error: { message: '' }
                })

                
            } catch (error) {
                setYears({
                    data: [],
                    loading: false,
                    error: { message: 'Error fetching vehicle years' }
                })
            }
        }

        fetchYears(url)
    }, [])

    return years

}