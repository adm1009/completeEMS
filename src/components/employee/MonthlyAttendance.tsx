import React, { Component } from "react";
import Calendar from "react-calendar";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
type props = {
  date:any
}

class MonthlyAttendance extends React.Component<props,props> {
  constructor(props: props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  onChange = (date: any) => this.setState({ date });

  render() {
   
    return (
      <div>
        <Navbar personalData leaveData employeeData />
        <span style={{ textDecoration: "underline" }}>Monthly Attendance</span>
        <hr />
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}
export default MonthlyAttendance;
