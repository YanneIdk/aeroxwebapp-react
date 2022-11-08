import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Error404 from './views/error404'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Error404} exact path="/error404" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
