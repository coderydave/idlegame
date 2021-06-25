import React from 'react';
import Navigation from "../src/components/navigation/Navigation";
import MainLayout from "../src/pages/MainLayout";
import { BrowserNotification } from "../src/services/BrowserNotification";

import './App.scss';

function App() {
  /* BrowserNotification() //browser notification kérés */

  return (
    <div className="App">
      <Navigation />
      <MainLayout />
    </div>
  );
}

export default App;
