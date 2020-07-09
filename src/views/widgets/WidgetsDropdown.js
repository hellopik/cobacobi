import React, { useState } from 'react'
import {
  CWidgetDropdown,
  CRow,
	CButton,
  CCol,
	CPopover,
  CDropdown,
	CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const Ikon = () => {
  // render
  return (
	<CIcon size={'xl'} name={'cil-truck'}/>
	)
}
	
const Popup = () => {
	
  const [modal, setModal] = useState(false)
	
	return (
	<CCol md="4" className="py-4 text-center" >
                    <CButton 
										color="info"
										onClick={() => setModal(!modal)}
										>
										Pilih 
                    </CButton>
						<CModal show={modal} onClose={setModal}>
              <CModalHeader closeButton><CIcon size={'lg'} name={'cil-truck'}/><h5 style={{color: 'black'}}>Jenis Kegiatan</h5></CModalHeader>
							<CModalBody>
							<CButton color="primary">Keberangkatan</CButton> <CButton color="primary">Kedatangan</CButton>
              </CModalBody>

            </CModal>
						                </CCol>
								)
								
							
}


	
const WidgetsDropdown = () => {
  // render
  return (
    <CRow alignHorizontal="Center">
      <CCol md="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="SSm Pengangkut"

          footerSlot={
            <Popup/>
          }
        >
              <Ikon/>
        </CWidgetDropdown>
      </CCol>
			      <CCol md="4">
        <CWidgetDropdown
          color="gradient-danger"
          header="SSm Ekspor Impor"

          footerSlot={
            <Popup/>
          }
        >
              <Ikon/>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}
export default WidgetsDropdown
