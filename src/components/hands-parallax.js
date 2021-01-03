import React, { useCallback, useEffect, useRef } from "react"
import { useSpring, animated, interpolate, config } from "react-spring"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"
import * as easings from "d3-ease"

import Image from "./image"
import { PurpleGrad, OrangeGrad } from "../common/elements"

import SvgM from "../svgs/parallax/m.inline.svg"
import SvgY from "../svgs/parallax/y.inline.svg"
import SvgR from "../svgs/parallax/r.inline.svg"
import SvgI from "../svgs/parallax/i.inline.svg"
import SvgA from "../svgs/parallax/a.inline.svg"
import SvgD from "../svgs/parallax/d.inline.svg"

const ParallaxItem = ({
  translateY,
  eh,
  component,
  offsetY,
  offsetX,
  speed,
  interpolation,
}) => {
  return (
    <animated.div
      tw={"absolute w-full"}
      style={{
        transform: interpolate(
          [translateY.interpolate(interpolation), eh],
          (translateY, eh) => {
            let target = translateY + (eh * offsetY) / 2
            return `translate3d(${0}px, ${target}px, ${0}px)`
          }
        ),
        left: offsetX * 100 + "%",
      }}
    >
      {component}
    </animated.div>
  )
}

const Parallax = ({ items, translateY, eh }) => {
  return (
    <div tw="absolute top-0 left-0 flex w-full h-full items-center">
      {items.map((item, index) => (
        <ParallaxItem key={index} {...item} translateY={translateY} eh={eh} />
      ))}
    </div>
  )
}

const HandsParallax = ({ filename, children, style }) => {
  const { t } = useTranslation()

  const el = useRef(null)
  const el2 = useRef(null)

  const [{ st, wh, eh }, set] = useSpring(() => ({
    st: 0,
    wh: 0,
    eh: 0,
  }))

  console.log(
    easings.easeCubic(0),
    easings.easeCubic(0.25),
    easings.easeCubic(0.5),
    easings.easeCubic(0.75),
    easings.easeCubic(1)
  )

  const onLayout = useCallback(() => {
    if (!el.current) {
      return
    }

    const { height } = el.current.getBoundingClientRect()
    const { y } = el2.current.getBoundingClientRect()

    set({ st: y, eh: height, wh: window.innerHeight })
  }, [set])

  useEffect(() => {
    if (!el.current) {
      return
    }

    onLayout()
  }, [onLayout])

  useEffect(() => {
    window.addEventListener("scroll", onLayout)
    window.addEventListener("resize", onLayout)

    return () => {
      window.removeEventListener("scroll", onLayout)
      window.removeEventListener("resize", onLayout)
    }
  }, [onLayout])

  const stickyTop = interpolate([wh, eh], (wh, eh) => (wh - eh) / 2)
  const stickyMultiplier = 4
  const stickyLength = eh.interpolate(h => h * stickyMultiplier)

  const space = 47

  const translateY = interpolate(
    [st, wh, eh],
    (st, wh, eh) =>
      st -
      (wh - (eh * stickyMultiplier) / 2) / 2 +
      (eh * stickyMultiplier) / 2 / 2
  )

  const easingRange = 1000
  const letterInput = () =>
    [...new Array(easingRange * 2 + 1)].map((_, i) => i - easingRange)
  const letterOutput = speed =>
    letterInput().map(v => {
      let val = (v + easingRange) / (easingRange * 2)
      val -= 0.5
      val *= 2

      if (val > 0) {
        val = easings.easeQuadIn(val)
      } else {
        val = -1 * easings.easeQuadIn(-1 * val)
      }

      val *= easingRange * speed

      return val
    })

  const items = [
    {
      component: <SvgM tw="m-auto" width={"13%"} />,
      offsetY: 0,
      offsetX: (-0.03 * space) / 3,
      interpolation: {
        range: letterInput(),
        output: letterOutput(1),
      },
    },
    {
      component: <SvgY tw="m-auto" width={"13%"} />,
      offsetY: 0,
      offsetX: (-0.02 * space) / 3,
      interpolation: {
        range: letterInput(),
        output: letterOutput(-1),
      },
    },
    {
      component: <SvgR tw="m-auto" width={"13%"} />,
      offsetY: 0,
      offsetX: (-0.01 * space) / 3,
      interpolation: {
        range: letterInput(),
        output: letterOutput(0.7),
      },
    },
    {
      component: <SvgI tw="m-auto" width={"13%"} />,
      offsetY: 0,
      offsetX: (0.01 * space) / 3,
      interpolation: {
        range: letterInput(),
        output: letterOutput(-0.5),
      },
    },
    {
      component: <SvgA tw="m-auto" width={"13%"} />,
      offsetY: 0,
      offsetX: (0.02 * space) / 3,
      interpolation: {
        range: letterInput(),
        output: letterOutput(1),
      },
    },
    {
      component: <SvgD tw="m-auto" width={"13%"} />,
      offsetY: 0,
      offsetX: (0.03 * space) / 3,
      interpolation: {
        range: letterInput(),
        output: letterOutput(-0.4),
      },
    },
    {
      component: (
        <p
          tw="relative font-normal text-white m-auto text-xxs sm:text-sm sm:max-w-sm w-4/12"
          dangerouslySetInnerHTML={{ __html: t("home.parallax.first") }}
        />
      ),
      offsetY: -1.1,
      offsetX: -0.2,
      interpolation: {
        range: [0, 1],
        output: [0, 1.15],
      },
    },
    {
      component: (
        <p
          tw="relative text-sm font-normal text-white m-auto text-xxs sm:text-sm sm:max-w-sm w-4/12"
          dangerouslySetInnerHTML={{ __html: t("home.parallax.second") }}
        />
      ),
      offsetY: 1.1,
      offsetX: 0.2,
      interpolation: {
        range: [0, 1],
        output: [0, 1.15],
      },
    },
    {
      component: (
        <div
          tw="m-auto w-6/12"
          style={{
            transform: "translate3d(0px, -4%, 0px)",
          }}
        >
          <Image filename="parallax/hands.png" alt="Hands" />
        </div>
      ),
      offsetY: 0,
      offsetX: 0,
      interpolation: {
        range: [0, 1],
        output: [0, 0.05],
      },
    },
  ]

  return (
    <animated.div Tag="section" style={{ height: stickyLength }} ref={el2}>
      <animated.div
        tw="sticky overflow-hidden h-screen"
        style={{ top: stickyTop }}
        ref={el}
      >
        <OrangeGrad />
        <PurpleGrad />
        <Parallax items={items} translateY={translateY} eh={eh} />

        <div tw="absolute top-0 left-0">
          <animated.div>
            {translateY.interpolate(n => n.toFixed(2))}
          </animated.div>
          <animated.div>{st.interpolate(n => n.toFixed(2))}</animated.div>
          <animated.div>{wh.interpolate(n => n.toFixed(2))}</animated.div>
          <animated.div>{eh.interpolate(n => n.toFixed(2))}</animated.div>
        </div>
      </animated.div>
    </animated.div>
  )
}

export default HandsParallax
