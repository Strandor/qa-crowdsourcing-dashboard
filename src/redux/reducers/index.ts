import { combineReducers } from "redux";

import users from "./users";
import answers from "./answers";
import questions from "./questions";
import auth from "./auth";

const reducers = combineReducers({
	users,
	answers,
	questions,
	auth,
});

export default reducers;
export type StoreState = ReturnType<typeof reducers>;
