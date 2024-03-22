import React, { useState } from 'react';//for using state

import PropTypes from 'prop-types'//use impt for this line

export default function TextFrom(props) {
    const [text, setText] = useState("Enter the Text here");//this is use to access the state and store it in a variable text and you can change the state by function setTest and useState is the default state

    //function for handling on click function to uppercase
    const HandleUpClick =()=>{
        console.log("Btn was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.ShowAlert("Convered To UpperCase!" , "primary")
    }
    //function for handling on click function to lowercase
    const HandleLoClick =()=>{
        console.log("Btn was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.ShowAlert("Convered To LowerCase!" , "primary")
    }
    //function to copy the Text to clipboard
    const CopytoClipboard = () =>{
        navigator.clipboard.writeText(text);
        props.ShowAlert("Copied to Clipboard!" , "primary")
    }
    //function for handling on click function to lowercase
    const HandleClearClick =()=>{
        console.log("Btn was Clicked");
        let newText = "";
        setText(newText)
        props.ShowAlert("Text has been Cleared" , "primary")
    }
    //function for halding changes to the text field like clearing or adding some new text because pf the changes made we get event onject and we can set the text values same as that object by using setText(event.target.value)
    const HandleOnchange =(event)=>{
        console.log("On change");
        setText(event.target.value);    
    }
    // let i;
    // let j=0;
    // let email = "";
    // const EmailFinder =() =>{
    //     for(i=0;i<=text.length;i++)
    //     {
    //         if(text.charAt(i) === '@'){
    //             while(text.charAt(j) === " "){
    //                 email = email + j;;
    //                 j++;
    //             }
    //         }
    //     }
    // }
    //
  return (
    //Main code for Textarea
    //write function name inside{}
    //use value={text}to acccess or change the value of the textarea
    <>
    <div className='container'>
        <h1 className='mb-4' style={props.textcolor}>{props.heading}</h1>
        <div className="mb-3" style={props.textcolor}>
              <textarea className="form-control" id="mybox" rows="8" value={text} onChange={HandleOnchange}></textarea>
        </div>
          <button disabled={text.length === 0} className="btn btn-outline-primary mx-4 my-1" onClick={HandleUpClick} style={props.textcolor}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className="btn btn-outline-primary mx-4 my-1" onClick={HandleLoClick} style={props.textcolor}>Convert to Lowercase</button>
          <button disabled={text.length === 0} className="btn btn-outline-primary mx-4 my-1" onClick={CopytoClipboard} style={props.textcolor}>Copy Text</button>
          <button disabled={text.length === 0} className="btn btn-outline-primary mx-4 my-1" onClick={HandleClearClick} style={props.textcolor}>Clear Text</button>
          {/* <button className="btn btn-outline-primary mx-4" onClick={EmailFinder}>Extract Email</button> */}
    </div>
    <div className='container my-5' style={props.textcolor}>
    <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text to preview it here"}</p>
        <h1>Your Text Summarry</h1>
        <p>Total words :{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Total character :{text.length}</p>
        <p> How much time will you need to read this :{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008}</p>
        {/* <h3>Email Id in Text Are:-</h3>
        <p>{email}</p> */}
    </div>
    </>
  )}

TextFrom.prototype = {
    heading :PropTypes.string
}

