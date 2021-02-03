import React from 'react';
import Board from './components/Board';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <div className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card one</p>
          </Card>
          <Card id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Card>
          <Card id="card-3" className="card" draggable="true">
            <p>Card three</p>
          </Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-4" className="card" draggable="true">
            <p>Card four</p>
          </Card>
          <Card id="card-5" className="card" draggable="true">
            <p>Card five</p>
          </Card>
        </Board>
      </div>
    </div>
  );
}

export default App;
