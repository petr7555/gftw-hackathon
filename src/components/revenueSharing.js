import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet/es/Helmet"

// Define the payment pointers and assign each one a weight.
// If the weights total 100, then they represent the percentage each pointer gets.
const pointers = {
  "$alice.example": 50,
  "$bob.example": 40,
  "$connie.example": 9.5,
  "$dave.example": 0.5,
}

// Choose pointer randomly based on the values above
function pickPointer() {
  const sum = Object.values(pointers).reduce((sum, weight) => sum + weight, 0)
  let choice = Math.random() * sum

  for (const pointer in pointers) {
    const weight = pointers[pointer]
    if ((choice -= weight) <= 0) {
      return pointer
    }
  }
}

export const RevenueSharing = () => {
  const [wallet, setWallet] = useState()

  useEffect(() => {
    setWallet(pickPointer())
  }, [])

  return (
    <div>
      {/*Insert the chosen pointer to <head>*/}
      <Helmet>
        <meta name="monetization" content={wallet}/>
      </Helmet>
      <p>Current wallet being used: {wallet}</p>
    </div>
  )
}

