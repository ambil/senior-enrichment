import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getStudents } from '../../reducers/students'
import { getCampuses, addCampus } from '../../reducers/campuses'

export function NewCampusEntry(props) {

  const { submit, students, campuses } = props

  return (
    <form onSubmit={submit}>
      <label>
        Campus Name:
        <input type="text" name="name" placeholder="Enter New Campus" required />
      </label>
      <label>
        Description:
        <input type="text" name="description" placeholder="What's the place like?" required />
      </label>
      <button type="submit">Submit</button>
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
      const campus = {
        name: e.target.name.value,
        description: e.target.description.value
      }
      dispatch(addCampus(campus))
      dispatch(getCampuses())
    },
    getStudents: dispatch(getStudents()),
    getCampuses: dispatch(getCampuses())
  }
}

export default connect(mapState, mapDispatch)(NewCampusEntry)
