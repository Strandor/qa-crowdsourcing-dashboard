import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../redux";
import * as Components from "../../components";

const Questions = () => {
	const questions = useSelector(
		(state: Redux.Reducers.StoreState) => state.questions
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Redux.Actions.fetchImpossibleQuestions());
		dispatch(Redux.Actions.fetchArchivedQuestions());
	}, []);

	return (
		<Components.Layouts.Sidebar>
			<h1>Spurningar</h1>
			<h2>Ómögulegar spurningar</h2>
			<Components.Atoms.Wrappers.Loading
				isLoading={questions.impossible.isLoading}
				error={questions.impossible.error}
			>
				{questions.impossible.data.map((question) => (
					<Components.Molecules.Question
						question={question}
						onTextChange={(text) =>
							dispatch(
								Redux.Actions.patchQuestion({
									_id: question._id,
									text,
								})
							)
						}
						onDelete={() =>
							dispatch(
								Redux.Actions.patchQuestion({
									_id: question._id,
									isDisqualified: true,
								})
							)
						}
						onAccept={() =>
							dispatch(
								Redux.Actions.patchQuestion({
									_id: question._id,
									isImpossible: false,
								})
							)
						}
						key={question._id}
					/>
				))}
			</Components.Atoms.Wrappers.Loading>
			<h2>Eyddar spurningar</h2>
			<Components.Atoms.Wrappers.Loading
				isLoading={questions.archived.isLoading}
				error={questions.archived.error}
			>
				{questions.archived.data.map((question) => (
					<Components.Molecules.Question
						question={question}
						onTextChange={(text) =>
							dispatch(
								Redux.Actions.patchQuestion({
									_id: question._id,
									text,
								})
							)
						}
						onDelete={() =>
							dispatch(
								Redux.Actions.patchQuestion({
									_id: question._id,
									isDisqualified: true,
								})
							)
						}
						onAccept={() =>
							dispatch(
								Redux.Actions.patchQuestion({
									_id: question._id,
									isArchived: false,
								})
							)
						}
						key={question._id}
					/>
				))}
			</Components.Atoms.Wrappers.Loading>
		</Components.Layouts.Sidebar>
	);
};

export default Questions;
