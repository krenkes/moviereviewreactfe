import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
// import { Greet } from './components/Greet'
import { Message } from './components/Message'
import { Header } from './components/Header'
import { Example } from './components/Headertwo'
import { Accordian } from './components/FilterAccordian'

function App() {
  return (
    <div className="App">
      <Example />
      <Accordian targetId="0"/>
      {/* <Header /> */}
      {/* <Greet name='Bruce' heroName='Batman'/>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Kevin' heroName= 'Dr. K'>
        <p>This is child props</p>
      </Greet> */}
      <Message />
    </div>
  );
}

export default App;
