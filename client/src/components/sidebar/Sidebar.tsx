import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Faq from '../faq/faq'
import Login from '../login/login'
import Profile from '../profile/profile'
import styles from './sidebar.module.scss'

type Props = {
	setHideBar: any,
	hideBar: any
}

const Sidebar = ({ setHideBar, hideBar }: Props) => {

	const [showLogin, setShowLogin] = useState('')
	const [openFaq, setOpenFaq] = useState(false)
	const user = useSelector((state: any) => state.user.value)
	const openModal = (e: any) => {
		e.preventDefault();
		if (user.email === '') {
			setShowLogin('noAuth');
		} else {
			setShowLogin('auth')
		}

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
					<i className={user.email === '' ? "ri-user-line ri-xl" : "ri-user-fill ri-xl"} onClick={openModal}></i>
					<div className={styles.faqParent}>
						<i className="ri-question-line ri-xl" onClick={() => { setOpenFaq(!openFaq) }} />
						{openFaq && <Faq setOpenFaq={setOpenFaq} />}
					</div>
				</div>

			</section>
			{showLogin === 'noAuth' && <Login setShowLogin={setShowLogin} />}
			{showLogin === 'auth' && <Profile setShowLogin={setShowLogin} />}
		</>
	)
}

export default Sidebar