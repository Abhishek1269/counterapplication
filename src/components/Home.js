import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container text-center mt-5'>
      <h1 className='mb-4'>Home Page</h1>
      <Link to="/counter" className="btn btn-primary">Go to Counter</Link>
    </div>
  );
}