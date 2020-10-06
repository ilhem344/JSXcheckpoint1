import React from 'react';
import './App.css';
import cat3 from "./cat3.jpg";
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>
<div></div>
<img className="image"src={cat3} ></img>
<div></div>
<img className="image" src="/images/cat1.jpg"></img>
<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='300px'
          height='300px'
        />
      </div>

</div>


      </header>
    </div>
  );
}

export default App;
