'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Navbar from './components/Navbar'
import AllCampuses from './components/Campuses/AllCampuses'
import AllStudents from './components/Students/AllStudents'

render (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={AllCampuses} />
        <Route path='/students' component={AllStudents} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)



