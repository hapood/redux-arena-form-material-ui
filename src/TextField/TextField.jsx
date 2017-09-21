import React, { Component } from "react";
import TextField from "material-ui/TextField";
import {
  omitHOCProps,
  willMountBuilder,
  willReceivePropsBuilder,
  getValueFromProps,
  getErrorValueFromProps
} from "redux-arena-form/tools";

function valuePumper(e, value) {
  return value;
}

export default class SelectFieldHOC extends Component {
  componentWillMount = willMountBuilder(valuePumper);
  componentWillReceiveProps = willReceivePropsBuilder(valuePumper);

  render() {
    return (
      <TextField
        value={getValueFromProps(this.props)}
        errorText={getErrorValueFromProps(this.props)}
        onChange={this.state.onChange}
        {...omitHOCProps(this.props)}
      />
    );
  }
}
