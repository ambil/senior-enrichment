import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addStudent, getStudents } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'

export function NewStudentEntry(props) {

  const { listStudents, submit, students, campuses } = props

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          First:
        <input
            type="text"
            name="firstName"
            placeholder="Your name here"
            required />
        </label>
        <label>
          Last:
        <input
            type="text"
            name="lastName"
            placeholder="Your name here"
            required />
        </label>
        <label>Campus:
        <select name="currentCampus">
          {campuses.map(campus => {
            return (
              <option value={campus.id} key={campus.id}>{campus.name}</option>
            )
          })}
        </select>
        </label>
        <button type="submit">Enter</button>
      </form>
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
    submit: function (e) {
      e.preventDefault()
      const student = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        campusId: e.target.currentCampus.value
      }
      dispatch(addStudent(student))
    },
    getStudents: dispatch(getStudents()),
    getCampuses: dispatch(getCampuses())
  }
}

export default connect(mapState, mapDispatch)(NewStudentEntry)
