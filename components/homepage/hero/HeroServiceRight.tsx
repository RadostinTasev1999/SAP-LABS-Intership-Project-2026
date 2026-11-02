import { HeroServiceRightProps } from '@/lib/definitions'

import HeroServiceDetail from '@/components/homepage/hero/HeroServiceDetail'

export default function HeroServiceRight({
    Divider,
    PlusIcon,
    detailsItems
}: HeroServiceRightProps){

    return(
        <div className="md:col-span-1 lg:col-span-6">

                    {/* Factors */}
                    <div
                        className="w-full flex flex-col gap-6"
                    >      
                        {Divider}
                        {
                            detailsItems.map((el) => {
                                const Icon = <el.icon className='text-blue-600' width='24' />

                               return  <>
                                        <HeroServiceDetail 
                                            key={el.id}
                                            Icon={Icon}
                                            heading={el.heading}
                                            description={el.description}
                                            PlusIcon={PlusIcon}
                                            />
                                        {Divider}
                                        </>
                            })
                        }
                    </div>


                </div>
    )
}