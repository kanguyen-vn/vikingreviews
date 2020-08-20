import React, { Component } from "react";
import axios from "axios";

const URI = "localhost:3001";

class Departments extends Component {
  state = {
    departments: [],
  };

  async componentDidMount() {
    const { departments } = await axios.get(URI + "/api/departments");
    this.setState({ departments });
  }

  render() {
    return this.state.departments.map((department) => (
      <ul>
        <li key={department._id}>{department.name}</li>
      </ul>
    ));
  }
}

export default Departments;
