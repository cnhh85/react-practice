import React from "react";

export default class Countdown extends React.Component {
  difference = new Date("August 28, 2021") - new Date();

  constructor(props) {
    super(props);
    this.state = {
      days: parseInt(this.difference / (1000 * 60 * 60 * 24)),
      hours: parseInt((this.difference / (1000 * 60 * 60)) % 24),
      minutes: parseInt((this.difference / 1000 / 60) % 60),
      seconds: parseInt((this.difference / 1000) % 60),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.difference = new Date("August 28, 2021") - new Date();
    this.setState({
      days: parseInt(this.difference / (1000 * 60 * 60 * 24)),
      hours: parseInt((this.difference / (1000 * 60 * 60)) % 24),
      minutes: parseInt((this.difference / 1000 / 60) % 60),
      seconds: parseInt((this.difference / 1000) % 60),
    });
  }

  render() {
    return (
      <div className="row">
        <div className="clock">
          <h2 className="days">{this.state.days}</h2>
          <p className="text">days</p>
        </div>
        <div className="clock">
          <h2 className="hours">{this.state.hours}</h2>
          <p className="text">hours</p>
        </div>
        <div className="clock">
          <h2 className="minutes">{this.state.minutes}</h2>
          <p className="text">minutes</p>
        </div>
        <div className="clock">
          <h2 className="seconds">{this.state.seconds}</h2>
          <p className="text">seconds</p>
        </div>
      </div>
    );
  }
}
