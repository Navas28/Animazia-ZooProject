import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Cancel = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout( () => navigate("/"),5000)
        return () => clearTimeout(timer)
    },[navigate])
  return (
    <div>
        <h1>Payment Canceled</h1>
        <p>Your payment was not completed. Try again if needed.</p>
    </div>
  )
}

export default Cancel