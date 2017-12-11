import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStudents, removeStudent, updateStudent } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'
import NewStudent from './NewStudent'

export function EditStudents(props) {

  const { submit, removeStudent, students, campuses } = props
  const currentCampus = props.match.params.name

  return (
    <div>
      <h1>Edit Current Students:</h1>
      {campuses.map(campus => {
        if (campus.name === currentCampus) {
          return (
            campus.CurrentStudents.map(student => {
              return (
                <div>
                  <h3>{student.fullName}</h3>
                  <form onSubmit={submit}>
                    <label>
                      First:
                <input type="text" name="firstName" placeholder={student.firstName} defaultValue={student.firstName} />
                    </label>
                    <label>
                      Last:
                <input type="text" name="lastName" placeholder={student.lastName} defaultValue={student.lastName} />
                    </label>
                    <label>
                      email:
                 <input type="email" name="email" placeholder={student.email} defaultValue="default@school.com" />
                    </label>
                    <label>
                      GPA:
                 <input type="number" min="0" max="4" name="gpa" placeholder={student.gpa} defaultValue={student.gpa} />
                    </label>
                    <label>
                      Campus:
                 <select name="currentCampus">
                        {campuses.map(campus => {
                          return (
                            <option value={campus.id} key={campus.id}>{campus.name}</option>
                          )
                        })}
                      </select>
                      <label>delete:</label>
                      <input name="delete" type="checkbox" defaultChecked={false} value={student.id}/>
                    </label>
                    <button type="submit">submit changes</button>
                    <Link to={`/${student.id}`}><button>view profile</button></Link>
                  </form>
                </div>
              )
            })
          )
        }
      })}
      <h5>Add New Student: </h5>
      <NewStudent />
      <br />
      <Link to={`/campus/${currentCampus}`}><button>Back to {currentCampus}</button></Link>
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
      const selectedStudent = +e.target.delete.value
      const studentInfo = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value || e.target.email.defaultValue,
        gpa: e.target.gpa.value || e.target.email.defaultValue,
        campusId: e.target.currentCampus.value
      }
      if(e.target.delete.checked === true){
        dispatch(removeStudent(selectedStudent))
        dispatch(getCampuses())
      }

      dispatch(updateStudent(selectedStudent, studentInfo))

    },
    getStudents: dispatch(getStudents()),
    getCampuses: dispatch(getCampuses())
  }
}

export default connect(mapState, mapDispatch)(EditStudents)
