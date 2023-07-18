import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./component/header/Header";
import {BrowserRouter} from "react-router-dom";
import {WelcomeBlock} from "./component/welcome_block/WelkomeBlock";
import {Skills} from "./component/skils/Skils";
import {Contact} from "./component/contact/Contact";
import {MyProjects} from "./component/my_works/MyProjects";
import {Footer} from "./component/footer/Footer";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <WelcomeBlock/>
              <Skills/>
              <MyProjects/>
              <Contact/>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
