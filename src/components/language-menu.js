import React, { useState } from "react"
import { withTrans } from "../i18n/withTrans"
import tw from "twin.macro"

const Wrapper = tw.div`font-body font-semibold text-sm px-4 relative my-4 lg:my-0`
const List = tw.ul`top-full right-0 rounded-lg border border-solid border-highlight-grey shadow-md absolute`
const ListItem = tw.li`border-b border-solid border-highlight-grey last:border-b-0`
const Button = tw.button`px-8 py-4 text-lg block w-full hover:bg-highlight-grey`

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
          className={values.language === key ? "font-bold" : null}
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
        tw="font-semibold text-center sm:text-left w-full"
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
