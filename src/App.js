import React from 'react';
import './App.css';
import cat3 from "./cat3.jpg";
import ReactPlayer from 'react-player';

function App() {
  const newLocal = <br></br>;
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

          {newLocal}
<img className="image"src={cat3} alt="secondpicture"/> 

<img className="image" src="/images/cat1.jpg" alt='profilepicture'/>
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
