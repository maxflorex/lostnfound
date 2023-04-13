import styles from './single.module.scss'

interface Item {
	title: string;
	category: string;
	where: {
		city: string;
		country: string;
	};
	when: string;
	picture: string;
	status: string;
	contact: string;
}

type Props = {
	data: Item[]
}

const Single = ({ data }: Props) => {

	return (
		<>
			{data.map((itemData, i) => {
				return <div key={i} className={styles.singleContainer}>


					<div className={styles.leftBlockParent}>
						<img src={itemData.picture} alt="Item" className={styles.picture} />
						<div className={styles.leftBlock}>
							<div className="flex-column">
								<h6>{itemData.category}</h6>
								<h4>{itemData.title}</h4>
							</div>
							<div className="flex-column">
								<h6>Is this item yours? <span><i className="ri-phone-fill"></i>Get in touch</span></h6>
							</div>
						</div>
					</div>
					<div className={styles.rightBlockParent}>
						<div className={styles.rightBlock}>
							<h5>{itemData.status}</h5>
							<div className="flex-column">
								<p>Found / Lost at:</p>
								<h6>{itemData.where.city}, {itemData.where.country}</h6>
							</div>
							<div className="flex-column">
								<p>Date:</p>
								<h6>{itemData.when}</h6>
							</div>
						</div>
					</div>

				</div>
			})}
		</>
	)
}

export default Single