import React, { useContext } from "react"
import tw from "twin.macro"

const ZoomPanContext = React.createContext({})

export function useGraphZoomPan() {
  return useContext(ZoomPanContext)
}

export default ZoomPanContext
