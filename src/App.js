import React from 'react';
import './App.scss';
import Employees from './employees/Employees';

function App() {
  return (
    <>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Mas global</h1>
            <h2 className='subtitle'>Technical test Front end</h2>
          </div>
        </div>
      </section>

      <Employees></Employees>
    </>
  );
}

export default App;
