import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

import Line1 from "./animated-lines/line1"
import Line2 from "./animated-lines/line2"
import Line3 from "./animated-lines/line3"
import Line4 from "./animated-lines/line4"
import Line5 from "./animated-lines/line5"

const lines = {
  Line1,
  Line2,
  Line3,
  Line4,
  Line5,
}

const AnimatedLine = ({ name = "Line1" }) => {
  const [seen, setSeen] = useState(false)

  const { ref, inView } = useInView({ threshold: 0 })

  useEffect(() => {
    if (inView && !seen) {
      setSeen(true)
    }
  }, [inView, seen])

  const Line = lines[name]

  return (
    <div ref={ref}>
      <Line animate={seen} />
    </div>
  )
}

export default AnimatedLine
