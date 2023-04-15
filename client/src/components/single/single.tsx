import { ItemInterface } from '../../assets/misc';
import styles from './single.module.scss'

type Props = {
	data: ItemInterface[]
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
								<h6>Is this item yours? <span><i className="ri-mail-line"></i>
									<a href={`mailto:${itemData.contact}`}>
										Get in touch
									</a></span></h6>
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
								<h6>{itemData.when.slice(0, 10)}</h6>
							</div>
						</div>
					</div>

				</div>
			})}
		</>
	)
}

export default Single