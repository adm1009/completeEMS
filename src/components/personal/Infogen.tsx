
import React, { useState } from "react";
import Navbar from "../Navbar";
import { Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
type props ={
  skillexp: string,
      skillknow: string,
      yearofexp: string,
      resume:string,
      certificate: string,
      show:boolean,
     
}
class Infogen extends React.Component<props,{skillexp: string;
  skillknow: string;
  yearofexp: string;
  resume:string;
  certificate: string;
  show:boolean;}> {
  constructor(props:props){
    super(props);
    
    this.state = {
      skillexp: "",
      skillknow: "",
      yearofexp: "",
      resume: "",
      certificate: "",
      show:false,
   
    }
    this.submitForm = this.submitForm.bind(this);
  }
  skillexpHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({skillexp:e.target.value})
  }
  skillknowHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({skillknow:e.target.value})
  }
  yearofexpHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({yearofexp:e.target.value})
  }
  resumeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({resume:e.target.value})
  }
  certificateHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    this.setState({certificate:e.target.value})
  }
  submitForm =()=> {
    localStorage.setItem("infogendetails", JSON.stringify(this.state));
    this.setState({
      show:true
    })
  };
  editHandler = () =>{
    this.setState({
      show:false
    });
    <Navigate to="/infogen"/>
  }
  render(){
    
  return (
    <div>
      <Navbar personalData leaveData employeeData />
      <span style={{ textDecoration: "underline" }}>
        Personal Information Details
      </span>
      <hr />
      {!this.state.show && (
        <form onSubmit={this.submitForm}>
          <span>Skill(Experience):- </span>
          <input
            type="text"
            name="skillexp"
            style={{ margin: "10px" }}
            value={this.state.skillexp}
            onChange={this.skillexpHandler}required
          />
          <br />
          <span>Skill(Knowledge):- </span>
          <input
            type="text"
            name="skillknow"
            style={{ margin: "10px" }}
            value={this.state.skillknow}
            onChange={this.skillknowHandler}required
          />
          <br />
          <span>Years Of Experience:- </span>
          <input
            type="text"
            name="yearofexp"
            style={{ margin: "10px" }}
            value={this.state.yearofexp}
            onChange={this.yearofexpHandler}required
          />
          <br />
          <span>Resume:- </span>
          <input
            type="file"
            name="resume"
            accept="application/pdf"
            style={{ margin: "10px" }}
            value={this.state.resume}
            onChange={this.resumeHandler}required
          />
          <br />
          <span>Certification(Certification Name:Date):- </span>
          <input
            type="text"
            name="certificate"
            style={{ margin: "10px" }}
            value={this.state.certificate}
            onChange={this.certificateHandler}required
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
          <br />
        </form>
      )}
      {this.state.show && <span style={{ color: "green" }}>Infogen data added successfully</span>}
      {this.state.show && <table style={{marginLeft:"350px"}}>
        <thead>
          <tr>
            <td><h3>Skill Experience </h3></td>
            <td><h3>Skill knowledge </h3></td>
            <td><h3>Year Of Experience </h3></td>
            <td><h3>Certificate </h3></td>
            <td>
              <h3>Edit </h3>
            </td>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.skillexp}</td>
              <td>{this.state.skillknow}</td>
              <td>{this.state.yearofexp}</td>
              <td>{this.state.certificate}</td>
              <td><span onClick={this.editHandler}><Link to="/infogen">Edit</Link></span></td>
            </tr>
          </tbody>
        </table>}
    </div>
  );
};
}
export default Infogen;
