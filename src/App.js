import React from 'react';
import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const App = () => {  
  return (
    <div className="Application">
      <NewGrudge />
      <Grudges />
    </div>
  );
}

export default App;