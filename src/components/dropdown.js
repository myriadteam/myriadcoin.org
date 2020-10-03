import PropTypes from "prop-types"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import tw, { styled } from "twin.macro"
import iconChevronDownBlack from "../svgs/icons/chevron-down-black.svg"
import iconChevronDownWhite from "../svgs/icons/chevron-down.svg"

const DropdownContainer = styled.div`
  ${tw`rounded cursor-pointer inline-flex flex-col relative z-10`}
  ${({ theme }) =>
    theme === "light" ? tw`bg-black text-white` : tw`bg-white text-black`}
`

const Selected = styled.div`
  ${tw`px-4 py-2  flex justify-between items-center`}
  ${({ isOpen }) => (isOpen ? tw`rounded-t` : tw`rounded`)}
  ${({ theme }) =>
    theme === "light"
      ? tw`bg-black hover:bg-gray-800`
      : tw`bg-white hover:bg-gray-300`}
`

const Menu = styled.div`
  ${tw`absolute top-full w-full rounded-b z-20 shadow`}
  ${({ theme }) => (theme === "light" ? tw`bg-black` : tw`bg-white`)}
`

const Option = styled.a`
  ${tw`block px-4 py-2 w-full first:rounded-t last:rounded-b `}
  ${({ theme }) =>
    theme === "light" ? tw`bg-black` : tw`bg-white hover:bg-gray-300`}
`

const DropdownMenu = ({ options, theme, toggleOpen, onChange }) => {
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
          {option.label}
        </Option>
      ))}
    </Menu>
  )
}

const Dropdown = ({
  options,
  selected,
  onChange,
  placeholder,
  theme = "light",
}) => {
  const { t } = useTranslation()
  const [isOpen, toggleOpen] = useState(false)

  const selectedOption = options.find(option => option.value === selected)

  return (
    <DropdownContainer theme={theme}>
      <Selected
        onClick={() => toggleOpen(!isOpen)}
        isOpen={isOpen}
        theme={theme}
      >
        <span>
          {selectedOption
            ? selectedOption.label
            : placeholder || t("components.dropdown.placeholder")}
        </span>
        <img
          src={theme === "dark" ? iconChevronDownBlack : iconChevronDownWhite}
          alt=">"
          tw="ml-8"
        />
      </Selected>
      {isOpen && (
        <DropdownMenu
          options={options}
          theme={theme}
          onChange={onChange}
          toggleOpen={toggleOpen}
        />
      )}
    </DropdownContainer>
  )
}

Dropdown.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.string,
  onChange: PropTypes.func,
}

Dropdown.defaultProps = {
  options: [],
}

export default Dropdown
