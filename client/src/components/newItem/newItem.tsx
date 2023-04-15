import { useState } from 'react';
import { categories } from '../../assets/misc';
import styles from './newItem.module.scss'
import { useSelector } from 'react-redux';
import { createItem } from '../../api/api';
import axios from 'axios';

type Props = {
	setToggleItemsChange: any
}

const NewItemModal = ({ setToggleItemsChange }: Props) => {
	const user = useSelector((state: any) => state.user.value)

	const closeModal = (e: any) => {
		if (e.target.classList.contains('dismiss')) {
			setToggleItemsChange(false);
			document.body.style.overflow = 'auto'
		}
	};


	const [formData, setFormData] = useState({
		title: "",
		category: "",
		where: {
			city: "",
			country: ""
		},
		when: "",
		picture: null,
		status: "",
		contact: user.email
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

	const handlePictureChange = (e: any) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('file', file)
		formData.append('upload_preset', import.meta.env.VITE_PRESET_KEY)
		axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, formData)
			.then((res: any) => setFormData((prevData: any) => ({
				...prevData,
				picture: res.data.secure_url,
			})))
			.catch((err: any) => console.log(err))
	}

	const handleSubmit = (event: any) => {
		event.preventDefault();
		createItem(formData).then((res) => {
			console.log('New item was added 🥳');

		}).catch((err) => {
			alert('Something went wrong!')
			console.log(err);
		}).finally(() => {
			setToggleItemsChange(false);
			document.body.style.overflow = 'auto'
		})
	};


	return (
		<div className={styles.formParent} onClick={closeModal}>

			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.title}>
					<i className="ri-survey-line ri-xl"></i>
					<h5>Add New Item</h5>
				</div>
				<i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
					onClick={closeModal}
				></i>
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

				<label htmlFor="category">Category:</label>
				<select id="category" name="category" value={formData.category} onChange={handleChange} required className={styles.dropdown}>
					<option value="">Select a category</option>
					{categories.map((category) => (
						<option value={category} key={category}>{category}</option>
					))}
				</select>

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

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default NewItemModal