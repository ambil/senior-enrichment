/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import students from './students'
import campuses from './campuses'

export default combineReducers({students, campuses})
