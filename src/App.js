import React from 'react';
import './App.scss';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Title from './components/Title';


function App() {
  return (
    <div className="App">
      <main>
        <Title />
       <ScoreBoard />
      </main>
    </div>
  );
}

export default App;
