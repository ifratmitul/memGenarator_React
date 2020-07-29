import React, { Component } from 'react'

export class Mem extends Component {
    constructor (){
        super()
        this.state = {
            topText : '',
            bottomText : '',
            randomImg : 'http://i.imgflip.com/1bij.jpg',
            allimg : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target

        this.setState({ [name] : value})

    }

    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allimg.length)
        const randMemeImg = this.state.allimg[randNum].url
        this.setState({ randomImg: randMemeImg })
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
            <div>
                <form className = "meme-form col-6" onSubmit = {this.handleSubmit}>
                    <div className = 'row col-md-5'>
                    <label>Enter Top text</label>
                    <input
                    type = "text"
                    name = "topText"
                    value =  {this.state.topText}
                    placeholder="Top text"
                    onChange = {this.handleChange}
                    />
                  </div>

                  <div className = 'row col-md-5'>
                    <label>Enter Bottom Text</label>
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                  </div>
                  <button className ="btn btn-primary"  >Generate Meme</button>

                </form>
                
                <div className = "meme">
                    <img src ={this.state.randomImg} alt = ""/>
                    <h2 className = 'top'>{this.state.topText}</h2>
                    <h2 className = 'bottom'>{this.state.bottomText}</h2>
                </div>
                
            </div>
        )
    }
}

export default Mem
