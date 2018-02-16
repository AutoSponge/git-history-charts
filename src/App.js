import React from 'react'
import Nav from './Nav'
import Chart from './Chart'

export default class App extends React.Component {
  handleChange (props) {
    const sources = props.sources
    const key = props.location.hash.substring(1)
    const source = sources[key] || sources[props.defaultSource]

    fetch(source.data)
      .then(response => response.json())
      .then(data => this.setState({ source, data }))
  }

  componentDidMount () {
    this.handleChange(this.props)
  }

  componentWillReceiveProps (props) {
    this.handleChange(props)
  }

  render () {
    return (
      <div>
        <h1>Design System Contributions</h1>
        <Nav {...this.props} />
        <Chart {...this.state} />
      </div>
    )
  }
}
