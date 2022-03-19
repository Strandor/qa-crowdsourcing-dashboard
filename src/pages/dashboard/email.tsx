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
	lvl: number;
	img: string;
	time: "";
}

const INITIAL_EMAIL_VALUES: EmailInterface = {
	date: "",
	prizeCategory: "",
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

	return (
		<Components.Layouts.Sidebar>
			<h1>Tilkynning fyrir útdrætti</h1>
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
					dispatch(Redux.Actions.sendEmail(dataToSend));
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
					<h3>Linkur á mynd</h3>
					<Field placeholder="Mynd" type="text" name="img" />
					<h3>Dagsetning</h3>
					<SelectDate handleChange={handleChange} date={date} />
					<h3>Klukkan</h3>
					<Field placeholder="17:00" type="time" name="time" />
					<Components.Atoms.Buttons.ActionButton>
						Staðfesta
					</Components.Atoms.Buttons.ActionButton>
				</Form>
			</Formik>
		</Components.Layouts.Sidebar>
	);
};

export default Email;
