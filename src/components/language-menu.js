import React, { useState, useCallback, useEffect } from "react"
import tw, { styled } from "twin.macro"
import { useSpring, animated } from "react-spring"
import { useTranslation } from "react-i18next"

import HeaderLink from "./header-link"

const ListItem = tw.li`border-b border-solid border-highlight-grey last:border-b-0`
const Button = tw.a`cursor-pointer px-6 py-4 text-xxs leading-none block w-full hover:text-purple`

const List = styled.ul`
  ${tw`absolute bg-white border border-solid rounded shadow-md left-1 right-1 sm:right-0 sm:left-auto border-highlight-grey top-full min-w-245 mt-2`}
`

const AnimatedList = animated(List)

const LanguageMenu = () => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      const closeMenu = () => {
        setOpen(false)
      }

      document.addEventListener("click", closeMenu)
      document
        .getElementById("headway-link") // needed since they preventDefault
        .addEventListener("click", closeMenu)
      return () => {
        document.removeEventListener("click", closeMenu)
        document
          .getElementById("headway-link")
          .removeEventListener("click", closeMenu)
      }
    }
  }, [open])

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
    <>
      <HeaderLink onClick={toggleMenu} tw="relative">
        {t(`languages.${language}`)}
      </HeaderLink>
      <AnimatedList style={menuAppear}>
        {Object.keys(i18n.options.resources).map(key => renderButton(key))}
      </AnimatedList>
    </>
  )
}

export default LanguageMenu
