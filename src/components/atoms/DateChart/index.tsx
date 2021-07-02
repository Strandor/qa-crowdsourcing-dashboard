import React from "react";
import { Line } from "react-chartjs-2";
import { Props } from "./interface";

const DateChart = ({ data }: Props) => {
	return (
		<Line
			type="line"
			height={100}
			data={{
				labels: data.map((data) => {
					const date = new Date(data.date);

					return `${date.getDate()}/${date.getMonth()}`;
				}),
				datasets: [
					{
						data: data.map((data) => data.value),
					},
				],
			}}
		/>
	);
};

export default DateChart;
