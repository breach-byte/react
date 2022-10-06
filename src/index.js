import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from "./components/hello";
import "bootstrap/dist/css/bootstrap.css";
import {
  useEffect,
  useState
} from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = ()=>{
  const [currTime,
    setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      let d = new Date();
      setTime(d.toLocaleTimeString());
    }, 100);
    return () => {
      clearInterval(timer);
    }
  }, []);
  return ( < div className="card m-2 p-2 text-center container bg-light"> < p > Youre current time is: < /p > < p > {
    currTime
  } < /p > < /div >
  );

};
root.render( < React.StrictMode > < App / > < /React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();