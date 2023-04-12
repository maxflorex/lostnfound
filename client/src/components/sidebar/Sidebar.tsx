import { useState } from 'react'
import Login from '../login/login'
import styles from './sidebar.module.scss'

type Props = {
	setHideBar: any,
	hideBar: any
}

const Sidebar = ({ setHideBar, hideBar }: Props) => {

	const [showLogin, setShowLogin] = useState(false)

	const openModal = (e: any) => {
		e.preventDefault();
		setShowLogin(true);
		document.body.style.overflow = 'hidden'
	};

	return (
		<>
			<section className={styles.sidebar}>

				<div className={styles.columnTop}>
					<i className="ri-umbrella-fill ri-2x"></i>
					<h5 className={styles.title}>Lost &<br />Found</h5>
					<span onClick={() => setHideBar(!hideBar)}>
						<i className={hideBar ? 'ri-arrow-right-s-line' : "ri-arrow-left-s-line"}></i>
					</span>
				</div>

				<div className={styles.columnButton}>
					<i className="ri-user-line ri-xl" onClick={openModal}></i>
					<i className="ri-settings-4-line ri-xl"></i>
				</div>

			</section>
			{showLogin && <Login setShowLogin={setShowLogin} />}
		</>
	)
}

export default Sidebar