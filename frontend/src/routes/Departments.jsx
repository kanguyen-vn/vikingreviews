import React, { Component } from "react";
import axios from "axios";

const URI = "localhost:3000";

class Departments extends Component {
  state = {
    departments: [],
  };

  async componentDidMount() {
    const departments = await axios.get(URI + "/api/departments");
    console.log("departments", departments);
    this.setState({ departments });
  }

  render() {
    return this.state.departments.map((department) => (
      <ul>
        <li key={department._id}>{`${department.code} ${department.name}`}</li>
      </ul>
    ));
  }
}

export default Departments;
