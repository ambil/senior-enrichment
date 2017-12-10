import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getStudents } from '../../reducers/students'
import { getCampuses } from '../../reducers/campuses'
import EditCampus from './EditCampus'

export function CampusDetail (props) {

  const { students, campuses } = props
  const currentCampus = props.match.params.name
  console.log('campuses state', campuses)

  return(
    <div>
     {campuses.map(campus => {
       if(campus.name === currentCampus){
         return(
           <div key={campus.id}>
           <h1>{campus.name}</h1>
           <img src={campus.imageUrl} />
           <p>{campus.description}</p>
           <Link to={`/campus/${campus.name}/students`}><button type="submit">Add/Edit Students</button></Link>
           <h2>Current Students:</h2>
           <table>
             <tbody>
               <tr>
                 <th>Student</th>
                 <th>GPA</th>
                 <th>Contact</th>
                 <th>Profile Link</th>
               </tr>
           {campus.CurrentStudents.map(student => {
             return (
              <tr key={student.id}>
                <td>{student.fullName}</td>
                <td>{student.gpa}</td>
                <td>{student.email}</td>
                <td><Link to={`/${student.id}`}><button>view profile</button></Link></td>
              </tr>
             )
           })
           }
           </tbody>
           </table>
           </div>
         )}
     })}
     <EditCampus currentCampus={currentCampus}/>
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
