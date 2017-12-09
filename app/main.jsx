'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store'
import Navbar from './components/Navbar'
import AllCampuses from './components/Campuses/AllCampuses'
import AllStudents from './components/Students/AllStudents'
import NewStudent from './components/Students/NewStudent'
import CampusDetail from './components/Campuses/CampusDetail'
import StudentDetail from './components/Students/StudentDetail'

render (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={AllCampuses} />
        <Route exact path='/students' component={AllStudents} />
        <Route exact path='/addstudent' component={NewStudent} />
        <Route path='/campus/:id' component={CampusDetail} />
        <Route path='/student/:id' component={StudentDetail} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)



