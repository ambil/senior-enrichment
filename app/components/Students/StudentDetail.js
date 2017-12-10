import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStudents } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'

export function StudentDetail (props) {

  const { students, campuses } = props
  const currentStudentId = +props.match.params.id

  return(
    <div>
     {students.map(student => {
       if(student.id === currentStudentId){
         return(
           <div key={student.id}>
           <h1>{student.fullName}</h1>
           <h4>GPA: {student.gpa}</h4>
           <h4>Campus: {student.campus.name}</h4>
           <h4>Contact: {student.email}</h4>
          {campuses.map(campus => {
            if(campus.name === student.campus.name){
              return(
                <Link key={campus.id} to={`/${campus.name}`}><button>Back to {campus.name}</button></Link>
              )
            }
          })}
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
