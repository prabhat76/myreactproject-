import React, { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState('Enter Texxt here');
    const handleUpperCaseClick = () => {
        console.log("Button was clicked" + text)
        // console.alert("Button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnchange = (event) => {
        //console.log("fuck")
        ///event has been given to radthe input text over there 
        setText(event.target.value)
    }
    const handleLowerClickandcount = () => {
        let newText = text.toLowerCase();
        let count = text.length;
        console.log(newText + count)
        setText(newText + count)
    } 
    //const [text, setText]= useState('Enter Texxt here');
    //text="new TExxte" ---- wrong way to change the state 
    //setText("New text") === coorect way to update the state 
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">{props.email}</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">{props.textarea}</label>
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleUpperCaseClick}>Convert to UpperCase</button>
                </div>
                <div>
                    <button className='btn btn-primary'  onClick={handleLowerClickandcount}>Convert to LowerCase</button>
                </div>
            </div>
            <div className='continer'>
                <h2>Your text Summary</h2>
                <p>{text.length}charachets and the output is{text.toUpperCase()}</p>
                <p>
                    {0.008 * text.split("").length} Minutes Read
                </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}


