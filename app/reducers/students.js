import axios from 'axios'

//Actions
const GET_STUDENT = 'GET_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const REMOVE_STUDENT = 'REMOVE_STUDENT'

//Action Creators
const createGetStudentAction = student => ({ type: GET_STUDENT, student })
const createAddStudentAction = student => ({ type: ADD_STUDENT, student });
const createUpdateStudentAction = student => ({ type: UPDATE_STUDENT, student });
const createRemoveStudentAction = student => ({ type: REMOVE_STUDENT, student })

//Dispatchers
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

//Reducer
export default function reducer (students = [], action) {
  switch (action.type) {

    case GET_STUDENT:
      return action.student;

    case ADD_STUDENT:
      return [...students, action.student];

    // case UPDATE_STUDENT:
    //   return student.map(student => (action.student.id === student.id ? action.student : student
    //   ));

    // case REMOVE_STUDENT:
    //   return student.filter(student => student.id !== action.id);

    default:
      return students
  }
}
