import React from "react";

function Timer() {
  class Countdown extends React.Component {
    constructor(props) {
      const difference = new Date("May 15, 2021") - new Date();
      super(props);
      this.state = {
        days: parseInt(difference / (1000 * 60 * 60 * 24)),
        hours: parseInt(difference / (1000 * 60 * 60 * 24)),
        minutes: parseInt((difference / 1000 / 60) % 60),
        seconds: parseInt((difference / 1000) % 60),
      };
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

  return <Countdown />;
}

export default Timer;
