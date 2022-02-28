import React from "react";
import Select from "react-select";

const FormikSelect = ({ value, handlePrizeSelect, options }) => {
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
