import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStudents } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'

export function EditStudents (props) {

  const { submit, students, campuses } = props
  const currentCampus = props.match.params.name

  return(
    <div>
     {campuses.map(campus => {
       if(campus.name === currentCampus){
         return(
         campus.CurrentStudents.map(student => {
           return(
             <div>
             <h1>{student.fullName}</h1>
             <form>
               <label>
                First:
                <input type="text" name="firstName" placeholder={student.firstName} />
               </label>
               <label>
                Last:
                <input type="text" name="lastName" placeholder={student.lastName} />
               </label>
               <label>
                 email:
                 <input type="text" name="email" placeholder={student.email} />
               </label>
               <label>
                 GPA:
                 <input type="number" name="gpa" placeholder={student.gpa} />
               </label>
               <button>submit changes</button>
             </form>
             </div>
           )
         })
         )
       }
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

export default connect(mapState, mapDispatch)(EditStudents)
