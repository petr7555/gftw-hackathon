import React, { useEffect, useState } from "react"
import gif from "../../static/money-rain.gif"

export const Counter = () => {
  const [formatted, setFormatted] = useState()
  const [currency, setCurrency] = useState()

  useEffect(() => {
    if (typeof document !== "undefined") {
      let total = 0
      let scale
      if (document.monetization) {
        document.monetization.addEventListener("monetizationprogress", ev => {
          // initialize currency and scale on first progress event
          if (total === 0) {
            scale = ev.detail.assetScale
            setCurrency(ev.detail.assetCode)
          }

          total += Number(ev.detail.amount)

          setFormatted((total * Math.pow(10, -scale)).toFixed(scale))
        })
      }
    }
  }, [])

  return (
    <div>
      {formatted && <img src={gif} alt="rain of money"/>}
      <p>
        Thanks to you, I've made {formatted ?
        <span>{formatted} {currency}</span> : <span>nothing yet.</span>}
      </p>
    </div>
  )
}
