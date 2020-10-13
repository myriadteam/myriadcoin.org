import React from "react"
import AnimatedPath from "../animated-path"

const Line1 = ({ animate }) => {
  return (
    <svg viewBox="0 0 1680 350" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatedPath
        d="M-131.506 638.826C973.103 979.67 1675.01 497.701 1866.51 556.788"
        stroke="url(#line3-gradient)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        animate={animate}
        transform="translate(0,-550)"
      />
      <path
        d="M-131.506 638.826C973.103 979.67 1675.01 497.701 1866.51 556.788"
        stroke="url(#line3-fade)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        transform="translate(0,-550)"
      />
      <defs>
        <linearGradient
          id="line3-gradient"
          x1="1691"
          y1="566.557"
          x2="84.7165"
          y2="1001.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A00" />
          <stop offset="0.0001" stopColor="#E5A63C" />
          <stop offset="0.480837" stopColor="#DF85FF" />
          <stop offset="1" stopColor="#C883FF" />
        </linearGradient>
        <linearGradient
          id="line3-fade"
          x1="86.3198"
          y1="663.851"
          x2="1138.58"
          y2="413.21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Line1
