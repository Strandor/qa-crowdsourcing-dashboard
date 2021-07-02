import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../redux";
import * as Components from "../../components";
import { Line } from "react-chartjs-2";

const Answers = () => {
	const answers = useSelector(
		(state: Redux.Reducers.StoreState) => state.answers
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Redux.Actions.fetchAnswers());
	}, []);

	return (
		<Components.Layouts.Sidebar>
			<h1>Svör</h1>
			<h2>Samtals svör</h2>
			<Components.Atoms.Wrappers.Loading
				isLoading={answers.total.isLoading}
				error={answers.total.error}
			>
				<Components.Atoms.DateChart
					data={answers.total.data.map((data, i) => ({
						date: new Date(data.date),
						value: answers.total.data
							.slice(0, i)
							.reduce((pv, cv) => pv + cv.count, 0),
					}))}
				/>
			</Components.Atoms.Wrappers.Loading>
		</Components.Layouts.Sidebar>
	);
};

export default Answers;
