import React, { Component } from "react";
import { RadioButtonGroup } from "material-ui/RadioButton";
import {
  omitHOCProps,
  willMountBuilder,
  willReceivePropsBuilder,
  getValueFromProps,
  getErrorValueFromProps
} from "redux-arena-form/core";

function valuePumper(e, value) {
  return value;
}

export default class SelectFieldHOC extends Component {
  componentWillMount = willMountBuilder(valuePumper);
  componentWillReceiveProps = willReceivePropsBuilder(valuePumper);

  render() {
    return (
      <RadioButtonGroup
        valueSelected={getValueFromProps(this.props)}
        onChange={this.state.onChange}
        {...omitHOCProps(this.props)}
      />
    );
  }
}
