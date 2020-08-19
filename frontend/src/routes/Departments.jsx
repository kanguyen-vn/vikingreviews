import React, { Component } from "react";

class Departments extends Component {
  state = {
    departments: [
      { name: "Computer Science", _id: 1 },
      { name: "Art History", _id: 2 },
      { name: "Economics", _id: 3 },
    ],
  };
  render() {
    return this.state.departments.map((department) => (
      <ul>
        <li key={department._id}>{department.name}</li>
      </ul>
    ));
  }
}

export default Departments;
