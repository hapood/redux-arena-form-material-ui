import { connectReduxArena } from "redux-arena-form/tools";
export { RadioButton } from "material-ui/RadioButton";
import RadioButtonGroup from "./RadioButtonGroup";

const ConnectedRadioButtonGroup = connectReduxArena(RadioButtonGroup);

export { ConnectedRadioButtonGroup as RadioButtonGroup };
