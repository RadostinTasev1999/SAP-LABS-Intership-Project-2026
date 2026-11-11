import Link from "next/link"
import Image from "next/image"

export default function MobileLogo(){

    return(
        <div className="block lg:hidden">
            <Link href="#" aria-label="Site logo">
                <Image
                    src='/AutoMove Car Transport Logo.png'
                    alt="Company logo"
                    width={300}
                    height={300}
                    className="max-w-[150px] h-auto object-contain mx-auto"
                />
            </Link>
        </div>
    )
}