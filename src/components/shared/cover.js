import React from "react"
import tw from "twin.macro"

import IconArrow from "../../svgs/icons/arrow-forward.inline.svg"
import { BigText } from "../../common/elements"

function Cover({ children, showArrow }) {
  return (
    <div tw="h-112 -mt-24 sm:h-176 sm:-mt-32 flex items-center px-6">
      <div tw="relative">
        <BigText
          dangerouslySetInnerHTML={{ __html: children }}
          tw="mt-5 sm:mt-0"
        />
        {showArrow && (
          <BigText>
            <IconArrow
              alt=">"
              tw="transform rotate-90 absolute mt-10 hidden sm:block"
              style={{ height: "0.78em", width: "0.78em" }}
            />
          </BigText>
        )}
      </div>
    </div>
  )
}

export default Cover
