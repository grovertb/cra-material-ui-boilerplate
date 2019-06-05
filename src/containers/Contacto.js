import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import Link from '../components/Link'

class Contacto extends Component {
  render() {
    return (
      <div>
        Contacto
        <br />
        <Button
          color='secondary'
          component={Link}
          to='/'
          variant='contained'>
          Go to Home
        </Button>
      </div>
    )
  }
}

export default Contacto
