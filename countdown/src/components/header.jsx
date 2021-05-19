import React from "react";
import HashLoader from "react-spinners/HashLoader";
import Countdown from "./countdown";
import Input from "./input";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
      toggle: false,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ done: true });
    }, 2000);
  };

  togglePop = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="loading">
            <HashLoader color="#61dafb" size="150px" />
          </div>
        ) : (
          <div className="header">
            <div className="countdown">
              <div className="container">
                <div className="title">
                  <h1>COUNTDOWN</h1>
                  <h3>The F-Code event on Sat, August 28, 2021</h3>
                </div>
                <Countdown />
                <button className="btn toggle-form" onClick={this.togglePop}>
                  LOG IN
                </button>
              </div>
            </div>
            {this.state.toggle ? <Input toggle={this.togglePop} /> : null}
          </div>
        )}
      </div>
    );
  }
}
