import Image from "next/image"

export default function SideBarFooter(){

    return(
        <footer className="mt-auto border-t p-2">
            <button className="flex w-full items-center gap-2 rounded-md p-2 text-left hover:bg-gray-100">
                <Image
                    src="/EuroMove European Car Transport Logo.png"
                    alt="User avatar"
                    className="size-20 rounded-lg"
                    width={400}
                    height={400}
                />
                <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">shadcn</span>
                    <span className="block truncate text-xs text-gray-500">m@example.com</span>
                </span>
            </button>

        </footer>
    )
}