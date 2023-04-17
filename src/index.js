import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { choice, remove } from './helpers';
import foods from './foods';

  const food = choice(foods);

  console.log(`I'd like one ${food} please.`);
  console.log(`Here you go: ${food}`);
  console.log(`Delicious! May I have another?`);

  remove(foods, food);

  console.log(`I'm sorry, we're all out. We have ${foods.length} left.`);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
