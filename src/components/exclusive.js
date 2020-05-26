import React, { useEffect, useState } from "react"
import "antd/dist/antd.css"
import { Switch } from "antd"

export const Exclusive = ({ children }) => {

  const [visible, setVisible] = useState(false)
  const [alwaysVisible, setAlwaysVisible] = useState(false)

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (document.monetization) {
        document.monetization.addEventListener("monetizationstart", () => {
          setVisible(true)
        })
      }
    }
  }, [])

  return (
    <div>
      <Switch checkedChildren="View as non-monetized user" unCheckedChildren="View as monetized user"
              onChange={() => setAlwaysVisible(!alwaysVisible)} style={{ marginBottom: "10px" }}/>
      <div>
        {(visible || alwaysVisible) && <div>{children}</div>}
      </div>
    </div>
  )
}
