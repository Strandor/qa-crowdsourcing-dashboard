import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../redux";
import * as Components from "../../components";
import { Formik, Field, Form } from "formik";
import { SelectDate } from "../../components/atoms";
import styles from "./styles.module.scss";
import { DateEnum } from "../../utils";

const GiveAways = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Redux.Actions.fetchGiveAways());
	}, []);

	const prizeGiveAways = useSelector(
		(state: Redux.Reducers.StoreState) => state.giveAways.total.data
	);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [date, setDate] = useState(new Date());
	const handleChange = (date: Date) => setDate(date);

	const handleClose = (values) => {
		console.log(values);
		const dateToSend = date;
		dateToSend.setHours(
			parseInt(values.time.substring(0, 2)),
			parseInt(values.time.substring(3, 5))
		);
		const valuesToSend = { time: dateToSend.toISOString() };

		console.log(valuesToSend);
		dispatch(Redux.Actions.createGiveAway(valuesToSend));
		setIsModalOpen(false);
	};

	return (
		<>
			<Components.Layouts.Sidebar>
				<h1>Dagsetningar útdrátta</h1>
				<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
					<Components.Atoms.Buttons.ActionButton
						onClick={() => setIsModalOpen(true)}
					>
						Setja inn útdráttsdagsetningu
					</Components.Atoms.Buttons.ActionButton>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(5, 1fr)",
						gap: 25,
					}}
				>
					{prizeGiveAways.map((ga) => {
						let giveAwayDate = new Date(ga.time);
						let date_iso = giveAwayDate.toISOString();
						let date_arr = date_iso.split("T");
						// let date_str = date_arr[0];
						let time_str = date_arr[1].slice(0, 5);
						let date_str = `${giveAwayDate.getDate()}. ${
							DateEnum.Months[giveAwayDate.getMonth()]
						}`;

						return (
							<div className={styles.giveAwayCard}>
								<div>
									<h2>{date_str}</h2>
									<h3>{time_str}</h3>
								</div>
								<Components.Atoms.Buttons.RemoveButton
									onClick={() => dispatch(Redux.Actions.deleteGiveAway(ga))}
								>
									Delete
								</Components.Atoms.Buttons.RemoveButton>
							</div>
						);
					})}
				</div>
				<Components.Atoms.Wrappers.Overlay
					isVisible={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				>
					<Formik
						initialValues={{}}
						onSubmit={(values) => {
							handleClose(values);
						}}
					>
						<Form>
							<h3>Dagsetning</h3>
							<SelectDate handleChange={handleChange} date={date} />
							<h3>Klukkan</h3>
							<div style={{ width: "150px" }}>
								<Field placeholder="00:00" type="time" name="time" />
							</div>
							<Components.Atoms.Buttons.ActionButton>
								Staðfesta
							</Components.Atoms.Buttons.ActionButton>
						</Form>
					</Formik>
				</Components.Atoms.Wrappers.Overlay>
			</Components.Layouts.Sidebar>
		</>
	);
};

export default GiveAways;
