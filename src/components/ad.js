import React, { useEffect, useState } from "react"
import "antd/dist/antd.css"
import { Switch } from "antd"

export const Ad = ({ img, alt }) => {

  const [showAds, setShowAds] = useState(false)
  const [monetized, setMonetized] = useState(false)

  useEffect(() => {
      let hasPaid = false
      if (typeof document !== "undefined") {
        if (document.monetization) {
          document.monetization.addEventListener("monetizationstart", () => {
            hasPaid = true
          })
        }
        if (!document.monetization) {
          setShowAds(true)
        } else {
          setTimeout(() => {
            if (!hasPaid) {
              setShowAds(true)
            }
          }, 3000)
        }
      }
    }, [],
  )

  return (
    <div>
      <Switch checkedChildren="View as non-monetized user" unCheckedChildren="View as monetized user"
              onChange={() => setMonetized(!monetized)} style={{ marginBottom: "10px" }}/>
      <div>
        {(showAds && !monetized) && <img src={img} alt={alt}/>}
      </div>
    </div>
  )
}
