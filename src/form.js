import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      day: "",
      month: "",
      year: "",
      terms: false,
      error: null,
      isSubmited: false
    };
  }

  handleOnchange = name => e => {
    const value = name === "terms" ? !this.state.terms : e.target.value;
    this.setState({
      [name]: value
    });
  };

  validateEmail = email => {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };

  handleOnSubmit = () => {
    const { password, confirmPassword, email } = this.state;
    const err = !this.validateEmail(email)
      ? "Please enter valid Email"
      : password !== confirmPassword
      ? "Password not match"
      : !!!password || !!!confirmPassword
      ? "Password is required"
      : null;

    this.setState({
      error: err
    });

    this.setState({
      isSubmited: err ? false : true
    });
  };

  render() {
    return (
      <div className="container">
        <form style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {this.state.error && (
                <div className="text-center alert alert-danger">
                  {this.state.error}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-2">
              <div className="form-group">
                <input
                  placeholder="First Name"
                  className="form-control"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleOnchange("firstName")}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Last Name"
                  className="form-control"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleOnchange("lastName")}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Email"
                  className="form-control"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleOnchange("email")}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Password"
                  className="form-control"
                  type="text"
                  value={this.state.password}
                  onChange={this.handleOnchange("password")}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="Confirm Password"
                  className="form-control"
                  type="text"
                  value={this.state.confirmPassword}
                  onChange={this.handleOnchange("confirmPassword")}
                />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-primary"
                  value="Send Data"
                  type="button"
                  onClick={this.handleOnSubmit}
                />
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="form-group">
                <select
                  value={this.state.day}
                  onChange={this.handleOnchange("day")}
                  className="form-control"
                >
                  <option>Day</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  value={this.state.month}
                  onChange={this.handleOnchange("month")}
                  className="form-control"
                >
                  <option>Month</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  value={this.state.year}
                  onChange={this.handleOnchange("year")}
                  className="form-control"
                >
                  <option>Year</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="terms">Terms</label>
                <input
                  name="terms"
                  id="terms"
                  style={{ width: "20px", height: "20px" }}
                  className="form-control"
                  type="checkbox"
                  checked={this.state.terms}
                  onChange={this.handleOnchange("terms")}
                />
              </div>
            </div>
          </div>
        </form>
        {this.state.isSubmited && <ShowData {...this.state} />}
      </div>
    );
  }
}

class ShowData extends Component {
  render() {
    return (
      <ul>
        {Object.keys(this.props).map(prop => (
          <li key={prop}>
            {prop} : {this.props[prop]}
          </li>
        ))}
      </ul>
    );
  }
}
