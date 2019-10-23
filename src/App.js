import React from 'react';

// React Router
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}/>
    </BrowserRouter>
  );
}

export default App;
