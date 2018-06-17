import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const GoodBye = props => {
  return <div>GoodBye {props.name}</div>
}

export default class Outputer extends React.Component {
  outputNumberDiv(i) {
    return <div className={'out-' + i}>Prop is {i}!</div>
  }

  render() {
    return (
      <div>
        {this.outputNumberDiv(3)}
        {this.outputNumberDiv(2)}
        {this.outputNumberDiv(1)}
        <GoodBye name="PERSON" />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Outputer /> ,
    document.getElementById('goodbye')
  )
})
