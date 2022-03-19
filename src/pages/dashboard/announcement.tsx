import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../redux";
import * as Components from "../../components";
import { Formik, Field, Form } from "formik";
import Select, { GroupBase, Props } from "react-select";
import { SelectDate } from "../../components/atoms";

interface EmailInterface {
	date: string;
	prizeCategory: string;
	prize: string;
	lvl: number;
	img: string;
	time: "";
}

const INITIAL_EMAIL_VALUES: EmailInterface = {
	date: "",
	prizeCategory: "",
	prize: "",
	lvl: 0,
	img: "",
	time: "",
};

const Email = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Redux.Actions.fetchPrizeCategories());
	}, []);

	const prizeCategories = useSelector(
		(state: Redux.Reducers.StoreState) => state.prizeCategories.total.data
	);
	const [selectVal, setSelectVal] = useState("");

	const dropdownOptions = prizeCategories.map((category) => {
		return { value: category.name, label: category.name };
	});

	const handleCategoryChange = (data: string) => {
		console.log(data);
		setSelectVal(data);
		console.log(selectVal);
	};

	const [date, setDate] = useState(new Date());
	const handleChange = (date: Date) => setDate(date);

	const [sendingNotification, setSendingNotification] = useState(false);
	const [sendingEmail, setSendingEmail] = useState(false);

	return (
		<Components.Layouts.Sidebar>
			<h1>Tilkynning fyrir útdrætti</h1>
			<div
				style={{
					display: "flex",
					flex: 4,
				}}
			>
				<div style={{ flexGrow: 3 }}>
					<Formik
						initialValues={INITIAL_EMAIL_VALUES}
						onSubmit={(values) => {
							const selectedCategory = prizeCategories.find(
								(category) => category.name == selectVal
							);
							// console.log(selectedCategory, "selectedCategory");
							const dataToSend = {
								...values,
								prizeCategory: selectedCategory.name,
								lvl: selectedCategory.requiredLVL,
								date: date.toISOString(),
							};
							console.log(dataToSend, "values");
							if (sendingEmail) {
								dispatch(Redux.Actions.sendEmail(dataToSend));
								setSendingEmail(false);
								// } else if (sendingNotification) {
								// 	dispatch(Redux.Actions.sendNotification(dataToSend));
								// 	setSendingNotification(false);
								// }
							}
						}}
					>
						<Form>
							{/* <Field placeholder="flokkur" type="number" name="flokkur" /> */}
							<h3>Veldu flokk sem dregið verður úr</h3>
							<Select
								options={dropdownOptions} // set list of the data
								onChange={(value) => handleCategoryChange(value.value)}
								// value={selectVal} // set selected value
								name="prizeCategory"
							/>
							<h3>Nafn á vinning</h3>
							<Field placeholder="nafn á vinning" type="text" name="prize" />
							<h3>Linkur á mynd</h3>
							<Field placeholder="Mynd" type="text" name="img" />
							<h3>Dagsetning</h3>
							<SelectDate handleChange={handleChange} date={date} />
							<h3>Klukkan</h3>
							<div style={{ width: "150px" }}>
								<Field placeholder="17:00" type="time" name="time" />
							</div>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(2, 1fr)",
									gap: 5,
									marginTop: "10px",
								}}
							>
								<Components.Atoms.Buttons.AnnouncementButton
									email={true}
									onClick={() => setSendingEmail(true)}
								>
									Email
								</Components.Atoms.Buttons.AnnouncementButton>
								<Components.Atoms.Buttons.AnnouncementButton
									email={false}
									// onClick={() => setSendingNotification(true)}
									onClick={() => console.log("sending notif")}
								>
									Notification
								</Components.Atoms.Buttons.AnnouncementButton>
							</div>
						</Form>
					</Formik>
				</div>
				<div style={{ flexGrow: 1 }}></div>
			</div>
		</Components.Layouts.Sidebar>
	);
};

export default Email;
