import AboutValuesCard from './AboutValuesCard'

import { AboutValuesGridProp } from '@/lib/definitions'

export default function AboutValuesGrid({
    valueCards
}: AboutValuesGridProp){

    return(
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
           
            {
                valueCards.map((el) => {

                    const Icon = <el.icon />

                    return <AboutValuesCard
                                key={el.id}
                                Icon={Icon}
                                heading={el.heading}
                                text={el.text}
                        
                            />
                }
                    
                )
            }

         </div>
    )
}