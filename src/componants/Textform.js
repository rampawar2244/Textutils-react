import React, { useState } from "react";

export default function Textform(props) {
const handleUpClick = () => {
let newText = text.toUpperCase();
setText(newText);
};

const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    };

const handleClearClick = () => {
    let newText = '';
    setText(newText);
    };

    const handleUniverseClick = () => {
        var newText = text.toLocaleLowerCase();
        var newText1 = text.toLocaleUpperCase();
        setText(newText,newText1);
        };
const handleOnChange = (event) => {
// console.log("On change");
setText(event.target.value);
};
const [text, setText] = useState("");
return (
    <>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
    <textarea className='form-control' value={text} onChange={handleOnChange} 
    style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} 
     id='myBox' rows='8'></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick}> Clear text</button>
    <button className='btn btn-primary mx-2' onClick={handleUniverseClick}> Inverse text</button>
</div>
<div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Summry</h1>
    <p>{text.split(" ").length} words {text.length}</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter to somthing to preview it here"}</p>
</div>
</>
);
}
