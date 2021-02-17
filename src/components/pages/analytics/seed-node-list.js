import React from "react"
import tw from "twin.macro"
import SeedNode from "./seed-node"

const SeedNodeList = ({ nodes, bind }) => {
  return nodes.map(node => {
    return <SeedNode key={`${node[0]}:${node[1]}`} node={node} bind={bind} />
  })
}

export default React.memo(SeedNodeList)
