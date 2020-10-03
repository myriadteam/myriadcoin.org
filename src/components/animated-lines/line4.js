import React from "react"
import AnimatedPath from "../animated-path"

const Line1 = ({ animate }) => {
  return (
    <svg viewBox="0 0 1680 111" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatedPath
        d="M1802.21 86.2197C667.035 -132.236 75.5817 143.97 -121.207 106.099"
        stroke="url(#line4-gradient)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        animate={animate}
      />
      <defs>
        <linearGradient
          id="line4-gradient"
          x1="62.5"
          y1="89.6597"
          x2="276.406"
          y2="-449.505"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#64EDFF" />
          <stop offset="1" stopColor="#327CFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Line1
