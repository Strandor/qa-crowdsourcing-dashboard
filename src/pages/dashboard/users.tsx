import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../redux";
import * as Components from "../../components";
import { Line } from "react-chartjs-2";

const Users = () => {
	const users = useSelector((state: Redux.Reducers.StoreState) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Redux.Actions.fetchSignups());
	}, []);

	return (
		<Components.Layouts.Sidebar>
			<h1>Notendur</h1>
			<h2>Nýjir notendur</h2>
			<Components.Atoms.Wrappers.Loading
				isLoading={users.signups.isLoading}
				error={users.signups.error}
			>
				<Components.Atoms.DateChart
					data={users.signups.data.map((data) => ({
						date: new Date(data.date),
						value: data.count,
					}))}
				/>
			</Components.Atoms.Wrappers.Loading>
		</Components.Layouts.Sidebar>
	);
};

export default Users;
