import React from 'react'
import ManagementService from '../ManagementService'
import ManagementTabs from '../ManagementTabs'
import ManagementTilt from '../ManagementTilt'
import ManagementBenefits from '../ManagementBenefits'

function ManagementConnection() {
  return (
    <div>
      <ManagementService/>
      <ManagementTabs/>
      <ManagementTilt/>
      <ManagementBenefits/>
    </div>
  )
}

export default ManagementConnection
