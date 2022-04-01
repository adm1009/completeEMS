import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Auth from "./Auth";

type props = {
  username: string;
  password: string;
  show: boolean;
};

class Home extends React.Component<
  props,
  { username: string; password: string; show: boolean; }
> {
  constructor(props: props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      show: false,
    };
    
  }
   count =0;
  submitForm = async (e: any) => {
    e.preventDefault();
    await fetch(`https://623ae79df8827fbe47aaf15a.mockapi.io/login?search=${this.state.username}`).then((data: any) => {
      data.json()
      .then((resp: any) => {
        console.warn("resp",resp);
        if(resp.length>0){
             Auth.authenticate();
             this.setState({show:true})
        }
        else{
          alert("Please enter valid details")
        }
      });
    });
  };

  render() {
    return (
      <>
        {!this.state.show && (
          <h3 style={{ backgroundColor: "cornflowerblue", color: "white" }}>
            Welcome to Infogen Labs Pvt.Ltd
          </h3>
        )}
        {this.state.show && <Navbar personalData leaveData employeeData />}
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <span>Username:- </span>
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              required
            />
            <br />
            <span>Password:- </span>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
            <br />
            <br />
            <input type="submit" value="Login" />
          </form>
        )}
        
      </>
    );
  }
}

export default Home;
