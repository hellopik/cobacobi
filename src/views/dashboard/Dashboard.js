import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
	CDataTable,
  CCardFooter,
  CCardHeader,
	CEmbed,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import usersData from '../users/UsersData'
import MainChartExample from '../charts/MainChartExample.js'
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
<CEmbed
      ratio="1by1"
    >
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScPoVennZbONXlMViw3ixlSD8ZDSovy2pyiqSjhO8Fiba8GRA/viewform?embedded=true" width="640" height="50" frameborder="2" marginheight="0" marginwidth="0">Loading…</iframe>
    </CEmbed>
            </CCardBody>
          </CCard>
    </>
  )
}

export default Dashboard
