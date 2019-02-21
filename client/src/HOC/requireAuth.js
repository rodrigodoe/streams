import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

export default ChildComponent => {
  class ComposedComponent extends Component {
    
    componentDidMount() {
      this.props.checkLogin();
    }

    componentDidUpdate() {
      this.props.checkLogin();
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => {
    return { auth: state.auth.authenticated };
  };

  return connect(
    mapStateToProps,
    actions
  )(ComposedComponent);
};
