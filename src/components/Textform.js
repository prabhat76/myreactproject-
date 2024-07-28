
import React ,{useState} from 'react'

export default function Textform(props) {

    const handleUpperCaseClick = (event)=>{
        console.log("Button was clicked" + text)
       // console.alert("Button was clicked")
       let newText= text.toUpperCase();
       setText(newText)
    }

    const handleOnchange =(event)=>{
        console.log("fuck")
        setText(event.target.value)
    }
const [text, setText]= useState('Enter Texxt here');
//text="new TExxte" ---- wrong way to change the state 
//setText("New text") === coorect way to update the state 
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">{props.email}</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.textarea}</label>
  <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div>
    <button className='btn btn-primary' onClick={handleUpperCaseClick}>Convert to UpperCase</button>
</div>
    </>
  )
}


