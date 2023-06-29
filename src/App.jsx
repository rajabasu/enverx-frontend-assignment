import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login, Dashboard } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
