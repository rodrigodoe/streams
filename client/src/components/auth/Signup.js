import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Signup extends React.Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/streams");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Username</label>
            <Field name="username" component="input" type="text" />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field name="password" component="input" type="password" />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button>SIgn Up!!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.errorMessage };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);
