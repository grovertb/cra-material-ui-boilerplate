import React, { Component, Fragment } from 'react'

class Main extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default Main
