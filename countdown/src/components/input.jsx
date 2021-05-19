import React from "react";

export default function Input(props) {
  return (
    <div className="inputArea">
      <button className="btn close" onClick={props.toggle}>
        <i className="icofont-close"></i>
      </button>
      <div className="inputBox">
        <div className="container">
          <div className="title">
            <h1>
              Over 30 million <br />
              Shaping the perfect space
            </h1>
            <p>Currently only supports IOS and MAC</p>
          </div>
          <div className="content">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  id="register"
                  name="register"
                  className="checkbox"
                  value="Yes"
                ></input>
                <label>
                  {" "}
                  I agree to the platform accessing my{" "}
                  <span href="#" className="link">
                    information
                  </span>
                </label>
                <br></br>
              </div>
              <div className="start-container">
                <button type="submit" className="btn submit">
                  Start now
                </button>
              </div>
            </form>
            <div className="register-request">
              No Account Yet?
              <span className="link" href="#">
                {" "}
                Register
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
