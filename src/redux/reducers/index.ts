import { combineReducers } from "redux";

import users from "./users";
import answers from "./answers";
import questions from "./questions";
import auth from "./auth";
import prizes from "./prizes";
import prizeCategories from "./prizeCategories";
import giveAways from "./giveAways";

const reducers = combineReducers({
	users,
	answers,
	questions,
	auth,
	prizes,
	prizeCategories,
	giveAways,
});

export default reducers;
export type StoreState = ReturnType<typeof reducers>;
