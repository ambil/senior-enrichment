import axios from 'axios'
//Actions
const GET_CAMPUS = 'GET_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

//Action Creators
const createGetCampusAction = campus => ({ type: GET_CAMPUS, campus })
const createAddCampusAction = campus => ({ type: ADD_CAMPUS, campus });
const createUpdateCampusAction = campus => ({ type: UPDATE_CAMPUS, campus });
const createRemoveCampusAction = campus => ({ type: REMOVE_CAMPUS, campus })

//Thunks
export function getCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then((campuses) => {
        dispatch(createGetCampusAction(campuses))
      })
      .catch(err => console.err(err))
  }
}

export function addCampus (campus) {
  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = createAddCampusAction(newCampus)
        dispatch(action)
      })
      .catch(err => console.error(err))
  }
}

export function removeCampus (campusId) {
  return function thunk (dispatch) {
    return axios.delete(`/api/campuses/${campusId}`)
      .catch(err => console.error(`Could not remove: ${campusId}`, err))
  }
}

//Reducer
export default function reducer (campuses = [], action) {
  switch (action.type) {

    case GET_CAMPUS:
      return action.campus;

    case ADD_CAMPUS:
      return [...campuses, action.campus];

    case UPDATE_CAMPUS:
      return campus.map(campus => (action.campus.id === campus.id ? action.campus : campus
      ));

    case REMOVE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.id);

    default:
      return campuses
  }
}

