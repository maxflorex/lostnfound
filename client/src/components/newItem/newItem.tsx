import styles from './newItem.module.scss'

type Props = {
	setAddNew: any
}

const NewItemModal = ({ setAddNew }: Props) => {

	const closeModal = (e: any) => {
		if (e.target.classList.contains('dismiss')) {
			setAddNew(false);
			document.body.style.overflow = 'auto'
		}
	};


	return (
		<div className='modal dismiss' onClick={closeModal}>
			<h4>New Item</h4>
			<form action="" className={styles.form}>
				<div className={styles.group}>
					<label htmlFor="">SEARCH CATEGORY</label>
					<input type="text" autoComplete='off' aria-autocomplete='none' placeholder='SEARCH CATEGORIES...' />
				</div>
				<div className={styles.group}>
					<label htmlFor="">SEARCH CATEGORY</label>
					<input type="text" autoComplete='off' aria-autocomplete='none' placeholder='SEARCH CATEGORIES...' />
				</div>
				<div className={styles.group}>
					<label htmlFor="">SEARCH CATEGORY</label>
					<input type="text" autoComplete='off' aria-autocomplete='none' placeholder='SEARCH CATEGORIES...' />
				</div>

			</form>
		</div>
	)
}

export default NewItemModal