import React from "react"
import AnimatedPath from "../animated-path"

const Line1 = ({ animate }) => {
  return (
    <svg viewBox="0 0 1680 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatedPath
        d="M1843.45 640.858C1123.46 517.171 189.231 1024.53 -156.217 629.995"
        stroke="url(#line5-gradient)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        animate={animate}
        transform="translate(0,-550)"
      />
      <path
        d="M1843.45 640.858C1123.46 517.171 189.231 1024.53 -156.217 629.995"
        stroke="url(#line5-fade)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        transform="translate(0,-550)"
      />
      <defs>
        <linearGradient
          id="line5-gradient"
          x1="0.17253"
          y1="736.272"
          x2="1616.13"
          y2="384.863"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8A00" />
          <stop offset="0.0001" stopColor="#FFBC4D" />
          <stop offset="0.45339" stopColor="#76EB9E" />
          <stop offset="0.995623" stopColor="#5ECA90" />
        </linearGradient>
        <linearGradient
          id="line5-fade"
          x1="1626"
          y1="608.572"
          x2="538.5"
          y2="780.072"
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
