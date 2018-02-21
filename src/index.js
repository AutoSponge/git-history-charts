import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './App'

const sources = {
  rizzo: {
    name: 'lonleyPlanet/Rizzo',
    url: 'https://github.com/lonelyplanet/rizzo',
    data: './data/rizzo.json'
  },
  lightning: {
    name: 'SalesForce/Lightning',
    url: 'https://github.com/salesforce-ux/design-system',
    data: './data/lightning.json'
  },
  cloudflare: {
    name: 'cloudflare/cf-ui',
    url: 'https://github.com/cloudflare/cf-ui',
    data: './data/cloudflare.json'
  },
  primer: {
    name: 'github/primer',
    url: 'https://github.com/primer/primer',
    data: './data/primer.json'
  },
  pluralsight: {
    name: 'pluralsight/design-system',
    url: 'https://github.com/pluralsight/design-system',
    data: './data/pluralsight.json'
  }
}

render(
  <Router>
    <div>
      <Route
        path='/'
        component={props => (
          <App {...props} sources={sources} defaultSource='rizzo' />
        )}
      />
    </div>
  </Router>,
  document.getElementById('root')
)
