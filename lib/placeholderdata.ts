import FooterLogo from '@/components/ui/FooterLogo'
import LinkedInIcon from '@/components/ui/LinkedIn'
import FacebookIcon from '@/components/ui/FacebookIcon'
import TwitterIcon from '@/components/ui/TwitterIcon'
import CheckBadge from '@/components/ui/CheckBadge'
import ChevronRight from '@/components/ui/ChevronRight'
import RouteIcon from '@/components/ui/RouteIcon'
import TruckIcon from '@/components/ui/TruckIcon'


export const appHeaderProps = {
    desktopNav: [
        {
            id:1,
            url:'/',
            text: 'Home'
        },
        {
            id:2,
            url:'/',
            text: 'Transport'
        },
        {
            id:3,
            url:'/',
            text: 'Transport Services',
            icon: 'chevron',
            dropDownMenu: [
                {
                    id:1,
                    url: '/',
                    text: 'Car Transport'
                },
                {
                    id:2,
                    url: '/',
                    text: 'Enclosed Car Transport'
                },
                {
                    id:3,
                    url: '/',
                    text: 'Supercar Transport'
                },
                {
                    id:4,
                    url: '/',
                    text: 'Classic Car Transport'
                },
                {
                    id:5,
                    url: '/',
                    text: 'Boat Transport'
                }
            ]
        },
        {
            id:4,
            url:'/',
            text: 'Car Transport Routes',
            icon: 'chevron',
            dropDownMenu: [
                {
                    id:1,
                    url: '/',
                    text: 'Netherlands to Spain'
                },
                {
                    id:2,
                    url: '/',
                    text: 'Germany to Spain'
                },
                {
                    id:3,
                    url: '/',
                    text: 'Belgium to Spain'
                }
            ]
        }

    ],
    desktopCta: {
        url: '/',
        text: 'Request a Quote'
    },
    mobileDrawer: [
        {
            id:1,
            heading: 'Transport Services',
            icon: 'chevron-right',
            list: [
                {
                    id:1,
                    url: '/',
                    text: 'Enclosed Car Transport'
                },
                {
                    id:2,
                    url: '/',
                    text: 'Car Transport'
                },
                {
                    id:3,
                    url: '/',
                    text: 'Supercar Transport'
                },
                {
                    id:4,
                    url: '/',
                    text: 'Classic Car Transport'
                },
                {
                    id:5,
                    url: '/',
                    text: 'Emergency vehicle transport'
                }
            ]
        },
        {
            id:2,
            heading: 'Routes',
            icon: 'chevron-right',
            list: [
                {
                    id:1,
                    url: '/',
                    text: 'Belgium to Spain'
                },
                {
                    id:2,
                    url: '/',
                    text: 'Germany to Spain'
                },
                {
                    id:3,
                    url: '/',
                    text: 'Netherlands to Spain'
                },
                {
                    id:4,
                    url: '/',
                    text: 'Spain to Germany'
                },
                {
                    id:5,
                    url: '/',
                    text: 'Spain to Netherlands'
                }
            ]
        },
        {
            id:3,
            heading: 'Destinations',
            icon: 'chevron-right',
            list: [
                {
                    id:1,
                    url: '/',
                    text: 'Belgium'
                },
                {
                    id:2,
                    url: '/',
                    text: 'France'
                },
                {
                    id:3,
                    url: '/',
                    text: 'Germany'
                },
                {
                    id:4,
                    url: '/',
                    text: 'Italy'
                },
                {
                    id:5,
                    url: '/',
                    text: 'Monaco'
                }
            ]
        },
        {
            id:4,
            url: '/',
            text: 'Request a Quote'
        }
    ]
}

export const appHeroProps = {
    badgeText: "Trusted by 50,000+ customers",
    badgeType: 'check-badge',
    headingOne: 'Ship your car',
    emphasis: 'anywhere',
    headingTwo: 'in the U.S.',
    description: `Transparent pricing with no hidden fees. Automated updates
            throughout the entire process. Backed by 17,000+ drivers
            and a vetted carrier network.`,
    btnPrimary: {
        label: 'Get an Instant Quote',
        icon: 'arrow-right',
        url: '/'
    },
    btnSecondary: {
        label: 'Call (800) 951-3352',
        icon: 'phone-icon',
        url: '/'
    },
    quoteHeading: 'Get your price in 60 seconds',
    quoteParagraph: 'No obligation. No credit card required.',
    pickupZip: {
        id: 'hqf-origin',
        label: 'Pickup ZIP',
        placeholder: 'e.g. 85281',
        name: 'origin'
    },
    deliveryZip: {
        id: 'hqf-destination',
        label: 'Delivery ZIP',
        placeholder: 'e.g. 60614',
        name: 'destination'
    },
    vehicleDetails: {
        id:'hqf-vehicle',
        label: 'Vehicle (VIN or Year, Make, Model)',
        placeholder: 'VIN or e.g. 2022 Toyota Camry',
        name: 'vehicle'
    },
    submitBtn:{
        label: 'Get My Quote',
        icon: 'arrow-right'
    },
    securityNote: {
        label: 'Your price is locked in, guaranteed. No bait-and-switch.',
        icon: 'lock-icon'
    }
}


export const footerGridData = {
    footerGridOne: {
        logo: (
            FooterLogo
        ),
        description: 'Nationwide vehicle shipping powered by 17,000+ drivers and a vetted carrier network. A Haul OS company.',
        social: [
            {
                id: 1,
                icon: (
                    LinkedInIcon
                )
            },
            {
                id: 2,
                icon: (
                    FacebookIcon
                )
            },
            {
                id: 3,
                icon: (
                    TwitterIcon
                )
            }
        ]
    },
    footerGridCols: [
        {
            id:1,
            heading: 'Services',
            items: [
                {
                    id:1,
                    name: 'Open Transport'
                },
                {
                    id:2,
                    name: 'Enclosed Transport'
                },
                {
                    id:3,
                    name: 'Expedited Shipping'
                },
                {
                    id:4,
                    name: 'Motorcycle Transport'
                },
            ]
        },
        {
            id: 2,
            heading: 'Company',
            items: [
                {
                    id:1,
                    name: 'About Us'
                },
                {
                    id:2,
                    name: 'Contact'
                },
                {
                    id:3,
                    name: 'Careers'
                },
                {
                    id:4,
                    name: 'Blog'
                },
            ]
        },
        {
            id:3,
            heading: 'Support',
            items: [
                {
                    id:1,
                    name: '(800) 951-2284'
                },
                {
                    id:2,
                    name: 'support@haulos.com'
                },
                {
                    id:3,
                    name: 'Track My Order'
                },
                {
                    id:4,
                    name: 'FAQ'
                }
            ]
        }
    ]
}

export const footerBottomData = {
    footerRights:{
        text: '© 2026 HAUL OS. All rights reserved.'
    },
    footerInfo: [
        {
            id:1,
            text: 'Privacy Policy'
        },
        {
            id:2,
            text: 'Terms of Services'
        },
        {
            id:3,
            text: 'Sitemap'
        }
    ]
}

export const heroLayoutCardData = [
    {
        id:1,
        icon:(
            CheckBadge
        ),
        title: 'Ship your car safe & secure',
        description: `Get a quote through our state-of-the-art car shipping cost calculator, and we'll connect you with an experienced, reputable driver.`,
        link: 'Get Quote',
        linkIcon: (
            ChevronRight
        )
    },
    {
        id:2,
        icon:(
            RouteIcon
        ),
        title: 'No-hassle car transport',
        description: `We coordinate your door-to-door car shipping order from start to finish and manage your car transportation with care and respect.`,
        link: 'Door-to-door Service',
        linkIcon: (
            ChevronRight
        )
    },
    {
        id:3,
        icon:(
            TruckIcon
        ),
        title: 'More than an auto transport company',
        description: `We offer resources for local car sellers, car dealerships, and clients looking to connect with moving companies.`,
        link: ' Moving calculator',
        linkIcon: (
            ChevronRight
        )
    }
]

