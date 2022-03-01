import * as Declerations from "../../../../declerations";
import styles from "./styles.module.scss";
import Link from "next/link";

const PrizeCategory = ({
	_id,
	name,
	lockedImg,
	unlockedImg,
	requiredLVL,
	prereqDescription,
}: Declerations.Prizes.PrizeCategory) => {
	return (
		<Link href={`/dashboard/prizes/${_id}`}>
			<a>
				<div className={styles.outer}>
					<div>
						<img className={styles.image} src={lockedImg} />
						<img className={styles.image} src={unlockedImg} />
					</div>
					<h3>{name}</h3>
					<h4>{prereqDescription}</h4>
				</div>
			</a>
		</Link>
	);
};

export default PrizeCategory;
