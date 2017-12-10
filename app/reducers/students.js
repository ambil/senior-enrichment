import axios from 'axios'

//Actions
const GET_STUDENT = 'GET_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

//Action Creators
export const createGetStudentAction = student => ({ type: GET_STUDENT, student })
export const createAddStudentAction = student => ({ type: ADD_STUDENT, student });
export const createUpdateStudentAction = student => ({ type: UPDATE_STUDENT, student });
export const createRemoveStudentAction = student => ({ type: REMOVE_STUDENT, student })

//Thunks
export function getStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then((students) => {
        dispatch(createGetStudentAction(students))
      })
      .catch(err => console.error(err))
  }
}

export function addStudent (student) {
  return function thunk (dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = createAddStudentAction(newStudent)
        dispatch(action)

      })
      .catch(err => console.error(err))
  }
}

export function updateStudent (studentId) {
  return function thunk (dispatch) {
    return axios.put(`/api/students/${studentId}`)
      .then(res => dispatch(createUpdateStudentAction(res.data)))
      .catch(err => console.error(`Student update for studentID: ${studentId} unsuccessful`, err))
  }
}

export function removeStudent (studentId) {
  return function thunk (dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .catch(err => console.error(`Could not remove: ${studentId}`, err))
  }
}

//Reducer
export default function reducer (students = [], action) {
  switch (action.type) {

    case GET_STUDENT:
      return action.student;

    case ADD_STUDENT:
      return [...students, action.student];

    case UPDATE_STUDENT:
      return student.map(student => (action.student.id === student.id ? action.student : student
      ));

    case REMOVE_STUDENT:
      return students.filter(student => student.id !== action.id);

    default:
      return students
  }
}
