import React from "react"
import { useSpring, animated } from "react-spring"
import { svgPathProperties } from "svg-path-properties"

const AnimatedPath = ({ animate, ...props }) => {
  const properties = new svgPathProperties(props.d)
  const lineLength = properties.getTotalLength()

  const { animatedValue } = useSpring({
    animatedValue: animate ? 1 : 0,
    from: {
      animatedValue: 0,
    },
    config: {
      duration: 4000,
    },
  })

  const strokeDashoffset = animatedValue.interpolate({
    range: [0, 1],
    output: [-lineLength, 0],
  })

  return (
    <animated.path
      strokeDashoffset={strokeDashoffset}
      strokeDasharray={[lineLength, lineLength]}
      {...props}
    />
  )
}

export default React.memo(AnimatedPath)
