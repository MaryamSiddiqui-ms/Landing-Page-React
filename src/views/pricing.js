import React from 'react'

import { Helmet } from 'react-helmet'

import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - Landing Page</title>
        <meta property="og:title" content="Pricing - Landing Page" />
      </Helmet>
    </div>
  )
}

export default Pricing
