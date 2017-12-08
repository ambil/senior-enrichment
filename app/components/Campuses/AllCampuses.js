import React, { Component } from 'react'
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import store from '../../store'
import { getCampuses } from '../../reducers/campuses'

export function AllCampuses (props) {

  const { campuses } = props;

  return (
    <div>
      { props.campuses.map((campus) => {
        return(
          <div key={campus.id}>
            <h2>{campus.name}</h2>
            <img src={campus.imageUrl}></img>
          </div>
        )
        })
      }
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
  return dispatch(getCampuses())
}

export default connect(mapState, mapDispatch)(AllCampuses);
