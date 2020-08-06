import React, { Component } from 'react'
import Form from './Form'
import Membody from './Membody'
import { exportComponentAsPNG } from "react-component-export-image";
import Uploader from '../firebase/Uploader'

export class Mem extends Component {
    constructor (){
        super()
        this.state = {
            topText : 'Top Sample Text',
            bottomText : 'Bottom sample text',
            randomImg : 'http://i.imgflip.com/1bij.jpg',
            allimg : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.componentRef = React.createRef();

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
            <div className = "Container">
                <Form data ={this.state} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>   
                <h3 className = "up">or upload your own Picture</h3>
                <Uploader/>             
                {/* <div className = "meme">
                    <img src ={this.state.randomImg} alt = ""/>
                    <h2 className = 'top'>{this.state.topText}</h2>
                    <h2 className = 'bottom'>{this.state.bottomText}</h2>
                </div> */}
                <Membody data = {this.state} ref={this.componentRef}/>
                <button className = 'but btn btn-primary'onClick={() => exportComponentAsPNG(this.componentRef)}>
                  Download Meme
                </button>
                
            </div>
        )
    }
}

export default Mem
