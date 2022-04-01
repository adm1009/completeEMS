import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../Navbar";
type props = {
  pancardno: string;
  accountno: string;
  bankname: string;
  show: boolean;
  bank: string;
};

class BankDetails extends React.Component<
  props,
  { pancardno: string; accountno: string; bankname: string; show: boolean; }
> {
  constructor(props: props) {
    super(props);

    this.state = {
      pancardno: "",
      accountno: "",
      bankname: "",
      show: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }
  pancardnoHandler = (e:React.ChangeEvent<HTMLInputElement>) => { 
    this.setState({pancardno:e.target.value});
  };
  accountnoHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ accountno: e.target.value });
  };
  banknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ bankname: e.target.value });
  };
  submitForm = () => {
    localStorage.setItem("bankdetails", JSON.stringify(this.state));
    this.setState({
      show: true,
    });
  };
  editHandler = () => {
    this.setState({
      show: false,
    });
    <Navigate to="/bankdetails" />;
  };
  render() {
    return (
      <div>
        <Navbar personalData leaveData employeeData />
        <span style={{ textDecoration: "underline" }}>Bank Details</span>
        <hr />
        {!this.state.show && (
          <form onSubmit={this.submitForm}>
            <span>Pancard No:- </span>
            <input
              type="text"
              value={this.state.pancardno}
              onChange={this.pancardnoHandler}
              name="pancardno"
              style={{ marginTop: "10px" }}
              required
            />
            <br />
            <span>Account No:- </span>
            <input
              type="text"
              value={this.state.accountno}
              onChange={this.accountnoHandler}
              name="accountno"
              style={{ marginTop: "10px" }}
              required
            />
            <br />
            <span>Bank Name:- </span>
            <input
              type="text"
              value={this.state.bankname}
              onChange={this.banknameHandler}
              name="bankname"
              style={{ marginTop: "10px" }}
              required
            />
            <br />
            <input
              type="submit"
              value="Submit Data"
              style={{
                backgroundColor: "cornflowerblue",
                marginTop: "10px",
                color: "white",
                border: "none",
                fontSize: "15px",
              }}
            />
          </form>
        )}
        {this.state.show && (
          <span style={{ color: "green" }}>
            Bank Details Added Successfully
          </span>
        )}
        <br />
        {this.state.show && (
          <table style={{ marginLeft: "500px" }}>
            <thead>
              <tr>
                <td>
                  <h3>Pancard No</h3>
                </td>
                <td>
                  <h3>Account No</h3>
                </td>
                <td>
                  <h3>Bank Name</h3>
                </td>
                <td>
                  <h3>Edit </h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.pancardno}</td>
                <td>{this.state.accountno}</td>
                <td>{this.state.bankname}</td>
                <td>
                  <span onClick={this.editHandler}>
                    <Link to="/bankdetails">Edit</Link>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
export default BankDetails;
