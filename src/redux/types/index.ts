import * as actions from "../actions";
import rootReducers from "../reducers";
import { ExtractActionFromActionCreator } from "./base";

export type AllActions = ExtractActionFromActionCreator<
	typeof actions[keyof typeof actions]
>;

export type Reducer<S = any> = (state: S | undefined, action: AllActions) => S;

export * from "./base";
