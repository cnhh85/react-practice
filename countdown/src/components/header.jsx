import React from "react";
import HashLoader from "react-spinners/HashLoader";
import Countdown from "./countdown";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 2000);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="loading">
            <HashLoader color="#61dafb" size="150" />
          </div>
        ) : (
          <div className="container">
            <div className="title">
              <h1>COUNTDOWN</h1>
              <h3>The F-Code event on Sat, August 28, 2021</h3>
            </div>
            <Countdown />
          </div>
        )}
      </div>
    );
  }
}
