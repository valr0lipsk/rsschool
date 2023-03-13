import Main from './pages/Main';
import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
