import React, { Component } from 'react';
import ListGlasses from './ListGlasses';
import "./style.css";

export default class GlassesApp extends Component {
  render() {
    return (
      <div className="glassesApp" >
        
        <div>
          <ListGlasses />
        </div>
      </div>
    )
  }
}
