import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Redux from "../../redux";
import * as Components from "../../components";
import { Formik, Field, Form } from "formik";
import Select, { GroupBase, Props } from "react-select";

type OptionType = {
	value: string;
	label: string;
};

// type OptionType = {
// 	prizeCategory: {
// 		name: string;
// 		lvl: number;
// 	};
// 	label?: string;
// };

interface EmailInterface {
	date: string;
	prizeCategory: string;
	lvl: number;
	img: string;
}

const INITIAL_EMAIL_VALUES: EmailInterface = {
	date: "",
	prizeCategory: "",
	lvl: 0,
	img: "",
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

	// const dropdownOptions = prizeCategories.map((category) => {
	// 	return category.name;
	// });

	console.log(dropdownOptions);

	const handleChange = (data: string) => {
		console.log(data);
		setSelectVal(data);
		console.log(selectVal);
	};

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
					};
					console.log(dataToSend, "values");
				}}
			>
				<Form>
					{/* <Field placeholder="flokkur" type="number" name="flokkur" /> */}
					<h3>Veldu flokk sem dregið verður úr</h3>
					<Select
						options={dropdownOptions} // set list of the data
						onChange={(value) => handleChange(value.value)}
						// value={selectVal} // set selected value
						name="prizeCategory"
					/>

					<Field placeholder="Mynd" type="text" name="img" />
					{/* <Select
					isMulti
					options={dropdownOptions} // set list of the data
					onChange={(value) => onSelectValues(value)}
					value={selectVal} // set selected value
					name="prizes"
				/> */}
					<Components.Atoms.Buttons.ActionButton>
						Staðfesta
					</Components.Atoms.Buttons.ActionButton>
				</Form>
			</Formik>
		</Components.Layouts.Sidebar>
	);
};

export default Email;
