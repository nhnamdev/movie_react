import React from 'react';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <div
      style={{ backgroundColor: 'black' }}
      className="header p-4 bg-black text-white flex items-center justify-between"
    >
      <div className="text-2xl font-bold space-x-4 flex items-center">
        <h1
          className=" uppercase font-bold text-red-500"
          style={{ color: 'red', marginLeft: '16px' }}
        >
          <img
            style={{ width: '120px', height: '50px' }}
            src={logo}
            alt="Logo"
          />
        </h1>
        <nav>
          <ul
            style={{ padding: '1rem', color: 'white' }}
            className="flex space-x-4 text-decoration-none list-none "
          >
            <li>
              <a
                href="#"
                style={{
                  padding: '1rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
                className="hover:text-red-500 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  padding: '1rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
                className="hover:text-red-500 ml-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  padding: '1rem',
                  color: 'white',
                  textDecoration: 'none',
                }}
                className="hover:text-red-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <input
          style={{
            border: 'none',
            height: '32px',
          }}
          type="text"
          placeholder="Search..."
          className="px-2 py-1 rounded bg-black-700 border border-gray-600 text-white"
        />
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            height: '32px',
            margin: '0 16px',
          }}
          className="ml-2 px-4 py-1 rounded bg-red-500 hover:bg-red-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
