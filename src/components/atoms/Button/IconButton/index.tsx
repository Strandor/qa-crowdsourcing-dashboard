import React from "react";
import Link from "next/link";
import { Props } from "./interface";
import styles from "./styles.module.scss";

const IconButton = ({ src, href }: Props) => {
	return (
		<Link href={href}>
			<div className={styles.outer}>
				<img src={src} className={styles.image} />
			</div>
		</Link>
	);
};

export default IconButton;
