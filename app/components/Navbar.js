import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

export default function Navbar () {
  return(
    <div>
      <NavLink to='/'>Home </NavLink>
      <NavLink to='/students'>Students</NavLink>
    </div>
  )
}
