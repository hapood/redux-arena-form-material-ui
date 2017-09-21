import React, { Component } from "react";
import Checkbox from "material-ui/Checkbox";
import {
  omitHOCProps,
  willMountBuilder,
  willReceivePropsBuilder,
  getValueFromProps,
  getErrorValueFromProps
} from "redux-arena-form/core";

function valuePumper(e, isChecked) {
  return isChecked;
}

export default class CheckboxHOC extends Component {
  componentWillMount = willMountBuilder(valuePumper);
  componentWillReceiveProps = willReceivePropsBuilder(valuePumper);

  render() {
    return (
      <Checkbox
        checked={getValueFromProps(this.props, false)}
        onCheck={this.state.onChange}
        {...omitHOCProps(this.props)}
      />
    );
  }
}
