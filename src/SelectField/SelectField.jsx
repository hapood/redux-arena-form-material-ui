import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import {
  omitHOCProps,
  willMountBuilder,
  willReceivePropsBuilder,
  getValueFromProps,
  getErrorValueFromProps
} from "redux-arena-form/core";

function valuePumper(e, key, value) {
  return value;
}

export default class SelectFieldHOC extends Component {
  componentWillMount = willMountBuilder(valuePumper);
  componentWillReceiveProps = willReceivePropsBuilder(valuePumper);

  render() {
    return (
      <SelectField
        value={getValueFromProps(this.props)}
        errorText={getErrorValueFromProps(this.props)}
        onChange={this.state.onChange}
        {...omitHOCProps(this.props)}
      />
    );
  }
}
