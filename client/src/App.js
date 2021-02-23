import './App.css';
import { Fragment } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/layout/Navbar"


function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="app">
        <h1>Test Heading</h1>
      </div>
    </Fragment>
  );
}

export default App;
