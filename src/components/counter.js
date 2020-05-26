import React, { useEffect, useState } from "react"
import gif from "../../static/money-rain.gif"
import 'antd/dist/antd.css';
import "ant-design-pro/dist/ant-design-pro.css"
import { ChartCard, MiniArea } from "ant-design-pro/lib/Charts"
import NumberInfo from "ant-design-pro/lib/NumberInfo"
import Trend from 'ant-design-pro/lib/Trend';
import moment from "moment"

export const Counter = () => {
  const [formatted, setFormatted] = useState()
  const [currency, setCurrency] = useState()
  const [data, setData] = useState([])

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
          setData(data => [...data, { x: moment().format("hh:mm:ss:SS"), y: Number(ev.detail.amount) }])
          setFormatted((total * Math.pow(10, -scale)).toFixed(scale))
        })
      }
    }
  }, [])
  const value = formatted ? `${formatted} ${currency}` : "nothing yet"
  return (
    <div>
      {formatted && <img src={gif} alt="rain of money"/>}
      <p>
        Thanks to you, I've made {value}.
      </p>
      <ChartCard title="Thanks to you, I've made" total={value} contentHeight={160}>
        <NumberInfo
          subTitle={<span>change</span>}
          total={data.length > 0 && data[data.length - 1].y}
          status={data.length > 1 && (data[data.length - 1].y < data[data.length - 2].y) ? "down" : "up"}
          subTotal={data.length > 1 && data[data.length - 1].y - data[data.length - 2].y}
        />
        <MiniArea line height={100} data={data}/>
      </ChartCard>
    </div>
  )
}
