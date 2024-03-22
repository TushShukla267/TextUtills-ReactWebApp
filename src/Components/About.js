import React, { useState } from 'react'

export default function About() {

    const [mystyle, setmystyle] = useState({
        color:'black',
        backgroundColor:'white',
    });

    const [text, setText] = useState("Enable Dark mode");

    const ChangeMystyle = () =>{
        console.log("btn was clicked");
        if(mystyle.color === 'black')
        {
            setmystyle({
                color:'white',
                backgroundColor:'black',
                border : '1px solid white'
            });

            setText("Enable light Mode");
        }

        else{
            setmystyle({
                color:'black',
                backgroundColor:'white',
            });
        }

    }

  return (
    <div className='container' style={mystyle}>
        <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
      <strong>Analyze Your text</strong>  
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong><u>Textutils</u> gives you a way to analyze your text quickly and efficiently. Be it word count, character count </strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
      <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong><u>TextUtils</u> is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
      <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This word counter software works in any web browsers such as <u>Chrome, Firefox, Internet Explorer, Safari, Opera</u>. It suits to count characters in <u>facebook, blog, books, excel document, pdf document, essays, etc</u>.</strong> 
      </div>
    </div>
  </div>
</div>
<div className='my-5'>
    <button type="button" className="btn btn-primary" onClick={ChangeMystyle}>{text}</button>
</div>
</div>
  )
}
