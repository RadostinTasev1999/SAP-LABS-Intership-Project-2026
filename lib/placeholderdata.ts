import FooterLogo from "@/components/shared/logo/FooterLogo";
import LinkedInIcon from "@/components/shared/icons/LinkedIn";
import FacebookIcon from "@/components/shared/icons/FacebookIcon";
import TwitterIcon from "@/components/shared/icons/TwitterIcon";
import CheckBadge from "@/components/shared/icons/CheckBadge";
import ChevronRight from "@/components/shared/icons/ChevronRight";
import RouteIcon from "@/components/shared/icons/RouteIcon";
import TruckIcon from "@/components/shared/icons/TruckIcon";
import MapPinCheck from "@/components/shared/icons/MapPinCheck";
import ClockIcon from "@/components/shared/icons/ClockIcon";
import MessageSquareIcon from "@/components/shared/icons/MessageSquare";
import DetailsDivider from "@/components/shared/divider/DetailsDivider";
import SportCarIcon from "@/components/shared/icons/SportCarIcon";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import SteeringWheelIcon from "@/components/shared/icons/SteeringWheelIcon";
// import TrailerIcon from '@/components/ui/TrailerIcon'
import MapMarkerDistanceIcon from "@/components/shared/icons/MapMarkerDistance";

export const appHeaderProps = {
  desktopNav: [
    {
      id: 1,
      url: "/",
      text: "How Car Shipping Works",
      icon: "chevron",
      dropDownSingle: [
        {
          id: 1,
          url: "/",
          text: "Car Shipping Costs",
        },
        {
          id: 2,
          url: "/",
          text: "Car Shipping Preparation",
        },
      ],
    },
    {
      id: 2,
      url: "/",
      text: "Car Shipping Services",
      icon: "chevron",
      dropDownDouble: [
        {
          id: 1,
          heading: "What we offer",
          menuItems: [
            {
              id: 1,
              text: "Door to Door Auto Transport",
            },
            {
              id: 2,
              text: "Open Carrier Car Shipping",
            },
            {
              id: 3,
              text: "Enclosed Car Shipping",
            },
            {
              id: 4,
              text: "Expedite Car Shipping",
            },
            {
              id: 5,
              text: "Truck & Oversized transport",
            },
          ],
        },
        {
          id: 2,
          heading: "Who we serve",
          menuItems: [
            {
              id: 1,
              text: "Classic & Exotic Car Owners",
            },
            {
              id: 2,
              text: "College Students",
            },
            {
              id: 3,
              text: "Military",
            },
            {
              id: 4,
              text: "Motorcycle Enthusiasts",
            },
            {
              id: 5,
              text: "Moving & Relocation",
            },
            {
              id: 6,
              text: "Online Car Buyers",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      url: "/",
      text: "Why Choose Us",
      icon: "chevron",
      dropDownSingle: [
        {
          id: 1,
          url: "/",
          text: "Vision and Mission",
        },
      ],
    },
  ],
  desktopCta: {
    url: "/",
    text: "Request a Quote",
  },
  mobileDrawer: [
    {
      id: 1,
      heading: "Transport Services",
      icon: "chevron-right",
      list: [
        {
          id: 1,
          url: "/",
          text: "Enclosed Car Transport",
        },
        {
          id: 2,
          url: "/",
          text: "Car Transport",
        },
        {
          id: 3,
          url: "/",
          text: "Supercar Transport",
        },
        {
          id: 4,
          url: "/",
          text: "Classic Car Transport",
        },
        {
          id: 5,
          url: "/",
          text: "Emergency vehicle transport",
        },
      ],
    },
    {
      id: 2,
      heading: "Routes",
      icon: "chevron-right",
      list: [
        {
          id: 1,
          url: "/",
          text: "Belgium to Spain",
        },
        {
          id: 2,
          url: "/",
          text: "Germany to Spain",
        },
        {
          id: 3,
          url: "/",
          text: "Netherlands to Spain",
        },
        {
          id: 4,
          url: "/",
          text: "Spain to Germany",
        },
        {
          id: 5,
          url: "/",
          text: "Spain to Netherlands",
        },
      ],
    },
    {
      id: 3,
      heading: "Destinations",
      icon: "chevron-right",
      list: [
        {
          id: 1,
          url: "/",
          text: "Belgium",
        },
        {
          id: 2,
          url: "/",
          text: "France",
        },
        {
          id: 3,
          url: "/",
          text: "Germany",
        },
        {
          id: 4,
          url: "/",
          text: "Italy",
        },
        {
          id: 5,
          url: "/",
          text: "Monaco",
        },
      ],
    },
    {
      id: 4,
      url: "/",
      text: "Request a Quote",
    },
  ],
};

export const appHeroProps = {
  badgeText: "Trusted by 50,000+ customers",
  badgeType: "check-badge",
  headingOne: "Ship your car",
  emphasis: "anywhere",
  headingTwo: "in the U.S.",
  description: `Transparent pricing with no hidden fees. Automated updates
            throughout the entire process. Backed by 17,000+ drivers
            and a vetted carrier network.`,
  btnPrimary: {
    label: "Get an Instant Quote",
    icon: "arrow-right",
    url: "/",
  },
  btnSecondary: {
    label: "Call (800) 951-3352",
    icon: "phone-icon",
    url: "/",
  },
  quoteHeading: "Get your price in 60 seconds",
  quoteParagraph: "No obligation. No credit card required.",
  pickupZip: {
    id: "pickup-origin",
    label: "Pickup Location",
    placeholder: "ZIP or City",
    name: "origin",
  },
  deliveryZip: {
    id: "pickup-destination",
    label: "Delivery Location",
    placeholder: "ZIP or City",
    name: "delivery",
  },
  transportType: {
    radioOne: "Open",
    tipOpen:
      "Open trailers are the most cost effective and popular method to transport vehicles. Most new vehicles are transported to car dealerships on open trailers.",
    radioTwo: "Enclosed",
    tipEnclosed:
      "Enclosed trailers protect vehicles from weather, dirt, and rock chips during transport. They are ideal for high-value vehicles.",
  },
  submitBtn: {
    label: "Start my Quote",
    icon: "arrow-right",
  },
  securityNote: {
    label: "Your price is locked in, guaranteed. No bait-and-switch.",
    icon: "lock-icon",
  },
};

export const footerGridData = {
  footerGridOne: {
    logo: FooterLogo,
    description:
      "Nationwide vehicle shipping powered by 17,000+ drivers and a vetted carrier network. A Haul OS company.",
    social: [
      {
        id: 1,
        icon: LinkedInIcon,
      },
      {
        id: 2,
        icon: FacebookIcon,
      },
      {
        id: 3,
        icon: TwitterIcon,
      },
    ],
  },
  footerGridCols: [
    {
      id: 1,
      heading: "Services",
      items: [
        {
          id: 1,
          name: "Open Transport",
        },
        {
          id: 2,
          name: "Enclosed Transport",
        },
        {
          id: 3,
          name: "Expedited Shipping",
        },
        {
          id: 4,
          name: "Motorcycle Transport",
        },
      ],
    },
    {
      id: 2,
      heading: "Company",
      items: [
        {
          id: 1,
          name: "About Us",
        },
        {
          id: 2,
          name: "Contact",
        },
        {
          id: 3,
          name: "Careers",
        },
        {
          id: 4,
          name: "Blog",
        },
      ],
    },
    {
      id: 3,
      heading: "Support",
      items: [
        {
          id: 1,
          name: "(800) 951-2284",
        },
        {
          id: 2,
          name: "support@haulos.com",
        },
        {
          id: 3,
          name: "Track My Order",
        },
        {
          id: 4,
          name: "FAQ",
        },
      ],
    },
  ],
};

export const footerBottomData = {
  footerRights: {
    text: "© 2026 HAUL OS. All rights reserved.",
  },
  footerInfo: [
    {
      id: 1,
      text: "Privacy Policy",
    },
    {
      id: 2,
      text: "Terms of Services",
    },
    {
      id: 3,
      text: "Sitemap",
    },
  ],
};

export const heroLayoutCardData = [
  {
    id: 1,
    icon: CheckBadge,
    title: "Ship your car safe & secure",
    description: `Get a quote through our state-of-the-art car shipping cost calculator, and we'll connect you with an experienced, reputable driver.`,
    link: "Get Quote",
    linkIcon: ChevronRight,
  },
  {
    id: 2,
    icon: RouteIcon,
    title: "No-hassle car transport",
    description: `We coordinate your door-to-door car shipping order from start to finish and manage your car transportation with care and respect.`,
    link: "Door-to-door Service",
    linkIcon: ChevronRight,
  },
  {
    id: 3,
    icon: TruckIcon,
    title: "More than an auto transport company",
    description: `We offer resources for local car sellers, car dealerships, and clients looking to connect with moving companies.`,
    link: " Moving calculator",
    linkIcon: ChevronRight,
  },
];

export const heroTimelineData = {
  timelineHeading: {
    badge: "Process",
    heading: "Our Process",
    text: "From strategy to execution, our process ensures we create custom marketing plans that drive results. We understand your goals, tailor our approach, and execute with precision to deliver measurable success.",
  },
  timelineSteps: [
    {
      id: 1,
      count: "Step 1",
      heading: "Get an instant quote and book your order",
      text: "Use our free instant quote calculator to get an estimate or call a Montway advisor at (844) 748-4550. When you’re ready to book, just follow the directions in your email or give us a  call. At booking, a representative will review your shipment information and confirm your order. No payment is required until your shipment is scheduled for pickup. ",
    },
    {
      id: 2,
      count: "Step 2",
      heading: "We pick up your vehicle",
      text: "Schedule your pickup date, time and an easy-to-access pickup location with your trucker. You can even release your car while you’re at work.",
    },
    {
      id: 3,
      count: "Step 3",
      heading: "Receive your vehicle",
      text: "Reuniting you and your vehicle is an exciting moment—and one we look forward to at Montway! Your trucker will call you when your vehicle is almost home so you can greet them both right at your own driveway (or a nearby agreed-upon location).",
    },
  ],
};

export const heroAboutData = {
  sectionHeader: {
    heading: "Why choose HAUL OS",
    text: "These principles guide everything we do, from how we develop our products to how we interact with our customers and each other.",
  },
  valueCards: [
    {
      id: 1,
      icon: CheckBadge,
      heading: "Fully Insured",
      text: "Every carrier on our platform is required to carry cargo insurance on your vehicle, and we verify that coverage before they are assigned to your order.",
    },
    {
      id: 2,
      icon: MapPinCheck,
      heading: "Automated Updates",
      text: "Get automated SMS and email updates throughout the entire process, at every milestone from pickup to delivery. No guessing.",
    },
    {
      id: 3,
      icon: ClockIcon,
      heading: "Flexible Deposit",
      text: "Secure your booking with a small deposit, not hundreds upfront like competitors. Balance is not due until after delivery.",
    },
    {
      id: 4,
      icon: TruckIcon,
      heading: "17,000+ Drivers",
      text: "Every carrier on our platform is verified, insured, and rated. We match you with the best driver for your specific route.",
    },
    {
      id: 5,
      icon: MessageSquareIcon,
      heading: "Concierge Support",
      text: `Real humans, available by phone, text, and email. Your dedicated shipping advisor handles everything so you don't have to.`,
    },
  ],
};

export const heroServiceIntro = {
  heading: "How much do car transport companies charge?",
  description: [
    {
      id: 1,
      text: `Car shipping costs are based on several factors, including current
                market trends, carrier availability, and fuel prices. Your total cost
                will also depend on the type of car you want to move, where it needs
                to go, its size, condition (or if it has any modifications), total
                transport distance, transport type (open or enclosed trailer
                shipment), and finally, the time of year when you book.`,
    },
    {
      id: 2,
      text: "Get a quote with our car shipping calculator, use our Live Chat or call (844) 748-4550",
    },
  ],
  url: "/",
  link: "Shipping cost information",
  icon: ChevronRight,
};

export const heroServiceDetails = {
  divider: DetailsDivider,
  plusIcon: PlusIcon,
  detailsItems: [
    {
      id: 1,
      icon: SportCarIcon,
      heading: "Size and weight of vehicle",
      description:
        "Longer, taller or heavier-than-average vehicles require special accommodations by car transport companies and, as a result, the price may vary.",
    },
    {
      id: 2,
      icon: SteeringWheelIcon,
      heading: "The car condition",
      description:
        "Shipping inoperable vehicles costs more because it requires extra tools and labor for car shipping companies to accommodate the cargo. But if your car rolls, steers, and brakes, we can ship it.",
    },
    {
      id: 3,
      icon: MapMarkerDistanceIcon,
      heading: "The shipping distance",
      description: `You can track your order by logging into your account and visiting the
                                Orders section. You will receive tracking information via email once your
                                order ships. For real-time updates, you can also use the tracking number
                                provided in your shipping confirmation email.`,
    },
  ],
};
