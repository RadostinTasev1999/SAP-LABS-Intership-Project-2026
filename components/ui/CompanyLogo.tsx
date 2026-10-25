export default function CompanyLogo() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="300px" height="auto">
  <defs>
    {/* <!-- Professional Blue Gradient for Icon and OS Text --> */}
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1D4ED8" />
      <stop offset="50%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#06B6D4" />
    </linearGradient>

    {/* <!-- Soft Glow Filter --> */}
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  {/* <!-- ICON: Abstract Car Carrier / OS Circuit Symbol --> */}
  <g transform="translate(30, 25)">
    {/* <!-- Outer Hexagon / Shield Frame --> */}
    <path d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z" fill="none" stroke="url(#blueGrad)" stroke-width="3" stroke-opacity="0.4" />

    {/* <!-- Stylized Moving Car / Dynamic Arrow Shape --> */}
    <g filter="url(#glow)">
      {/* <!-- Upper Body / Roof Line --> */}
      <path d="M30 50 L42 35 L62 35 L70 50" fill="none" stroke="url(#blueGrad)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
      
      {/* <!-- Chassis / Motion Path --> */}
      <path d="M20 55 H80 C80 55, 85 55, 83 60 C81 65, 75 68, 70 68 H30 C25 68, 19 65, 17 60 C15 55, 20 55, 20 55 Z" fill="url(#blueGrad)" />
      
      {/* <!-- Wheels (Nodes representing Software/OS network) --> */}
      <circle cx="35" cy="68" r="5" fill="#FFFFFF" stroke="#1D4ED8" stroke-width="3" />
      <circle cx="65" cy="68" r="5" fill="#FFFFFF" stroke="#06B6D4" stroke-width="3" />
    </g>

    {/* <!-- Forward Speed / Logistics Vector Lines --> */}
    <path d="M5 40 H15" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" opacity="0.6" />
    <path d="M85 45 H92" stroke="#06B6D4" stroke-width="2" stroke-linecap="round" />
    <path d="M83 30 H95" stroke="#2563EB" stroke-width="2" stroke-linecap="round" />
  </g>

  {/* <!-- TYPOGRAPHY: HAUL OS --> */}
  <text x="145" y="98" font-family="system-ui, -apple-system, &#39;Segoe UI&#39;, Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="48" letter-spacing="1.5" fill="#0F172A">
    HAUL<tspan dx="12" fill="url(#blueGrad)">OS</tspan>
  </text>

  {/* <!-- SUBTITLE: Software Platform Tagline --> */}
  <text x="148" y="125" font-family="system-ui, -apple-system, &#39;Segoe UI&#39;, Roboto, Helvetica, Arial, sans-serif" font-weight="600" font-size="12" letter-spacing="4" fill="#64748B">
    CAR SHIPPING BROKERAGE OS
  </text>

  {/* <!-- Accent Tech Dot --> */}
  <circle cx="435" cy="121" r="3" fill="#06B6D4" />
</svg>
    )
}