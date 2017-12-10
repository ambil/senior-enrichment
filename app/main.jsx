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
import EditStudents from './components/Students/EditStudents'

render (
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path='/' component={AllCampuses} />
        <Route exact path='/students' component={AllStudents} />
        <Route exact path='/addstudent' component={NewStudent} />
        <Route exact path='/:id' component={StudentDetail} />
        <Route exact path='/campus/:name' component={CampusDetail} />
        <Route exact path='/campus/:name/students' component={EditStudents} />

      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
)

