import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

export const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

	sagaMiddleware.run(rootSaga);

	return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
