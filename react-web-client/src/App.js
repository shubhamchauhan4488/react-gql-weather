import React from "react";
import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
      </header>
    </div>
  );
}

export default App;