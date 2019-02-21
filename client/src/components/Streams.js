import React from "react";
import requireAuth from "../HOC/requireAuth";

class Streams extends React.Component {
  render() {
    return (
      <div>
        <h3>Streams</h3>
      </div>
    );
  }
}

export default requireAuth(Streams);
