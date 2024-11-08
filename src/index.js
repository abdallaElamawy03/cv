import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter,Route, Routes}from "react-router-dom"
import Courses from './Components/Courses';
import Amthal from './Components/Amthal';
import Header from './Components/Header';
import Gallery from './Components/Gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    
      <Routes>
        <Route  path="/" element={<App/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/Amthal" element={<Amthal/>}/>
        <Route path="/Home" element={<Header/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>

        
      </Routes>

    
    
    </BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
