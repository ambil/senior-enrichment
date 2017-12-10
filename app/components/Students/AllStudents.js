import React, { Component } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import store from '../../store'
import { getStudents, addStudent} from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'
import NewStudent from './NewStudent'

export function AllStudents (props) {

  const { students, campuses } = props;

  return (
    <div>
      <h1>All Students</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Campus</th>
          </tr>
          { students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.fullName}</td>
                <td>{student.campus.name}</td>
                <td><Link to={`/${student.id}`}><button>view profile</button></Link></td>
              </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  )
}

const mapState = state => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatch = dispatch => {
  return {
    getCampuses: dispatch(getCampuses()),
    getStudents: dispatch(getStudents())
  }
}

export default connect(mapState, mapDispatch)(AllStudents);
