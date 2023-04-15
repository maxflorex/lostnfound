import { useState } from 'react';
import styles from './editItem.module.scss'
import { ItemInterface, categories } from '../../assets/misc';

type Props = {
    closeModal: any;
    selectedItem: ItemInterface

}

const EditItem = ({ closeModal, selectedItem }: Props) => {

    const [formData, setFormData] = useState({
        title: selectedItem.title,
        category: selectedItem.category,
        where: {
            city: selectedItem.where.city,
            country: selectedItem.where.country
        },
        when: selectedItem.when.slice(0, 10),
        picture: selectedItem.picture,
        status: selectedItem.status
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        if (name === "city" || name === "country") {
            setFormData({
                ...formData,
                where: {
                    ...formData.where,
                    [name]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handlePictureChange = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFormData((prevData: any) => ({
                ...prevData,
                picture: reader.result,
            }));
        };
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className={styles.formParent} onClick={closeModal}>
            <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                onClick={closeModal}
            ></i>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.title}>
                    <i className="ri-survey-line ri-xl"></i>
                    <h5>Edit Item</h5>
                </div>

                <label htmlFor="title">Item:</label>
                <input
                    aria-autocomplete='none'
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="city">City:</label>
                <input
                    aria-autocomplete='none'
                    type="text"
                    id="city"
                    name="city"
                    value={formData.where.city}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="country">Country:</label>
                <input
                    aria-autocomplete='none'
                    type="text"
                    id="country"
                    name="country"
                    value={formData.where.country}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="when">When:</label>
                <input
                    aria-autocomplete='none'
                    type="date"
                    id="when"
                    name="when"
                    value={formData.when}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="picture" className={styles.uploadImage}>Image: {formData.picture === null && <i className="ri-upload-line"></i>}
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
                {formData.picture && (
                    <img src={formData.picture} alt="preview" style={{ height: '100px' }} />
                )}

                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    className={styles.dropdown}
                >
                    <option value="">Select a status</option>
                    <option value="LOST">Lost</option>
                    <option value="FOUND">Found</option>
                </select>

                <label htmlFor="category">Category:</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} required className={styles.dropdown}>
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option value={category} key={category}>{category}</option>
                    ))}
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditItem