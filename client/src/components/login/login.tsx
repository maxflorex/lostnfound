import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/UserSlice';
import Signup from '../signup/signup';
import styles from './login.module.scss'
import { login } from '../../api/api';

type Props = {
	setShowLogin: any
}

const Login = ({ setShowLogin }: Props) => {

	const [signingUp, setSigningUp] = useState(false)
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch()

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (email === '' || password === '') {
			alert('Do not leave empty fields')
		} else {
			login(email, password).then((res) => {
				dispatch(signIn({ email: res.email, name: res.name }))
			}).catch((err) => {
				console.log(err);
			})
		}

		setShowLogin(false)
		document.body.style.overflow = 'auto'
	};
	const closeModal = (e: any) => {
		if (e.target.classList.contains('dismiss')) {
			setShowLogin(false);
			document.body.style.overflow = 'auto'
		}
	};

	return (
		<div className='modal dismiss' onClick={closeModal}>

			{!signingUp ?

				<form onSubmit={handleSubmit} className={styles.form}>
					<i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
						onClick={closeModal}
					></i>
					<h3>Login</h3>
					<div>
						<input
							type="text"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							aria-autocomplete='none'
							placeholder='Enter your email...'
						/>
					</div>
					<div>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							aria-autocomplete='none'
							placeholder='Enter your password...'
						/>
					</div>
					<button type="submit">Login</button>
					<p>Not registered? <span onClick={() => setSigningUp(true)}>Create an account</span></p>
				</form>
				:
				<Signup setSigningUp={setSigningUp} setShowLogin={setShowLogin} />}


		</div>
	)
}

export default Login