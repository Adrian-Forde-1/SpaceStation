import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Homepage from './components/Homepage.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
