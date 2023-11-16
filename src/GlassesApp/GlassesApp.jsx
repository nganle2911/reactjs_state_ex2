import React, { Component } from 'react'
import { glassesArr } from './data'
import ListGlasses from './ListGlasses'

import "./style.css";

export default class GlassesApp extends Component {

  // * STATE 
  state = {
    glassesList: glassesArr
  }

  render() {
    return (
      <div className='glassesApp'>
        <div className='container'>
          <header className='pt-3 pb-5'>
            <p>try glasses app online</p>
          </header>
          <div className='models row mb-5'>
            <div className='model_left col-6'>
              <img src='./glassesImage/model.jpg' className='w-50' alt='...' />
            </div>
            <div className='model_right col-6'>
              <img src='./glassesImage/model.jpg' className='w-50' alt='...' />
            </div>
          </div>

          <ListGlasses listGlasses={this.state.glassesList} />
        </div>
      </div>
    )
  }
}
