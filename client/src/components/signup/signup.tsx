import { useState } from 'react';
import styles from './signup.module.scss'

type Props = {
    setSigningUp: any
}

function Signup({ setSigningUp }: Props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [picture, setPicture] = useState(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // handle sign-up logic here
    };

    const closeModal = (e: any) => {
        if (e.target.classList.contains('dismiss')) {
            setSigningUp(false);
            document.body.style.overflow = 'auto'
        }
    };

    const handlePictureChange = (event: any) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		// reader.onload = () => {
		// 	setFormData((prevData: any) => ({
		// 		...prevData,
		// 		picture: reader.result,
		// 	}));
		// };
	};

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                onClick={closeModal}
            ></i>
            <h3>Sign Up</h3>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e: any) => setFirstName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e: any) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="picture" className={styles.uploadImage}>Image: {setPicture === null && <i className="ri-upload-line"></i>}
                </label>
                <input
                    aria-autocomplete='none'
                    type="file"
                    id="picture"
                    name="picture"
                    onChange={handlePictureChange}
                    accept="image/*"
                    required
                    className={styles.upload}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
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
        </form>
    );
}

export default Signup