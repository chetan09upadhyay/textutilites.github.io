


import React, { useState } from 'react'

export default function About(props) {

     
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }


    return (

        <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743'}} >
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item"  >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            It is shown by default, until the collapse plugin adds the appropriate classes.                          </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle} >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            It is hidden by default, until the collapse plugin adds the appropriate classes
                            that we use to style each element. These classes control the overall appearance.                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
                            These classes control the overall appearance, as well as the showing and hiding via CSS transitions.                         </div>
                    </div>
                </div>
            </div>
             
        </div>

    )
}

