import * as React from 'react';
import './style.css';
import Article from './src/components/Article'
import User from './src/components/User'

export default function App() {
  return (
    <div>
      <header>
        <p>blogs</p>
      </header>
      <div className="content">
        <Article/>
        <User/>
      </div>
    </div>
  );
}
