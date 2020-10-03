import React from "react"
import AnimatedPath from "../animated-path"

const Line1 = ({ animate }) => {
  return (
    <svg viewBox="0 0 1680 450" fill="none" xmlns="http://www.w3.org/2000/svg">
      <AnimatedPath
        d="M1783 0.999847C708 0.999847 788.5 384 -102 384"
        stroke="url(#line2-gradient)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        animate={animate}
      />
      <defs>
        <linearGradient
          id="line2-gradient"
          x1="24.9153"
          y1="380.071"
          x2="139.398"
          y2="-261.669"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.00552486" stopColor="#FF5AA9" />
          <stop offset="1" stopColor="#FFD17F" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Line1
