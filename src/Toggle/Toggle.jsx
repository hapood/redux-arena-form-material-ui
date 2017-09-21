import React, { Component } from "react";
import Toggle from "material-ui/Toggle";
import {
  omitHOCProps,
  willMountBuilder,
  willReceivePropsBuilder,
  getValueFromProps,
  getErrorValueFromProps
} from "redux-arena-form/core";

function valuePumper(e, isInputChecked) {
  return isInputChecked;
}

export default class ToggleHOC extends Component {
  componentWillMount = willMountBuilder(valuePumper);
  componentWillReceiveProps = willReceivePropsBuilder(valuePumper);

  render() {
    return (
      <Toggle
        toggled={getValueFromProps(this.props, false)}
        onToggle={this.state.onChange}
        {...omitHOCProps(this.props)}
      />
    );
  }
}
