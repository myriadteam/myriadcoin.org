import React, { useState, useCallback } from "react"
import { withTrans } from "../i18n/withTrans"
import tw, { styled } from "twin.macro"
import { useSpring, animated } from "react-spring"

import HeaderLink from "./header-link"

const ListItem = tw.li`border-b border-solid border-highlight-grey last:border-b-0`
const Button = tw.a`cursor-pointer px-6 py-4 text-xxs leading-none block w-full hover:text-purple`

const List = styled.ul`
  ${tw`absolute bg-white border border-solid rounded shadow-md left-1 right-1 sm:right-0 sm:left-auto border-highlight-grey top-full min-w-245 mt-2`}
`

const AnimatedList = animated(List)

const LanguageMenu = ({ t, i18n }) => {
  const [open, setOpen] = useState(false)
  const { language } = i18n

  const toggleMenu = useCallback(() => {
    setOpen(c => !c)
  }, [])

  const handleChange = useCallback(
    languageKey => {
      i18n.changeLanguage(languageKey)
      setOpen(false)
    },
    [i18n]
  )

  const renderButton = key => {
    return (
      <ListItem key={key}>
        <Button
          onClick={() => handleChange(key)}
          tw="text-black"
          className={language === key ? "font-bold" : "font-normal"}
        >
          {t(`languages.${key}`)}
        </Button>
      </ListItem>
    )
  }

  const menuAppear = useSpring({
    transform: open ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: open ? 1 : 0,
    visibility: open ? "visible" : "hidden",
  })

  return (
    <div tw="relative">
      <HeaderLink onClick={toggleMenu}>{t(`languages.${language}`)}</HeaderLink>
      <AnimatedList style={menuAppear}>
        {Object.keys(i18n.options.resources).map(key => renderButton(key))}
      </AnimatedList>
    </div>
  )
}

export default withTrans(LanguageMenu)
