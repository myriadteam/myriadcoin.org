import React, { useState } from "react"
import { withTrans } from "../i18n/withTrans"
import tw, { styled } from "twin.macro"
import { useSpring, animated } from "react-spring"

const Wrapper = tw.div`font-body font-semibold text-xxs px-4 relative`
const ListItem = tw.li`border-b border-solid border-highlight-grey last:border-b-0`
const Button = tw.a`cursor-pointer px-6 py-4 text-xxs leading-none block w-full hover:text-purple`

const List = styled.ul`
  ${tw`absolute bg-white border border-solid rounded shadow-md left-1 right-1 sm:right-0 sm:left-auto border-highlight-grey top-full min-w-245`}
  &:before, &:after {
    content: "";
    position: absolute;
    right: 20px;
    top: -34px;
    border-top: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 17px solid #ececee;
    border-left: 17px solid transparent;
  }

  &:after {
    border-bottom: 17px solid #ffffff;
    top: -33px;
  }
`

const AnimatedList = animated(List)

const LanguageMenu = ({ t, i18n }) => {
  const [values, setValues] = useState({
    language: "en",
    open: false,
  })

  const toggleMenu = () => {
    setValues(oldValues => ({
      ...oldValues,
      open: !oldValues.open,
    }))
  }

  const handleChange = languageKey => {
    i18n.changeLanguage(languageKey)

    setValues(oldValues => ({
      ...oldValues,
      language: languageKey,
      open: false,
    }))
  }

  const renderButton = key => {
    return (
      <ListItem key={key}>
        <Button
          onClick={() => handleChange(key)}
          tw="text-black"
          className={values.language === key ? "font-bold" : "font-normal"}
        >
          {t(`languages.${key}`)}
        </Button>
      </ListItem>
    )
  }

  const menuAppear = useSpring({
    transform: values.open ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
    opacity: values.open ? 1 : 0,
    visibility: values.open ? "visible" : "hidden",
  })

  return (
    <Wrapper>
      <button
        onClick={toggleMenu}
        tw="block cursor-pointer font-semibold text-center sm:text-left w-full py-2 my-4"
      >
        {t(`languages.${values.language}`)}
      </button>
      <AnimatedList style={menuAppear}>
        {Object.keys(i18n.options.resources).map(key => renderButton(key))}
      </AnimatedList>
    </Wrapper>
  )
}

export default withTrans(LanguageMenu)
