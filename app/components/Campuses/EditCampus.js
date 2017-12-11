import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { getStudents } from '../../reducers/students'
import { getCampuses, removeCampus, updateCampus } from '../../reducers/campuses'
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
            <input type="text" name="name" placeholder={campus.name} defaultValue={campus.name} require/>
          </label>
          <label>
            Change Description:
            <input type="text" name="description" defaultValue={campus.description} />
          </label>
          <label>
            Change Image URL:
            <input type="text" name="imageUrl" defaultValue="https://www.greatvaluecolleges.net/wp-content/uploads/2016/01/university-washington-cheapest-colleges-most-beautiful-college-campuses-1024x626.jpg"/>
          </label>
          <label>Delete:
            <input type="checkbox" name="delete" defaultChecked={false} value={campus.id} />
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
      const campusId = +e.target.delete.value
      const campusInfo = {
        name: e.target.name.value,
        imageUrl: e.target.imageUrl.value,
        description: e.target.description.value
      }
      if(e.target.delete.checked === true){
        dispatch(removeCampus(campusId))
        dispatch(getCampuses())
      }

      dispatch(updateCampus(campusId, campusInfo))

    },
    getStudents: dispatch(getStudents()),
    getCampuses: dispatch(getCampuses())
  }
}

export default connect(mapState, mapDispatch)(EditCampus)
