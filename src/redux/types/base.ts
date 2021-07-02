import { Action as ReduxAction, Reducer as ReduxReducer } from "redux";

export interface Action<T extends string, P> extends ReduxAction<T> {
	payload: P;
}

export type ExtractActionFromActionCreator<AC> = AC extends () => infer A
	? A
	: AC extends (payload: any) => infer A
	? A
	: AC extends (payload: any, error: any) => infer A
	? A
	: never;
