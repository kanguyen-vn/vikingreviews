import React, { Component } from "react";

class Courses extends Component {
  state = {
    courses: [
      { title: "Computer Science 270", _id: 1 },
      { title: "Art History 3000", _id: 2 },
      { title: "Economics ???", _id: 3 },
    ],
  };
  render() {
    return this.state.courses.map((course) => (
      <ul>
        <li key={course._id}>{course.title}</li>
      </ul>
    ));
  }
}

export default Courses;
