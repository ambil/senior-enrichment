import React, { Component } from 'react'
import { Route } from 'react-router';
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
          <img src={campus.imageUrl} key={campus.id}></img>
        )
        })
      }
    </div>
  )
}

const mapState = state => {
  return {
    campuses: state.campuses
  }
}

const mapDispatch = dispatch => {
  return dispatch(getCampuses())
}

export default connect(mapState, mapDispatch)(AllCampuses);
