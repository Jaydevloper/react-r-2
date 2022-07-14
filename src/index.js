import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './general.scss';
import { BrowserRouter } from 'react-router-dom';
import Comment from "./modules/comment";
import {Routes,Route} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <App/>    
        <Routes>
        <Route path="/single/:id" element={<Comment/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


