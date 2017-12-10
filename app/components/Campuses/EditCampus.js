import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getStudents } from '../../reducers/students'
import { getCampuses, removeCampus } from '../../reducers/campuses'
import { currentCampus } from './CampusDetail'

export function EditCampus(props) {

  const { submit, currentCampus, students, campuses } = props

  return (
    <div>
    <h2>Edit Campus</h2>
    <form onSubmit={submit}>
      {campuses.map(campus => {
        if(campus.name === currentCampus){
          return(
          <div key={campus.id}>
          <label>
            Change Name:
            <input type="text" name="name" placeholder={campus.name} />
          </label>
          <label>
            Change Description:
            <input type="text" name="description" placeholder={campus.description} />
          </label>
          <label>
            Change Image URL:
            <input type="text" name="imageUrl" placeholder={campus.imageUrl} />
          </label>
          <label>Delete:
            <input type="checkbox" name="delete" value={campus.id} />
          </label>
          <button type="submit">Submit Changes</button>
          </div>
          )
        }
      })}
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
      return(
        dispatch(removeCampus(e.target.delete.value)),
        dispatch(getCampuses())
      )
    },
    getStudents: dispatch(getStudents()),
    // getCampuses: dispatch(getCampuses())
  }
}

export default connect(mapState, mapDispatch)(EditCampus)
