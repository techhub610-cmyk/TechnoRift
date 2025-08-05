import React from 'react'
import MarketingService from '../MarketingService'
import MarketingTabs from '../MarketingTabs'
import MarketingTilt from '../MarketingTilt'
import MarketingBenefits from '../MarketingBenefits'

function MarketingConnection() {
  return (
    <div>
      <MarketingService/>
      <MarketingTabs/>
      <MarketingTilt/>
      <MarketingBenefits/>
    </div>
  )
}

export default MarketingConnection
