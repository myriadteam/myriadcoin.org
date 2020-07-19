import React, { useState } from "react"
import { MenuItem, Select } from "@material-ui/core"
import { useTranslation } from "react-i18next"

const LanguageMenu = props => {
  const { i18n } = useTranslation()

  const [values, setValues] = useState({
    language: "en",
  })

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Select
      value={values.language}
      onChange={e => handleChange(e)}
      disableUnderline
      classes={{ root: "font-body font-semibold text-sm py-2 px-4" }}
      inputProps={{
        name: "language",
      }}
    >
      <MenuItem value={"en"}>English</MenuItem>
      <MenuItem value={"sv"}>Swedish</MenuItem>
    </Select>
  )
}

export default LanguageMenu
