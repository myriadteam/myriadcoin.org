import React from "react"
import { algoritms } from "../../constants/algoritms"

const MinePool = ({ selected }) => {
  let algoritm = algoritms.find(algo => algo.value === selected)
  return (
    <section className="section section--mine-pool">
      <div className="wrapper">
        <div className="u-max-width--650">
          <h2>(Optional) Join a mining pool</h2>
          <p>
            A mining pool is the pooling of resources by miners, who share their
            processing power over a network.
          </p>
          <h4 className="u-margin-top--l">
            Available mining pools for {algoritm.label}
          </h4>
          {algoritm.miningPools.map(({ url, name }, key) => (
            <div className="u-margin-bottom" key={`mining-pool-key-${key}`}>
              <a href={url} className="btn btn--wide">
                {name}
              </a>
            </div>
          ))}
          <h2 className="u-margin-top--xxl">Now you can start mining!</h2>
        </div>
      </div>
    </section>
  )
}

export default MinePool
