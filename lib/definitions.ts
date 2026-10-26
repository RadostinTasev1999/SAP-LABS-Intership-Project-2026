
export type SvgProps = {
    className?: string
}

export type AppHeaderProps = {
    onMobileOpen?: () => void,
    navProps?: DesktopNav
}

export type NavListItemProps = {
    url: string,
    text: string,
    icon?: string,
    dropDownMenu?: DropDownMenu
}




export type MobileDrawerProps = {
    onMobileClose: () => void
}

export type NavWrapperProps = {
    appHeaderProps: AppHeaderData
}

type AppHeaderData = {
    desktopNav: DesktopNav
}

type DesktopNav = {
    id:number,
    url: string,
    text: string,
    icon?: string,
    dropDownMenu: DropDownMenu

}[]

type DropDownMenu = {
    id: number,
    url: string,
    text: string
}[]