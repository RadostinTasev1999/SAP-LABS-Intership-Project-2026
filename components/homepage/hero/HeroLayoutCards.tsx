import HeroCard from "./HeroCard"
import CardDivider from '@/components/ui/CardDivider'

import {HeroLayoutCardType} from '@/lib/definitions'

export default function HeroLayoutCards({
    heroLayoutCardData
}: HeroLayoutCardType){

    return(
        <div className='mx-auto flex flex-col sm:flex-row w-full max-w-7xl items-center justify-between px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 rounded-b-2xl  bg-blue-50/90'>
            {
                heroLayoutCardData.map((el,index) => {

                    const Icon = <el.icon />
                    const LinkIcon = <el.linkIcon />

                   return(
                    <>
                        <HeroCard 
                            key={el.id}
                            Icon={Icon}
                            title={el.title}
                            description={el.description}
                            link={el.link}
                            LinkIcon={LinkIcon}
                        />
                        {
                            index < 2 && (
                                <CardDivider />
                            ) 
                        }
                    </>
                   ) 
                }
                    
                )
            }
        </div>
    )
}