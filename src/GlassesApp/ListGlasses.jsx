import React, { Component } from 'react'

export default class ListGlasses extends Component {

    // todo: Render glasses list 
    renderListGlasses = () => {
        return this.props.listGlasses.map((item, index) => {
            return (
                <div className='col-2' key={index}>
                    <div className='card'>
                        <img src={item.url} alt='...' className='w-75' />
                    </div> 
                </div>
            )
        })
    }

    render() {

        return (
            <div className='glassesCollection row'>
                {this.renderListGlasses()}
            </div>
        )
    }
}
