import React from 'react';
import { Outlet } from 'react-router';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
