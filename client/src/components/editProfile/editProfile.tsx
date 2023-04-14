import { useState } from 'react';
import styles from './editProfile.module.scss';
import { updateUser } from '../../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/slices/UserSlice';

type Props = {
    closeModal: () => void;
    setShowLogin: any
};

const EditProfile = ({ closeModal, setShowLogin }: Props) => {
    const user = useSelector((state: any) => state.user.value)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        updateUser(user.id, { name: formData.name, email: formData.email }).then((res) => {
            console.log('Profile updated');
            dispatch(signIn({ ...user, name: res.name, email: res.email }))
        }).catch((err) => {
            alert('Something happened');
            console.log(err);
        }).finally(() => {
            setShowLogin(false)
        })
    };

    return (
        <div className={styles.formParent}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.title}>
                    <i className="ri-survey-line ri-xl"></i>
                    <h5>Edit Profile</h5>
                </div>
                <i
                    className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                    onClick={closeModal}
                ></i>
                <label htmlFor="name">Name:</label>
                <input
                    aria-autocomplete="none"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    aria-autocomplete="none"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            <p><span>WARNING:</span> if you change your email, you won't be able to login with the old one</p>
            </form>
        </div>
    );
};

export default EditProfile;
