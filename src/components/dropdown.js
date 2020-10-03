import PropTypes from "prop-types"
import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { withTrans } from "../i18n/withTrans"
import iconChevronDown from "../images/icons/chevron-down.svg"

const DropdownContainer = tw.div`rounded bg-black text-white cursor-pointer inline-flex flex-col relative z-10`

const Selected = styled.div`
  ${tw`px-4 py-2 bg-black hover:bg-gray-800 flex justify-between items-center`}
  ${({ isOpen }) => (isOpen ? tw`rounded-t` : tw`rounded`)}
`
const Menu = tw.div`absolute top-full w-full rounded-b bg-black z-20 shadow`
const Option = tw.a`block px-4 py-2 bg-black w-full first:rounded-t last:rounded-b hover:bg-gray-800`

const Dropdown = ({ options, selected, onChange, placeholder, t }) => {
  const [isOpen, toggleOpen] = useState(false)

  const renderMenu = () => {
    return (
      <Menu>
        {options.map(option => (
          <Option
            key={`option-${option.value}`}
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

  const selectedOption = options.find(option => option.value === selected)

  return (
    <DropdownContainer>
      <Selected onClick={() => toggleOpen(!isOpen)} isOpen={isOpen}>
        <span>
          {selectedOption
            ? selectedOption.label
            : placeholder || t("components.dropdown.placeholder")}
        </span>
        <img src={iconChevronDown} alt=">" tw="ml-8" />
      </Selected>
      {isOpen && renderMenu()}
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

export default withTrans(Dropdown)
