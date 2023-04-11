import styles from './sidebar.module.scss'

type Props = {}

const Sidebar = (props: Props) => {
	return (
		<section className={styles.sidebar}>

			<div className={styles.columnTop}>
				<i className="ri-umbrella-fill ri-2x"></i>
				<h5 className={styles.title}>Lost &<br />Found</h5>
			</div>

			<div className={styles.columnButton}>
				<i className="ri-user-line ri-xl"></i>
				<i className="ri-settings-4-line ri-xl"></i>
			</div>

		</section>
	)
}

export default Sidebar