import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/signup">BRAND</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/signin">SignIn</Link>
        <Link to="/signout">SignIn</Link>
        <Link to="/streams">Streams</Link>
      </div>
    );
  }
}

export default Header;
