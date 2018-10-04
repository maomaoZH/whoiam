import React, { Component } from "react";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Resume from "./components/resume";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AboutMe />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;
