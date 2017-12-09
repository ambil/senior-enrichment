import React from 'react'
import { connect } from 'react-redux'
import { addStudent } from '../../reducers/students'

export function NewStudentEntry(props) {

    const { submit, students } = props

    return (
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
      <button type="submit">Enter</button>
    </form>
    )
}

const mapState = state => {
  return {
    students: state.students
  }
}

const mapDispatch = dispatch => {
  return {
    submit: function (e) {
      e.preventDefault()
      const student = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value
      }
      dispatch(addStudent(student))
    }
  }
}

export default connect(mapState, mapDispatch)(NewStudentEntry)
