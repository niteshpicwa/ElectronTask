import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home'
import ColoredPage from './components/ColoredPage/ColoredPage'
import Rgb from './components/Rgb/Rgb'
import RgbDisplay from './components/RgbDisplay/RgbDisplay'
import ShowVideo from './components/ShowVideo/ShowVideo'

function App(props) {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/colorpage" component={ColoredPage} />
      <Route path="/rgb" component={Rgb} />
      <Route path="/rgbdisplay" component={RgbDisplay} />
      <Route path="/showvideo" component={ShowVideo} />
    </Router>
  );

}

export default App;
