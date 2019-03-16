import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import FaceDetect from './FaceDetect';
import ImageRecognition from './ImageRecognition';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/face" component={FaceDetect} />
        <Route path="/image" component={ImageRecognition} />
      </div>
    </Router>
  );
}

export default App;
