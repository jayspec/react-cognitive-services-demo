import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import FaceDetect from './FaceDetect';
import ImageRecognition from './ImageRecognition';
import Home from './Home';
import Ocr from './Ocr';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/face" component={FaceDetect} />
        <Route path="/image" component={ImageRecognition} />
        <Route path="/ocr" component={Ocr} /> 
      </div>
    </Router>
  );
}

export default App;
