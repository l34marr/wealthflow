import React, { Component } from 'react';

import { Layout, Header } from './Layout.components';
import CardGameBoard from './CardGameBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Layout>
        <CardGameBoard />
      </Layout>
      </header>
    </div>
  );
}

export default App;
