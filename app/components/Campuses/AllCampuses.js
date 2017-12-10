import React, { Component } from 'react'
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import store from '../../store'
import { getCampuses } from '../../reducers/campuses'
import NewCampus from './NewCampus'

export function AllCampuses (props) {

  const { campuses } = props;

  return (
    <div>
      { props.campuses.map((campus) => {
        return(
          <div key={campus.id}>
            <NavLink to={`/${campus.name}`}><h2>{campus.name}</h2></NavLink>
          </div>
        )
        })
      }
      <h5>Add Campus: </h5>
      <NewCampus />
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
    getCampuses: dispatch(getCampuses())
  }
}

export default connect(mapState, mapDispatch)(AllCampuses);
