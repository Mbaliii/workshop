import React, { useState } from 'react';
import './App.css';

function App() {
  // below is for the name
  const [userInput, setUserInput] = useState('');
  const [displayText, setDisplayText] = useState('');

  //  below is for the second one
  const [textInput, setTextInput] = useState('');
  const [setText, setSetText] = useState('');

  // below is for the third one
  const [Textinput, setTextinput] = useState('');
  const [Settext, setSettext] = useState('');


  const handlesubmit = (e) => {
    e.preventDefault();
    setSettext(Textinput);
    setTextinput('');
  }


  const HandleSubmit = (e) => {
    e.preventDefault();
    setSetText(textInput);
    setTextInput('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(userInput);
    setUserInput('');
  };



  return (
    <div className="background-image" >
      <div className="App">

        <h1>User Input App</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter you Name:
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {displayText && <p>You have entered:  {displayText}</p>}


        <form onSubmit={handlesubmit}>
          <label>
            Enter you Surname:
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {setText && <p>You have entered: {setText}</p>}


        <form onSubmit={HandleSubmit}>
          <label>
            Enter Your Age:
            <input
              type="text"
              value={Textinput}
              onChange={(e) => setTextinput(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {Settext && <p>You have entered: {Settext}</p>}
      </div>
    </div>
  );
}


export default App;
