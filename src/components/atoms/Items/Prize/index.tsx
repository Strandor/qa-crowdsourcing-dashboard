import * as Declerations from "../../../../declerations";
import styles from "./styles.module.scss";
import Link from "next/link";

const Prize = ({
	_id,
	name,
	img,
	brandImg,
	available,
}: Declerations.Prizes.Prize) => {
	return (
		<div className={!available ? styles.unAvailable : ""}>
			<div className={styles.outer}>
				<img className={styles.prizeImg} src={img} />
				<h3>{name}</h3>
				{!available ? <h4 className={styles.given}>Farið</h4> : <></>}
			</div>
		</div>
	);
};

export default Prize;
