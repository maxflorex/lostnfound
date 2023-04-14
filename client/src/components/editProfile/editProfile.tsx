import { useState } from 'react';
import styles from './editProfile.module.scss';
import { categories } from '../../assets/misc';

type Props = {
    closeModal: () => void;
};

const EditProfile = ({ closeModal }: Props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        console.log(formData);
    };

    return (
        <div className={styles.formParent} onClick={closeModal}>
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
            </form>
        </div>
    );
};

export default EditProfile;
