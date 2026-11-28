import { useEffect, useState } from "react"
import { QuoteRecordData } from '@/lib/definitions'
import {quoteRecordData} from '@/lib/placeholderdata'

const API_URL = process.env.NEXT_PUBLIC_QUOTE_URL



type quoteRecord = {
    data: QuoteRecordData | null,
    loading: boolean,
    errors: {
        message: string
    }
}

export const useFetchRecord = (recordId: string | null) => {

    const [quoteRecord, setQuoteRecord] = useState<quoteRecord>({
        data: quoteRecordData,
        loading: false,
        errors: { message: '' }
    })

    useEffect(() => {

        if (!recordId) {
            return;
        }

        const fetchRecord = async(recordId: string) => {
            // JA4oGR5IDgE
            // enable loading spinner
            setQuoteRecord((state) => ({...state, loading: true}))

            try {
                const response = await fetch(`${API_URL}/${recordId}`);

                if (!response.ok) {
                    throw new Error(`Error fetching record ${recordId} from DB`)
                }

                const quote_record = await response.json();  
                
                // update quoteRecord state
                setQuoteRecord((state) => (
                    {
                        data: {...state.data, ...quote_record, vehicleDetails: {...quote_record.vehicleDetails, condition: state.data?.vehicleDetails.condition} },
                        loading: false,
                        errors: { message: '' }
                    }
                ))
                // setQuoteRecord({
                //     data: {...quoteRecord.data},
                //     loading: false,
                //     errors: { message: '' }
                // })

            } catch (error) {
                setQuoteRecord({
                    data: null,
                    loading: false,
                    errors: { message: 'Failed to fetch quote record'}
                })
            } 

            

            

        }

        fetchRecord(recordId)

        

    

    },[])

    return {
        quoteRecord,
        setQuoteRecord
    }

}