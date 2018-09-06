import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.navRef = React.createRef();
    this.mainHeaderRef = React.createRef();
    this.state = {
      navSticky: false
    };
  }

  handleScroll() {
    if (this.navRef.current.getBoundingClientRect().top <= 0) {
      this.setState({ navSticky: true });
    }
    if (this.mainHeaderRef.current.getBoundingClientRect().top > -935) {
      this.setState({ navSticky: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <header className="appHeader">
        <div ref={this.mainHeaderRef} className="headerWrapper">
          <div className="whoami">
            <span>Who am I</span>
          </div>
          <div className="nameWrapper">
            <p className="name">I'm Maomao Meyer-Zhang</p>
            <p>A frontend engineer made in China, with world class quality</p>
          </div>
        </div>
        <div
          ref={this.navRef}
          className={this.state.navSticky ? "navbar sticky" : "navbar"}
        >
          What you want to know about me
        </div>
      </header>
    );
  }
}

export default Header;
