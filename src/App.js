// import React from 'react';
// import { Counter } from './features/counter/Counter';
// import './App.css';
// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Header } from './components/Header'
// import { Example } from './components/Headertwo'
// import { Accordian } from './components/FilterAccordian'
// import { MovieTable } from './components/TableComponent'
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

function App() {
  return (
    // <div className="App">
    //   <Example />
    //   <Accordian targetId="0" />
    //   <MovieTable />
    // </div>
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
            <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;