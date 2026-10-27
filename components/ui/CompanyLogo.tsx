export default function CompanyLogo() {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 160" width="200px" height="auto">
            <defs>
                {/* <!-- Professional Blue Gradient for OS Text --> */}
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#1D4ED8" />
                    <stop offset="50%" stop-color="#2563EB" />
                    <stop offset="100%" stop-color="#06B6D4" />
                </linearGradient>
            </defs>

            {/* <!-- TYPOGRAPHY: HAUL OS --> */}
            <text x="30" y="78" font-family="system-ui, -apple-system, &#39;Segoe UI&#39;, Roboto, Helvetica, Arial, sans-serif" font-weight="800" font-size="48" letter-spacing="1.5" fill="#0F172A">
                HAUL<tspan dx="12" fill="url(#blueGrad)">OS</tspan>
            </text>

            {/* <!-- SUBTITLE: Software Platform Tagline --> */}
            <text x="33" y="105" font-family="system-ui, -apple-system, &#39;Segoe UI&#39;, Roboto, Helvetica, Arial, sans-serif" font-weight="600" font-size="12" letter-spacing="4" fill="#64748B">
                CAR SHIPPING BROKERAGE OS
            </text>

            {/* <!-- Accent Tech Dot --> */}
            <circle cx="320" cy="101" r="3" fill="#06B6D4" />
        </svg>
    )
}