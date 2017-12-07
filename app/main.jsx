'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import Navbar from './navbar'



render (
  <Provider store={store}>
    <Navbar />
  </Provider>,
  document.getElementById('main')
)
