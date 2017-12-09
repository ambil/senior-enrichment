import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStudents } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'

export function CampusDetail (props) {

  const { students, campuses } = props
  const currentCampus = props.match.params.name

  return(
    <div>
     {campuses.map(campus => {
       if(campus.name === currentCampus){
         return(
           <div key={campus.id}>
           <h1>{campus.name}</h1>
           <img src={campus.imageUrl} />
           <p>{campus.description}</p>
           <h2>Current Students:</h2>
           <ul>
           {campus.CurrentStudents.map(currentStudent => {
             return (
              <li key={currentStudent.id}>{currentStudent.fullName}</li>
             )
           })
           }
           </ul>
           <Link to='/students'><button type="submit">Edit Students</button></Link>
           </div>
         )}
     })}
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

export default connect(mapState, mapDispatch)(CampusDetail)
