import React from 'react'
import Button from '@material-ui/core/Button'

import Link from '../components/Link'

function App() {
  return (
    <div className='App'>
      <p>
        Edit <code>src/App.js</code> and save to reload.
        <br />
        <Button
          color='primary'
          component={Link}
          to='/contacto'
          variant='contained'>
          Go to Contacto
        </Button>
      </p>
    </div>
  )
}

export default App
