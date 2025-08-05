import React from 'react'
import ServicesTabs from '../WebTabs'
import WebServices from '../Web/WebServices'
import TiltedHero from '../Web/TiltedHero'
import WorkBenefits from '../Web/WorkBenefits'

function WebConnection() {
  return (
    <div>
        <WebServices/>
        <ServicesTabs/>
        <TiltedHero/>
        <WorkBenefits/>
    </div>
  )
}

export default WebConnection
