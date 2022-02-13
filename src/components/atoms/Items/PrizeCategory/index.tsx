import * as Declerations from "../../../../declerations";
import styles from "./styles.module.scss";
import Link from "next/link";

const PrizeCategory = ({
	_id,
	name,
	lockedImg,
	requiredLVL,
}: Declerations.Prizes.PrizeCategory) => {
	return (
		<Link href={`/dashboard/prizes/${_id}`}>
			<a>
				<div className={styles.outer}>
					<img src={lockedImg} />
					<h3>{name}</h3>
					<h4>LVL {requiredLVL}+</h4>
				</div>
			</a>
		</Link>
	);
};

export default PrizeCategory;
