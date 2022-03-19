import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import en from "date-fns/locale/en-GB";

registerLocale("en-GB", en);

import { IProps } from "./interface";

// uncomment to set "es" as default locale
// setDefaultLocale("es");

const SelectDate = ({ handleChange, date }: IProps) => {
	return (
		<DatePicker
			selected={date}
			onChange={(value) => handleChange(value)}
			locale="en-GB"
		/>
	);
};

export default SelectDate;
