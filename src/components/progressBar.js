import React, { Component } from "react";
import "../App.css";

let intervalId;

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWidth: props.startWidth
    };
  }

  componentDidMount() {
    const { endWidth, startWidth, duration } = this.props;
    const intervalDuration = Math.abs(
      Math.floor(duration / (endWidth - startWidth))
    );
    intervalId = setInterval(() => {
      if (this.state.currentWidth >= this.props.endWidth) {
        clearInterval(intervalId);
        return;
      }
      this.setState({
        currentWidth: this.state.currentWidth + 1
      });
    }, intervalDuration);
  }

  componentWillUnmount() {
    clearInterval(intervalId);
  }

  render() {
    return (
      <div className="progressBar">
        <span
          className="fill"
          style={{ width: this.state.currentWidth + "%" }}
        />
      </div>
    );
  }
}

export default ProgressBar;
