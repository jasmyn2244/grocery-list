import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: []
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="Grocery List">
        <GroceryContainer />
        <GroceryForm />
      </header>
    </div>
  );
}

export default App;
