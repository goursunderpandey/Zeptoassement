import React from 'react';
import ChipInput from './ChipInput';

const Mainpage = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row bg-white p-4 rounded shadow">
          <h1 style={{ color: "blue", textAlign: 'center', fontSize: "50px",marginBottom:"20px" }} className='App'>Pick Users</h1>
          <ChipInput />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
