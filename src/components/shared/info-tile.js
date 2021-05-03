import React from "react"
import tw, { css } from "twin.macro"
import InfoSvg from "../../svgs/info.svg"

const InfoTile = ({ children }) => {
  return (
    <div tw="mx-4 mt-8 sm:mt-0 rounded-full bg-light-grey dark:bg-dark-info-box text-bubble-blue px-4 py-2 text-sm flex items-center whitespace-no-wrap">
      <div tw="mr-2 w-6 h-6">
        <img src={InfoSvg} alt="i" />
      </div>{" "}
      {children}
    </div>
  )
}

export default InfoTile
