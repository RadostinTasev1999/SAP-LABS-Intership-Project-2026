import { JSX } from "react/jsx-runtime"

export type SvgProps = {
    className?: string
}

export type IconProps = {
    className?: string,
    width?: string
}

export type AppHeaderProps = {
    onMobileOpen?: () => void,
    navProps?: DesktopNav,
    desktopCta?: DesktopCta
}

export type NavListItemProps = {
    id: number,
    url: string,
    text: string,
    icon?: string,
    dropDownSingle?: DropDownMenu,
    dropDownDouble?: DropDownDoubleMenu
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
    dropDownSingle?: DropDownMenu,
    dropDownDouble?: DropDownDoubleMenu
}[]

type DropDownMenu = {
    id: number,
    url: string,
    text: string
}[]

type DropDownDoubleMenu = {
    id:number,
    heading: string,
    menuItems: MenuItems
}[]

type MenuItems = {
    id: number,
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

export type AppHeroProps = {
    appHeroProps: AppHeroData,
    heroLayoutCardData: HeroLayoutCardData
}

export type HeroLayoutCardType = {
    heroLayoutCardData: HeroLayoutCardData
}

type HeroLayoutCardData = {
    id: number,
    icon: React.FC,
    title: string,
    description: string,
    link: string,
    linkIcon: React.FC
}[]

export type HeroCardTypes = {
    Icon: JSX.Element,
    title: string,
    description: string,
    link: string,
    LinkIcon: JSX.Element
}

type AppHeroData = {
    badgeText: string,
    badgeType: string,
    headingOne: string,
    emphasis: string,
    headingTwo:string,
    description: string,
    btnPrimary: BtnProps,
    btnSecondary: BtnProps,
    quoteHeading: string,
    quoteParagraph: string,
    pickupZip: InputProps,
    deliveryZip: InputProps,
    vehicleDetails: InputProps,
    submitBtn: LabelProps,
    securityNote: LabelProps
}

type LabelProps = {
    label: string,
    icon: string
}

type InputProps = {
    id: string,
    label: string,
    placeholder: string,
    name: string
}

type BtnProps = {
    label: string,
    icon: string,
    url: string
}

export type HeroBadgeProps = {
    badgeText: string,
    badgeType: string
}

export type HeroHeadingProps = {
    headingPrimary: string,
    emphasis: string,
    headingSecondary:string
}

export type HeroDescProp = {
    description: string
}

export type HeroCtaProps = {
    btnPrimary: BtnData,
    btnSecondary: BtnData
}

type BtnData = {
    label: string,  
    icon: string,
    url: string
}

export type HeroQuoteProp = {
    quoteHeading: string
}

export type HeroQuoteParagraphProp = {
    quoteParagraph: string
}

export type HeroQuoteFormProps = {
    pickupZip:InputProps,
    deliveryZip:InputProps,
    vehicleDetails:InputProps,
    submitBtn: LabelProps
}

export type HeroSecNoteProp = {
    securityNote: LabelProps
}

export type AppFooterProps = {
    footerGridData: FooterGridData,
    footerBottomData: FooterBottomData
}

export type FooterBottomData = {
    footerRights: FooterRightsProp,
    footerInfo: FooterInfo
}

export type FooterInfoProp = {
    footerInfo: FooterInfo
}

type FooterInfo = {
    id: number,
    text: string
}[]

export type FooterRightsProp = {
    text: string
}

export type FooterGridData = {
    footerGridOne: FooterGridOne
    footerGridCols: FooterGridCols
}

type FooterGridOne = {
    logo: React.FC,
    description: string,
    social: FooterGridSocial
}

export type FooterGridOneProps = {
    Logo: JSX.Element,
    description: string,
    social: FooterGridSocial
}

type FooterGridSocial = {
    id: number,
    icon: React.FC
}[]

export type FooterGridColProps = {
    heading: string,
    items: FooterGridItems
}

type FooterGridCols = {
    id: number,
    heading: string,
    items: FooterGridItems
}[]

type FooterGridItems = {
    id:number,
    name: string
}[]

export type FooterColItemProp = {
    name: string
}

export type FooterRightsData = {
    footerRights: string
}

export type HeroLayoutTopProps = {
    badgeText: string,
    badgeType: string,
    headingPrimary: string,
    emphasis: string,
    headingSecondary: string,
    description: string,
    btnPrimary: BtnTypes,
    btnSecondary: BtnTypes,
    quoteHeading: string,
    quoteParagraph: string,
    pickupZip: InputTypes,
    deliveryZip: InputTypes,
    vehicleDetails: InputTypes,
    submitBtn: BottomFormTypes,
    securityNote: BottomFormTypes
}

type BtnTypes = {
    label: string,
    icon: string,
    url: string
}

type InputTypes = {
    id: string,
    label: string,
    placeholder: string,
    name: string
}

type BottomFormTypes = {
    label: string,
    icon: string
}

export type HeroTimelineProps = {
    timelineHeading: TimelineHeading,
    timelineSteps: TimelineSteps
}

export type TimelineHeading = {
    badge: string,
    heading: string,
    text: string
}

export type HeroTimelineStepsProp = {
    timelineSteps: TimelineSteps
}

type TimelineSteps = {
    id: number,
    count: string,
    heading: string,
    text: string
}[]

export type HeroTimelineItemProps = {
    count: string,
    heading: string,
    text: string
}

export type HeroTimelineCountProp = {
    count: string
}

export type HeroTimelineContentProps = {
    heading: string,
    text: string
}

export type HeroAboutProps = {
    heroAboutData: HeroAboutData
}

type HeroAboutData = {
    sectionHeader: SectionHeader,
    valueCards: ValueCards
}

type SectionHeader = {
    heading: string,
    text: string
}

type ValueCards = {
    id: number,
    icon: React.FC,
    heading: string,
    text: string
}[]

export type AboutSectionHeaderProp = {
    sectionHeader: SectionHeader
}

export type AboutValuesGridProp = {
    valueCards: ValueCards
}

export type AboutValuesCardProps = {
    Icon: JSX.Element,
    heading: string,
    text: string
}

export type HeroServiceInfoProps = {
    heroServiceIntro: HeroServiceIntro
    heroServiceDetails: HeroServiceDetails
}

type HeroServiceIntro = {
    heading: string,
    description: Description,
    url: string,
    link: string,
    icon: React.FC<SvgProps>
}

type Description = {
    id: number,
    text: string
}[]

export type HeroServiceDescriptionProp = {
    description: Description
}

type HeroServiceDetails = {
    divider: React.FC,
    plusIcon: React.FC,
    detailsItems: DetailsItems
}

type DetailsItems = {
    id: number,
    icon: React.FC<IconProps>,
    heading: string,
    description: string
}[]

export type HeroServiceLeftProps = {
    heading: string,
    description: Description,
    url: string,
    link: string,
    Icon: JSX.Element
}

export type HeroServiceHeadingProp = {
    heading: string
}

export type HeroServiceBtnProps = {
    url: string,
    link: string,
    Icon: JSX.Element
}

export type HeroServiceRightProps = {
    Divider: JSX.Element,
    PlusIcon: JSX.Element,
    detailsItems: DetailsItems
}

export type HeroServiceDetailProps = {
    Icon: JSX.Element,
    heading: string,
    description: string,
    PlusIcon: JSX.Element
}

export type DetailsItemsHeadingProp = {
    heading: string
}

export type DetailsItemHeadingProps = {
    Icon: JSX.Element,
    heading: string
}

export type DetailsDescriptionProp = {
    description: string
}

export type DropDownContainerProps = {
    dropDownHeadingOne?: string,
    dropDownHeadingTwo?: string,
    dropDownMenu: DropDownMenu
}

export type DropDownSingleProp = {
    dropDownSingle: DropDownMenu
}

export type DropDownSingleColProps = {
    url: string,
    text: string
}

export type DropDownDoubleProp = {
    dropDownDouble: DropDownDoubleMenu
}

export type DropDownDoubleColProps = {
    heading: string,
    menuItems: MenuItems,
    id: number
}

export type DropDownDoubleItemProp = {
    text: string
}
