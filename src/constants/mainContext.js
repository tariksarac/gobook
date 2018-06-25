import React from "react";
import {tours} from "./constants";

const state = {
    tours: tours
};

const AppContext = React.createContext(state.tours); //passing initial value



export default AppContext;