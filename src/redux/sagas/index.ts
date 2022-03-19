import { all, fork } from "redux-saga/effects";

import users from "./users";
import answers from "./answers";
import questions from "./questions";
import auth from "./auth";
import prizes from "./prizes";
import prizeCategories from "./prizeCategories";
import announcements from "./announcement";

export default function* rootSaga() {
	yield all([
		yield fork(users),
		yield fork(answers),
		yield fork(questions),
		yield fork(auth),
		yield fork(prizeCategories),
		yield fork(prizes),
		yield fork(announcements),
	]);
}
