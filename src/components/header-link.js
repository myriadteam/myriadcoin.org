import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw, { css, styled } from "twin.macro"

const MenuItemEffect = tw.i`relative block overflow-hidden not-italic py-0.5`

const MenuItemEffectWrapper = styled.span`
  ${tw`block cursor-pointer font-semibold text-center sm:text-left w-full relative block px-4 py-2`}
  i:after {
    content: "";
    height: 2px;
    left: 0;
    bottom: 0;
    position: absolute;
    width: 400%;
    will-change: transform;
    z-index: -1;
  }

  & > .active > i:after,
  &:hover i:after {
    animation: underline-gradient 6s linear infinite;
    background: linear-gradient(
      90deg,
      rgba(255, 138, 0, 1) 15%,
      rgba(223, 133, 255, 1) 35%,
      rgba(255, 138, 0, 1) 85%
    );
  }

  @keyframes underline-gradient {
    0% {
      transform: translate3d(0%, 0%, 0);
    }
    100% {
      transform: translate3d(-75%, 0%, 0);
    }
  }
`

function HeaderLink({ children, to, onClick, ...props }) {
  const renderContent = () => {
    if (!to) {
      return (
        <a {...props} onClick={onClick}>
          <MenuItemEffect>{children}</MenuItemEffect>
        </a>
      )
    }

    return (
      <Link {...props} to={to} onClick={onClick} activeClassName="active">
        <MenuItemEffect>{children}</MenuItemEffect>
      </Link>
    )
  }

  return <MenuItemEffectWrapper>{renderContent()}</MenuItemEffectWrapper>
}

HeaderLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
}

HeaderLink.defaultProps = {
  className: "",
  to: null,
}

export default HeaderLink
