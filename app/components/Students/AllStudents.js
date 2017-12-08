import React, { Component } from 'react'
import { Route } from 'react-router';
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import store from '../../store'
import { getStudents} from '../../reducers/students'

export function AllStudents (props) {

  const { students } = props;

  return (
    <h2>TESTING</h2>
  )
}

const mapState = state => {
  return {
    campuses: state.students
  }
}

const mapDispatch = dispatch => {
  return dispatch(getStudents())
}

export default connect(mapState, mapDispatch)(AllStudents);
