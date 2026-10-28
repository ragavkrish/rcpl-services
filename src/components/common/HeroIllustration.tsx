import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 540 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[540px] drop-shadow-sm select-none"
        aria-hidden="true"
      >
        <defs>
          {/* RCPL Brand Palette Gradient: Executive Ice Blue & Cool Slate */}
          <linearGradient id="rcplGrad" x1="80" y1="30" x2="460" y2="410" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EDF4FA" />
            <stop offset="100%" stopColor="#DBE8F4" />
          </linearGradient>

          <linearGradient id="phoneScreen" x1="240" y1="60" x2="240" y2="350" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* 1. Organic Backdrop Blob in RCPL Corporate Blue Hue */}
        <path
          d="M 430,70 C 505,120 535,230 495,315 C 455,400 350,425 240,410 C 130,395 70,325 80,215 C 90,105 185,45 285,35 C 340,30 380,40 430,70 Z"
          fill="url(#rcplGrad)"
        />

        {/* Ground platform shadow */}
        <ellipse cx="280" cy="405" rx="200" ry="14" fill="#CAD8E6" opacity="0.6" />

        {/* 2. Classical Court / Regulatory Pillars in RCPL Navy & Gold (Right Side) */}
        <g id="court-building" filter="url(#softShadow)">
          {/* Base Steps */}
          <rect x="360" y="340" width="130" height="14" rx="3" fill="#152E4D" />
          <rect x="368" y="328" width="114" height="12" rx="2" fill="#23456F" />

          {/* 4 Pillars */}
          <rect x="375" y="240" width="12" height="88" rx="2" fill="#FFFFFF" />
          <rect x="403" y="240" width="12" height="88" rx="2" fill="#FFFFFF" />
          <rect x="431" y="240" width="12" height="88" rx="2" fill="#FFFFFF" />
          <rect x="459" y="240" width="12" height="88" rx="2" fill="#FFFFFF" />

          {/* Capital & Entablature */}
          <rect x="370" y="232" width="108" height="10" rx="2" fill="#23456F" />

          {/* Triangular Pediment */}
          <polygon points="364,232 478,232 421,180" fill="#152E4D" />
          <polygon points="374,230 468,230 421,188" fill="#1C3D66" />

          {/* Dome behind pediment */}
          <path d="M 395,182 A 26,26 0 0,1 447,182 Z" fill="#0D1E33" />

          {/* Scales of Justice Medallion in Warm Gold */}
          <circle cx="421" cy="214" r="13" fill="#FFFFFF" />
          <circle cx="421" cy="214" r="11" fill="#FDF8F0" />
          {/* Gold Scales icon */}
          <line x1="421" y1="207" x2="421" y2="221" stroke="#B28348" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="414" y1="210" x2="428" y2="210" stroke="#B28348" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 412,216 Q 414,218 416,216 Z" fill="#B28348" />
          <path d="M 426,216 Q 428,218 430,216 Z" fill="#B28348" />
        </g>

        {/* 3. The Central Smartphone Mockup (Video Call) */}
        <g id="phone-mockup" filter="url(#softShadow)">
          {/* Phone Outer Body */}
          <rect x="200" y="60" width="170" height="315" rx="28" fill="#152E4D" />
          {/* Phone Inner Bezel & Screen */}
          <rect x="206" y="66" width="158" height="303" rx="24" fill="url(#phoneScreen)" />

          {/* Notch / Speaker bar */}
          <rect x="255" y="74" width="60" height="7" rx="3.5" fill="#334155" />
          <circle cx="245" cy="77.5" r="3" fill="#475569" />

          {/* Video Call Header Bar */}
          <rect x="214" y="88" width="142" height="26" rx="6" fill="#FFFFFF" opacity="0.9" />
          <circle cx="225" cy="101" r="5" fill="#152E4D" />
          <rect x="235" y="97" width="55" height="4" rx="2" fill="#1E293B" />
          <rect x="235" y="103" width="35" height="3" rx="1.5" fill="#64748B" />
          <rect x="325" y="96" width="22" height="10" rx="3" fill="#152E4D" />
          <text x="336" y="103" fill="#FFFFFF" fontSize="6" fontWeight="bold" textAnchor="middle">RCPL</text>

          {/* Video Feed Screen Area: Corporate Advisor in RCPL Corporate Navy */}
          <g id="advisor-in-video">
            {/* Background of video call office: Professional executive office wall with subtle certificates */}
            <rect x="214" y="120" width="142" height="195" rx="12" fill="#EBF2F8" />
            
            {/* Subtle Law Bookshelf / Office Credenza in background */}
            <rect x="220" y="130" width="45" height="35" rx="3" fill="#D9E6F2" opacity="0.7" />
            <rect x="224" y="138" width="4" height="20" rx="1" fill="#152E4D" opacity="0.3" />
            <rect x="230" y="136" width="5" height="22" rx="1" fill="#B28348" opacity="0.35" />
            <rect x="237" y="139" width="4" height="19" rx="1" fill="#23456F" opacity="0.3" />
            <rect x="243" y="137" width="5" height="21" rx="1" fill="#152E4D" opacity="0.25" />
            <rect x="250" y="140" width="4" height="18" rx="1" fill="#B28348" opacity="0.3" />

            {/* Framed Certificate on Wall */}
            <rect x="312" y="132" width="34" height="24" rx="2" fill="#FFFFFF" stroke="#CCD8E4" strokeWidth="1" />
            <rect x="316" y="136" width="26" height="3" rx="1" fill="#B28348" opacity="0.6" />
            <rect x="318" y="142" width="22" height="2" rx="1" fill="#94A3B8" />
            <rect x="320" y="146" width="18" height="2" rx="1" fill="#94A3B8" />
            <circle cx="329" cy="151" r="2" fill="#B28348" />

            {/* Advisor Body & Suit */}
            {/* Dark Navy Suit */}
            <path d="M 235,315 L 255,230 L 315,230 L 335,315 Z" fill="#152E4D" />
            {/* Lapels */}
            <path d="M 255,230 L 268,275 L 275,230" fill="#1C3D66" />
            <path d="M 315,230 L 302,275 L 295,230" fill="#1C3D66" />
            
            {/* Gold Lapel Pin */}
            <circle cx="264" cy="248" r="2.5" fill="#B28348" />

            {/* Crisp White Shirt Collar */}
            <polygon points="274,230 296,230 285,256" fill="#FFFFFF" />
            {/* Gold / Brass Accent Tie */}
            <polygon points="282,242 288,242 290,290 285,296 280,290" fill="#B28348" />
            <polygon points="282,238 288,238 286,244 284,244" fill="#8C6534" />

            {/* Advisor Head and Neck */}
            <rect x="278" y="210" width="14" height="22" rx="3" fill="#F8C4B4" />
            <circle cx="285" cy="190" r="22" fill="#F8C4B4" />

            {/* Professional Hair */}
            <path d="M 265,188 C 265,168 280,165 295,166 C 306,168 308,180 307,192 C 304,182 297,175 285,175 C 274,175 268,182 265,188 Z" fill="#1E293B" />

            {/* Professional Eyeglasses in RCPL Dark Navy */}
            <rect x="272" y="184" width="11" height="8" rx="2.5" fill="none" stroke="#152E4D" strokeWidth="1.5" />
            <rect x="287" y="184" width="11" height="8" rx="2.5" fill="none" stroke="#152E4D" strokeWidth="1.5" />
            <line x1="283" y1="187" x2="287" y2="187" stroke="#152E4D" strokeWidth="1.5" />

            {/* Eyes behind lenses */}
            <circle cx="277.5" cy="188" r="1.8" fill="#1E293B" />
            <circle cx="292.5" cy="188" r="1.8" fill="#1E293B" />

            {/* Confident, approachable smile */}
            <path d="M 279,199 Q 285,205 291,199" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            {/* Floating Live Consultant Label Tag on Screen */}
            <rect x="222" y="285" width="70" height="18" rx="4" fill="#152E4D" opacity="0.9" />
            <circle cx="229" cy="294" r="3" fill="#25D366" />
            <text x="236" y="297" fill="#FFFFFF" fontSize="6.5" fontWeight="600" fontFamily="sans-serif">CA &amp; CS Specialist</text>
          </g>

          {/* Floating Call Action Buttons at Phone Bottom */}
          <rect x="220" y="325" width="130" height="34" rx="17" fill="#FFFFFF" opacity="0.95" />
          {/* Green Call button */}
          <circle cx="242" cy="342" r="11" fill="#25D366" />
          <path d="M 238,340 C 238,345 242,347 246,345" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          {/* Mic Button */}
          <circle cx="285" cy="342" r="11" fill="#F1F5F9" />
          <rect x="283" y="337" width="4" height="7" rx="2" fill="#475569" />
          <path d="M 281,341 Q 285,345 289,341" stroke="#475569" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          {/* End Call button */}
          <circle cx="328" cy="342" r="11" fill="#1E293B" />
          <line x1="324" y1="342" x2="332" y2="342" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 4. Businesswoman on Left in RCPL Corporate Navy & Gold */}
        <g id="businesswoman" filter="url(#softShadow)">
          {/* Legs & Charcoal Tailored Skirt */}
          <rect x="135" y="278" width="40" height="52" rx="4" fill="#1E293B" />
          <rect x="142" y="330" width="8" height="54" rx="3" fill="#F8C4B4" />
          <rect x="157" y="330" width="8" height="54" rx="3" fill="#F8C4B4" />
          {/* Shoes */}
          <ellipse cx="145" cy="386" rx="9" ry="4" fill="#152E4D" />
          <ellipse cx="162" cy="386" rx="9" ry="4" fill="#152E4D" />

          {/* RCPL Corporate Navy Blazer */}
          <path d="M 128,215 L 140,280 L 170,280 L 180,215 Z" fill="#152E4D" />
          {/* Lapels */}
          <path d="M 140,215 L 147,250 L 152,215" fill="#1C3D66" />
          <path d="M 168,215 L 161,250 L 156,215" fill="#1C3D66" />
          {/* Gold Brooch */}
          <circle cx="142" cy="228" r="2.5" fill="#B28348" />

          {/* White inner blouse collar */}
          <polygon points="149,215 159,215 154,235" fill="#FFFFFF" />

          {/* Left Arm */}
          <path d="M 132,220 L 126,260 L 132,268" stroke="#152E4D" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Right Arm Gesturing toward Video Phone */}
          <path d="M 174,222 L 198,245 L 214,235" stroke="#152E4D" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="215" cy="233" r="5" fill="#F8C4B4" />

          {/* Neck & Head */}
          <rect x="149" y="198" width="10" height="18" rx="2" fill="#F8C4B4" />
          <circle cx="154" cy="184" r="18" fill="#F8C4B4" />

          {/* Hair */}
          <path d="M 140,188 C 135,160 165,155 170,180 C 172,195 172,215 168,235 C 164,215 162,195 158,195 C 150,195 145,215 138,235 C 136,215 138,198 140,188 Z" fill="#1E293B" />

          {/* Facial Profile */}
          <circle cx="160" cy="183" r="2.5" fill="#1E293B" />
          <path d="M 160,190 Q 165,193 168,190" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </g>

        {/* 5. Floating Accents in RCPL Brand Gold & Navy */}
        <g id="accents">
          {/* Verified Checkmark Bubble */}
          <circle cx="105" cy="130" r="18" fill="#FFFFFF" filter="url(#softShadow)" />
          <path d="M 98,130 L 103,135 L 112,125" stroke="#25D366" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Gold Sparkle Star */}
          <path d="M 390,120 Q 390,132 402,132 Q 390,132 390,144 Q 390,132 378,132 Q 390,132 390,120 Z" fill="#B28348" />
          {/* Navy Star */}
          <path d="M 180,85 Q 180,93 188,93 Q 180,93 180,101 Q 180,93 172,93 Q 180,93 180,85 Z" fill="#152E4D" />
        </g>
      </svg>
    </div>
  );
};
