import React, { useState } from 'react'


export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handlelearClick = () => {
        // console.log("Uppercase was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Text was cleared","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    // const handleOnCopy =()=>{
    //     console.log("i am a copy");
    //     let text = document.getElementById("myBox");
    //     text.select();
    //     text.setSelectionRange(0, 9999);
    //     navigator.clipboard.writeText(text.value);

    // }

    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
        // props.showAlert("Converted to alternate string","success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('Enter text here');
    // props.showAlert("Removed Extraspaces","success");

   
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3"  >
                    <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'#042743'}}
                     id=" myBox" rows="8" ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to upercase</button>
                <button className="btn btn-danger mx-2 my-1" onClick={handleLoClick} >Convert to lowercase</button>
                <button className="btn btn-success mx-2 my-1" onClick={onAlternatingCase} >Alternate change Text</button>
                <button className="btn btn-success mx-2 my-1" onClick={handleExtraSpaces} >Remove extraspaces</button>
                <button className="btn btn-danger mx-2 my-1" onClick={handlelearClick} >Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}
                 words and {text.length} characters</p>
                <p>{0.0008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
