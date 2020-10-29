import React from "react";
import './App.css';
import { Home } from './components/Home';
import { Header } from './components/Header';

function App() {
  return (
    <div className="app">
      <div className="app-main-container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;