import { useEffect, useState } from 'react'
import Faq from '../faq/faq'
import Login from '../login/login'
import styles from './sidebar.module.scss'

type Props = {
	setHideBar: any,
	hideBar: any
}

const Sidebar = ({ setHideBar, hideBar }: Props) => {

	const [showLogin, setShowLogin] = useState(false)
	const [openFaq, setOpenFaq] = useState(false)

	const openModal = (e: any) => {
		e.preventDefault();
		setShowLogin(true);
		document.body.style.overflow = 'hidden'

	};

	useEffect(() => {
		let timeoutId: any;

		if (openFaq) {
			timeoutId = setTimeout(() => {
				setOpenFaq(false);
			}, 5000);
		}

		return () => {
			clearTimeout(timeoutId);
		};
	}, [openFaq]);

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
					<div className={styles.faqParent}>
						<i className="ri-question-line ri-xl" onClick={() => { setOpenFaq(!openFaq) }} />
						{openFaq && <Faq setOpenFaq={setOpenFaq} />}
					</div>
				</div>

			</section>
			{showLogin && <Login setShowLogin={setShowLogin} />}
		</>
	)
}

export default Sidebar