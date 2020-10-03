import React from "react"
import AnimatedPath from "../animated-path"

const Line1 = ({ animate }) => {
  return (
    <svg viewBox="0 0 1680 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatedPath
        d="M1841.89 568.409C1117.48 474.023 204.593 1018.85 -156.571 638.653"
        stroke="url(#line1-gradient)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        transform="translate(0,-550)"
        animate={animate}
      />
      <path
        d="M1841.89 568.409C1117.48 474.023 204.593 1018.85 -156.571 638.653"
        stroke="url(#line1-fade)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        transform="translate(0,-550)"
      />
      <defs>
        <linearGradient
          id="line1-gradient"
          x1="0.500054"
          y1="754.357"
          x2="662.406"
          y2="-164.607"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00437936" stopColor="#FFD17F" />
          <stop offset="1" stopColor="#7FFFE8" />
        </linearGradient>
        <linearGradient
          id="line1-fade"
          x1="1623.31"
          y1="544.969"
          x2="543.661"
          y2="760.432"
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
