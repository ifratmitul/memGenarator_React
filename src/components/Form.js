import React from 'react'

export default function Form(props) {
    return (
        <div className = "mem-form">
            <form className = "meme-form col-6" onSubmit = {props.handleSubmit}>
                    <div className = 'form-group'>
                    
                    <input
                    className = "form-control"
                    type = "text"
                    name = "topText"
                    value =  {props.data.topText}
                    placeholder="Top text"
                    onChange = {props.handleChange}
                    />
                  </div>

                  <div className = 'form-group'>

                    <input 
                        className = "form-control"
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={props.data.bottomText}
                        onChange={props.handleChange}
                    /> 
                  </div>

                  <div className = "form-group col-md-2">
                  <button className =" btn btn-info"  >Choose Random Image</button>
                  </div>


                </form>

            
        </div>
    )
}
