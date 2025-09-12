import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header.jsx';
function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl text-center text-blue-600 mb-8">
            Welcome to Movie App
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Tailwind CSS đã được cài đặt thành công!
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
