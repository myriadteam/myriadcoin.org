import React, { useState } from "react"
import { withTrans } from "../i18n/withTrans"
import tw, { styled } from "twin.macro"

const Wrapper = tw.div`font-body font-semibold text-xs px-4 relative my-4 lg:my-0`
const ListItem = tw.li`border-b border-solid border-highlight-grey last:border-b-0`
const Button = tw.a`cursor-pointer px-8 py-4 text-sm leading-none block w-full hover:text-purple`

const List = styled.ul`
  ${tw`absolute right-0 border border-solid rounded-lg shadow-md top-double border-highlight-grey min-w-245`}
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
          className={values.language === key ? "font-bold" : "font-normal"}
        >
          {t(`languages.${key}`)}
        </Button>
      </ListItem>
    )
  }

  return (
    <Wrapper>
      <button
        onClick={toggleMenu}
        tw="block cursor-pointer font-semibold text-center sm:text-left w-full"
      >
        {t(`languages.${values.language}`)}
      </button>
      <List className={values.open ? "block" : "hidden"}>
        {Object.keys(i18n.options.resources).map(key => renderButton(key))}
      </List>
    </Wrapper>
  )
}

export default withTrans(LanguageMenu)
