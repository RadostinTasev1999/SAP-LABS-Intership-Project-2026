import Link from "next/link"

import FooterGridOne from "./FooterGridOne"
import FooterGridCol from './FooterGridCol'

import {FooterGridData} from '@/lib/definitions'

export default function FooterGrid({
        footerGridOne,
        footerGridCols
}: FooterGridData){

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">

            {/* Brand & Social column (Span 2 on large screens) */}
            <FooterGridOne 
                Logo={<footerGridOne.logo />}
                description={footerGridOne.description}
                social={footerGridOne.social}
                />

            {/* Services Column */}
            {
                footerGridCols.map((el) => (
                    <FooterGridCol
                        key={el.id}
                        heading={el.heading}
                        items={el.items}
                        />
                ))
            }
        </div>
    )
}