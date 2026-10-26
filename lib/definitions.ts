
export type SvgProps = {
    className?: string
}

export type AppHeaderProps = {
    onMobileOpen?: () => void,
    navProps?: DesktopNav,
    desktopCta?: DesktopCta
}

export type NavListItemProps = {
    url: string,
    text: string,
    icon?: string,
    dropDownMenu?: DropDownMenu
}

export type DesktopCtaProps = {
    url?: string,
    text?: string
}


export type MobileDrawerProps = {
    onMobileClose: () => void,
    mobileDrawer: MobileDrawer
}

export type NavWrapperProps = {
    appHeaderProps: AppHeaderData,
}

type DesktopCta = {
    url: string,
    text: string
}

type AppHeaderData = {
    desktopNav: DesktopNav,
    desktopCta: DesktopCta,
    mobileDrawer: MobileDrawer
}

export type MobileNavProps = {
    mobileDrawer: MobileDrawer
}

type MobileDrawer = {
    id: number,
    heading: string,
    icon: string,
    list: DrawerList,
    url?: string,
    text?: string
}[]

type DrawerList = {
    id:number,
    url: string,
    text: string
}[]

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

export type MobileDrawerBtnProp = {
    onMobileClose: () => void
}

export type MobileDrawerListData = {
    heading?: string,
    icon?: string,
    list?: MobileListItems,
    url?: string,
    text?: string
}

type MobileListItems = {
    id: number,
    url: string,
    text: string
}[]

export type MobileDrawerItemProps = {
    url: string,
    text: string
}

export type MobileDetailItemProps = {
    heading?: string,
    icon?: string,
    list?: MobileListItems
}