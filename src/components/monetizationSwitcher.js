import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet/es/Helmet"
import "antd/dist/antd.css"
import { Button } from "antd"

export const MonetizationSwitcher = ({ wallet }) => {
  const [state, setState] = useState("")
  const [monetized, setMonetized] = useState(true)

  const showMonetizationState = () => {
    setState(document.monetization.state)
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (document.monetization) {
        document.monetization.addEventListener("monetizationstop", showMonetizationState)
        document.monetization.addEventListener("monetizationpending", showMonetizationState)
        document.monetization.addEventListener("monetizationstart", showMonetizationState)
      } else {
        setState("Not enabled in browser")
      }
    }
  }, [])

  return (
    <div>
      <Helmet>
        {monetized && <meta name="monetization" content={wallet}/>}
      </Helmet>
      <p> Current monetization state: {state}</p>
      <Button type="primary" onClick={() => setMonetized(false)} disabled={!monetized} style={{marginRight: "5px"}}>Stop monetization</Button>
      <Button type="primary" onClick={() => setMonetized(true)} disabled={monetized}>Start monetization</Button>
    </div>
  )
}

