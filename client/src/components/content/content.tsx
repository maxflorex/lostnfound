import { useState } from 'react'
import Items from '../items/items'
import NewItemModal from '../newItem/newItem'
import styles from './content.module.scss'

type Props = {}

const Content = (props: Props) => {

    const [addNew, setAddNew] = useState(false)

    const openModal = (e: any) => {
        e.preventDefault();
        setAddNew(true);
        document.body.style.overflow = 'hidden'
    };

    return (
        <>
            <div className="content">

                {/* TOP BAR */}
                <div className={styles.topBar}>
                    <ul>
                        <li><i className="ri-archive-line"></i></li>
                        <li>All Items</li>
                        <li><i className="ri-arrow-right-s-line"></i></li>
                        <li>Item Collection</li>
                        <li><i className="ri-arrow-right-s-line"></i></li>
                        <li>Main</li>
                    </ul>
                    <button onClick={openModal}>ADD NEW</button>
                </div>


                {/* MAIN CONTENT */}
                <div className={styles.searchSort}>
                    <div className="flex">
                        <form action="">
                            <label htmlFor="">SEARCH ITEM</label>
                            <input type="text" aria-autocomplete='none' className={styles.searchIcon} placeholder='SEARCH ITEMS BY NAME...' />
                        </form>
                    </div>
                    <div className={styles.sort}>
                        <div className="flex">
                            <h5>Name</h5>
                            <i className="ri-arrow-down-line"></i>
                        </div>
                        <i className="ri-layout-row-line"></i>
                    </div>
                </div>

                <Items />
            </div>
            {addNew && <NewItemModal setAddNew={setAddNew} />}
        </>

    )
}

export default Content