import React, { Component } from 'react';
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader
} from '@coreui/react'
import Tabletop from 'tabletop';
const fields = ['Timestamp','Samaran', 'Curhatan']
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1Onie_ohbW4MnD2Xplo88NIFjDA3llDhkiow2MdMhVHo',
			callback: googleData => {
        this.setState({
          data: googleData
        })
			console.log("google sheet data --->", googleData)
			},
      simpleSheet: true
    })
  }
render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wall of Curhat</h1>
        </header>
        <div>
          {
            data.map(obj => {	
              return (
							<CCard>
          <CCardHeader>
           {`Nama Samaran : ${obj.Nama}`}
          </CCardHeader>
          <CCardBody>
            {obj.Isi}
          </CCardBody>
          <CCardFooter>
            {`Waktu : ${obj.Waktu}`}
          </CCardFooter>
        </CCard>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;