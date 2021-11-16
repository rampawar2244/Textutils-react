import "./App.css";
import Navbar from "./componants/Navbar";
import Textform from "./componants/Textform";
// import About from "./componants/About";
import React, { useState } from "react";
import Alert from "./componants/Alert"; 
// import 
// { BrowserRouter as Router, 
//   Switch,
//   Route,
//   Link 
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // const showAlert = (massage, type) =>{

  // }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "  - Dark Mode";
      // setInterval(() => {
      //   document.title = '  - Dark Mode is on';
      // }, 2000);
      // setInterval(() => {
      //   document.title = '  - Dark Mode is off';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "REACT HOME - Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert='this is the alert' />
        <div className='container'> 
          {/* <Switch>
            <Route exact path='/About'>
              <About />
            </Route> */}
            {/* <Route exact path='/'> */}
              <Textform heading='Enter the text here' mode={mode} />
            {/* </Route>
          </Switch>
        
      </Router> */}
      </div>
    </>
  );
}

export default App;
