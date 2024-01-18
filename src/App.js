import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" element={AboutPage} />  */}
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;