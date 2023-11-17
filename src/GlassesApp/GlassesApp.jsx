import React, { Component } from 'react'
import { glassesArr } from './data'

import "./style.scss";

export default class GlassesApp extends Component {

  // * STATE 
  state = {
    glassesList: glassesArr,
    glassesDetail: glassesArr[0]
  };

  // todo: render glasses list 
  renderGlassesList = () => {
    return this.state.glassesList.map((item, index) => {
      return (
        <div className='col-2' key={index}>
          <div className='card'>
            <img onClick={() => {
              this.chooseGlasses(item);
            }} src={item.url} alt='...' className='w-75' />
          </div>
        </div>
      )
    })
  }

  // todo: choose glasses 
  chooseGlasses = (itemClicked) => {
    this.setState({
      glassesDetail: itemClicked
    })
  };

  render() {
    const { id, name, url, price, desc } = this.state.glassesDetail;

    return (
      <div className='glassesApp'>
        <div className='container'>
          <header className='pt-3 pb-3'>
            <p>try glasses app online</p>
          </header>
          <div className='models row mb-5'>
            <div className='model_withoutGlasses col-6'>
              <img src='./glassesImage/model.jpg' width={350} alt='...' />
            </div>
            <div className='model_withGlasses col-6'>
              <div className='model_right'>
                <img src='./glassesImage/model.jpg' width={350} alt='...' />
                <div className='model_glasses'>
                  <img src={url} alt='...' />
                </div>
                <div className='model_content'>
                  <h5>{name} - ${price}</h5>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='glassesCollection row'>
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    )
  }
}
