import React, { useEffect, useState } from "react"
import "antd/dist/antd.css"
import { Switch } from "antd"

export const Ad = ({ img, alt, targetUrl }) => {

  const [showAds, setShowAds] = useState(false)
  const [monetized, setMonetized] = useState(false)

  useEffect(() => {
    if (typeof document !== "undefined") {
      let hasPaid = false
      if (document.monetization) {
        document.monetization.addEventListener("monetizationstart", () => {
          hasPaid = true
          setShowAds(false)
        })
        // There's a three-second grace period for Web Monetization to initialize.
        setTimeout(() => {
          if (!hasPaid) {
            setShowAds(true)
          }
        }, 3000)
        // As soon as the page loads, any visitor who does not have Web Monetization (!document.monetization) sees the ad immediately.
      } else {
        setShowAds(true)
      }
    }
  }, [])

  return (
    <div>
      <Switch checkedChildren="View as non-monetized user" unCheckedChildren="View as monetized user"
              onChange={() => setMonetized(!monetized)} style={{ marginBottom: "10px" }}/>
      <div>
        {(showAds && !monetized) && <a href={targetUrl}><img src={img} alt={alt}/></a>}
      </div>
    </div>
  )
}
