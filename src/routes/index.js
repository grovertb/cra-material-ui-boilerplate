import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from '../containers/Main'
import Home from '../containers/Home'
import Contacto from '../containers/Contacto'

function Routes() {
  return (
    <Router>
      <Main>
        <Route component={Home} exact path='/' />
        <Route component={Contacto} exact path='/contacto' />
      </Main>
    </Router>
  )
}

export default Routes
