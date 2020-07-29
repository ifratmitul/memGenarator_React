import React from 'react'

export default function Form(props) {
    return (
        <div>
            <form className = "meme-form col-6" onSubmit = {props.handleSubmit}>
                    <div className = 'row col-md-5'>
                    <label>Enter Top text</label>
                    <input
                    type = "text"
                    name = "topText"
                    value =  {props.data.topText}
                    placeholder="Top text"
                    onChange = {props.handleChange}
                    />
                  </div>

                  <div className = 'row col-md-5'>
                    <label>Enter Bottom Text</label>
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={props.data.bottomText}
                        onChange={props.handleChange}
                    /> 
                  </div>
                  <button className ="btn btn-primary"  >Generate Meme</button>

                </form>

            
        </div>
    )
}
