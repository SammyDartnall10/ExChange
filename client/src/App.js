import './App.css';
import { Fragment } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/layout/Navbar"
import LoginForm from "./components/auth/LoginForm"
import RegisterForm from "./components/auth/RegisterForm"


function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="app">
        <h1>Home Page</h1>
      </div>
      <LoginForm></LoginForm>
      <RegisterForm></RegisterForm>
    </Fragment>
  );
}

export default App;
