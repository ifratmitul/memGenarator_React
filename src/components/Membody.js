import React, { Component } from 'react'

export class Membody extends Component {
    
    render() {
        return (
            <div className = "meme">
                    <img src ={this.props.data.randomImg} alt = ""/>
                    <h2 className = 'top'>{this.props.data.topText}</h2>
                    <h2 className = 'bottom'>{this.props.data.bottomText}</h2>
                </div>
        )
    }
}

export default Membody
