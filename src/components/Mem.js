import React, { Component } from 'react'

export class Mem extends Component {
    constructor (){
        super()
        this.state = {
            topText : '',
            bottomText : '',
            randomImg : '',
            allimg : []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {value} = event.target

        this.setState({})

    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then( response => {
            const {memes} = response.data
            this.setState({allimg : memes})
        })
    }
    
    render() {
        

        return (
            <div className = "row">
                <form className = "meme-form col-6">
                    <div className = 'row col-md-5'>
                    <label>Enter Top text</label>
                    <input
                    type = "text"
                    name = "topText"
                    value =  {this.state.topText}
                    handleChange = {this.handleChange}
                    />
                  </div>

                  <div className = 'row col-md-5'>
                    <label>Enter Bottom Text</label>
                    <input
                    type = "text"
                    name = "bottomText"
                    value =  {this.state.bottomText}
                    handleChange = {this.handleChange}
                    />
                  </div>
                  <button className ="btn btn-primary" >Generate Meme</button>

                </form>
                
            </div>
        )
    }
}

export default Mem
