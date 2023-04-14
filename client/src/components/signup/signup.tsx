import { useState } from 'react';
import styles from './signup.module.scss'
import { createUser } from '../../api/api';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/slices/UserSlice';

type Props = {
    setSigningUp: any,
    setShowLogin:any
}

function Signup({ setSigningUp, setShowLogin }: Props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const dispatch = useDispatch()

    const closeModal = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            setSigningUp(false);
            document.body.style.overflow = 'auto'
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (name === '' || email === '' || password === '' || passwordConfirm === '') {
            alert('Do not leave empty fields!')
        } else if (password !== passwordConfirm) {
            alert('Passwords do not match!')
        } else {
            await createUser({ name: name, email: email, password: password }).then((res: any) => {
                dispatch(signIn({ name: res.name, email: res.email, id: res._id }))
            }).finally(() => {
                setShowLogin(false);
                document.body.style.overflow = 'auto'
            })
        }

    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                onClick={closeModal}
            ></i>
            <h3>Sign Up</h3>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(e: any) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e: any) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e: any) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div>
                <label htmlFor="passwordConfirm">Confirm Password:</label>
                <input
                    type="password"
                    id="passwordConfirm"
                    value={passwordConfirm}
                    onChange={(e: any) => setPasswordConfirm(e.target.value)}
                />
            </div>
            <button type="submit">Sign Up</button>
            <p>Already registered? <span onClick={() => setSigningUp(false)}>Login</span></p>
        </form>
    );
}

export default Signup