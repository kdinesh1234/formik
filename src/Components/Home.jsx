import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col text-center'>
          <h1 className='h1'>Welcome to Limray Library</h1>
          <p className='p'>Manage your books with ease!</p>
          <div className="tg">
            <button className='btn btn-primary m-2'><Link to={`/dashboard`}>Dashboard</Link></button>
          </div>
          {/* Apply Bootstrap and Tailwind CSS classes to make the image responsive */}
          <img className='w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto' src='https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png' alt='Library Management System'/>
        </div>
      </div>
    </div>
  );
};

export default Home;