import React, { Component } from 'react'
import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import store from '../../store'
import { getStudents, addStudent} from '../../reducers/students'

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
          { props.students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.fullName}</td>
                <td>{student.campus.name}</td>
                <td><button>delete</button></td>
              </tr>
            )})
          }
        </tbody>
      </table>
      <NavLink to='/addstudent'><button>Add Student</button></NavLink>
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
    dispatch(getStudents())
}

export default connect(mapState, mapDispatch)(AllStudents);
