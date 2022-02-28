import React, { useState } from "react";
import Select from "react-select";
import { multiSelectProps, SelectOptions } from "./interface";
import { useSelector } from "react-redux";
import * as Redux from "../../../redux";

import Multiselect from "multiselect-react-dropdown";

const FormikSelect = ({ value, handlePrizeSelect, options }) => {
	console.log(value, "value!");
	console.log(options, "options in component!");

	return (
		<div>
			<b>Velja vinninga</b>
			<Select
				isMulti
				options={options} // set list of the data
				onChange={handlePrizeSelect}
				value={value} // set selected value
			/>
		</div>
	);
};

export default FormikSelect;
