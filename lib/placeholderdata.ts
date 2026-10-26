
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