import React from 'react';
import Navigation from "../src/components/navigation/Navigation"
import MainLayout from "../src/pages/MainLayout"
import './App.scss';

function App() {
  return (
    <div className="App">
      <MainLayout />
      <Navigation />
    </div>
  );
}

export default App;
