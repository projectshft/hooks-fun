import React from 'react';
import GreetingClass from './components/class-greeting';
import GreetingFunc from './components/func-greeting';

function App() {
  return (
    <div className="App">
      <GreetingClass />
      {/* <GreetingFunc /> */}
    </div>
  );
}

export default App;
