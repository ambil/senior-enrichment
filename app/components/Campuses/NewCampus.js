import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addStudent, getStudents } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'

export function NewStudentEntry(props) {

  const { listStudents, submit, students, campuses } = props

  return (
    <form onSubmit={submit}>
      <label>
        Campus Name:
        <input type="text" label="name" placeholder="Enter New Campus" required />
      </label>
      <label>
        Description:
        <input type="text" label="description" placeholder="What's the place like?" required />
      </label>
      <label>
        Image URL:
        <input type="text" label="imageUrl" placeholder="image url" />
      </label>
      <button>Submit</button>
    </form>
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
