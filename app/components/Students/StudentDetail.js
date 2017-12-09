import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStudents } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'

export function StudentDetail (props) {

  const { students, campuses } = props
  const currentStudentId = Number(props.location.pathname.slice(-1))

  return(
    <div>
     {students.map(student => {
       if(student.id === currentStudentId){
         return(
           <div key={student.id}>
           <h1>{student.fullName}</h1>
           <p>{student.email}</p>
           <p>{student.gpa}</p>
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

export default connect(mapState, mapDispatch)(StudentDetail)
