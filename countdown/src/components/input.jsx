import React from "react";

export default function Input(props) {
  return (
    <div className="inputArea">
      <div className="btn" onClick={props.onToggleChange}>
        <button>close</button>
      </div>
      <div className="container">
        <div className="inputBox">
          <div className="section-title">
            <h1>
              Over 30 million <br />
              Shaping the perfect space
            </h1>
            <p>Currently only supports IOS and MAC</p>
          </div>
          <div className="form"></div>
        </div>
      </div>
    </div>
  );
}
