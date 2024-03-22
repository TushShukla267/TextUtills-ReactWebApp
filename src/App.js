// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');

  const[text,setText] = useState('Enable Dark Mode');

  const[textColor,setTextcolor] = useState({color:'black'});

  const[alert,setalert] = useState({msg:"Hi there , this is made by Tushar J Shukla" , type:"warning"});

     const ChangeMode = ()=>{   
      if(mode === 'light'){
        setmode('dark');
        setText('Enable Light Mode')
        document.body.style.backgroundColor = 'black';
        setTextcolor({
          color:'white'
        })
        ShowAlert("Dark mode has been enable" , "success")
      }
      else{
        setmode('light');
        setText('Enable Dark Mode')
        document.body.style.backgroundColor = 'white';
        setTextcolor({
          color:'black'
        })
        ShowAlert("light mode has been enable" , "success")
      }
     }

     const ShowAlert = (meassage , type) =>{
        setalert({
          msg:meassage,
          type:type
        })
        setTimeout(() => {
          setalert(null);
        }, 2000);
     }


  return (
    <>
<Router>
    <Navbar title="TextUtils" About="About TextUtils" mode={mode} toggleMode={ChangeMode} text={text} textcolor={textColor}/>
    <Alert Alert={alert}/>
    <div className='container'>
  <Routes> 
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/" element={<TextFrom heading="Enter the Text to Analyze" textcolor={textColor} ShowAlert={ShowAlert}/>}/>
  </Routes>
   </div> 
</Router>
    </>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Tushar J Shukla
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;
