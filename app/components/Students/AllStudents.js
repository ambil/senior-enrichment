import React, { Component } from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import store from '../../store'
import { getStudents, addStudent} from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'

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
                <td><Link to={`/student/${student.id}`}><button>edit</button></Link></td>
              </tr>
            )})
          }
        </tbody>
      </table>
      <Link to='/addstudent'><button>Add Student</button></Link>
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
    getStudents: dispatch(getStudents()),
    getCampuses: dispatch(getCampuses())
  }
}

export default connect(mapState, mapDispatch)(AllStudents);
