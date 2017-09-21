import { connectReduxArena } from "redux-arena-form/core";
export { RadioButton } from "material-ui/RadioButton";
import RadioButtonGroup from "./RadioButtonGroup";

const ConnectedRadioButtonGroup = connectReduxArena(RadioButtonGroup);

export { ConnectedRadioButtonGroup as RadioButtonGroup };
