import PropTypes from "prop-types"
import React, { useState, useCallback } from "react"
import { useTranslation } from "react-i18next"
import tw, { styled } from "twin.macro"
import IconChevronDown from "../svgs/icons/chevron-down.inline.svg"

const DropdownContainer = styled.div`
  ${tw`relative z-10 inline-flex flex-col rounded cursor-pointer`}
  ${({ theme }) =>
    theme === "light"
      ? tw`text-white bg-black dark:bg-white dark:text-black`
      : tw`text-black bg-white`}
`

const Selected = styled.div`
  ${tw`flex items-center justify-between px-4 py-2 text-xs whitespace-no-wrap`}
  ${({ isOpen }) => (isOpen ? tw`rounded-t` : tw`rounded`)}
  ${({ theme }) =>
    theme === "light"
      ? tw`bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-300`
      : tw`bg-white hover:bg-gray-300`}
`

const Menu = styled.div`
  ${tw`absolute z-20 w-full rounded-b shadow top-full`}
  ${({ theme }) =>
    theme === "light" ? tw`bg-black dark:bg-white` : tw`bg-white`}
`

const Option = styled.a`
  ${tw`block w-full px-4 py-2 last:rounded-b `}
  ${({ theme }) =>
    theme === "light"
      ? tw`bg-black dark:bg-white dark:hover:bg-gray-300`
      : tw`bg-white hover:bg-gray-300`}
`

const DropdownMenu = ({
  options,
  theme,
  toggleOpen,
  onChange,
  labelPrefix,
}) => {
  const { t } = useTranslation()
  return (
    <Menu>
      {options.map(option => (
        <Option
          key={`option-${option.value}`}
          theme={theme}
          onClick={() => {
            onChange(option)
            toggleOpen(false)
          }}
        >
          {labelPrefix
            ? t(`${labelPrefix}.${option.value}.label`)
            : option.label}
        </Option>
      ))}
    </Menu>
  )
}

const Dropdown = ({
  options,
  defaultValue,
  onChange,
  placeholder,
  labelPrefix,
  theme = "light",
}) => {
  const { t } = useTranslation()
  const [isOpen, toggleOpen] = useState(false)

  const findOption = useCallback(
    value => options.find(option => option.value === value),
    [options]
  )

  const [selectedOption, setSelectedOption] = useState(findOption(defaultValue))

  const onChangeOption = useCallback(
    option => {
      setSelectedOption(option)
      onChange(option)
    },
    [onChange]
  )

  const selectedTitle =
    selectedOption &&
    (labelPrefix
      ? t(`${labelPrefix}.${selectedOption.value}.label`)
      : selectedOption && selectedOption.label)

  return (
    <DropdownContainer theme={theme}>
      <Selected
        onClick={() => toggleOpen(!isOpen)}
        isOpen={isOpen}
        theme={theme}
      >
        <span>
          {selectedOption
            ? selectedTitle
            : placeholder || t("components.dropdown.placeholder")}
        </span>
        <IconChevronDown alt=">" tw="ml-8" />
      </Selected>
      {isOpen && (
        <DropdownMenu
          labelPrefix={labelPrefix}
          options={options}
          theme={theme}
          onChange={onChangeOption}
          toggleOpen={toggleOpen}
        />
      )}
    </DropdownContainer>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array,
  labelPrefix: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func,
}

Dropdown.defaultProps = {
  options: [],
}

export default Dropdown
