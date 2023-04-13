import { useState } from 'react'
import Items from '../items/items'
import NewItemModal from '../newItem/newItem'
import styles from './content.module.scss'

type Props = {}

const Content = (props: Props) => {

    const [addNew, setAddNew] = useState(false);
    const [sortAsc, setSortAsc] = useState(true);


    const openModal = (e: any) => {
        e.preventDefault();
        setAddNew(!addNew);
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
                    <button onClick={openModal}>{addNew ? "CLOSE FORM" : "ADD NEW"}</button>
                </div>

                {addNew && <NewItemModal setAddNew={setAddNew} />}

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
                            <span onClick={() => setSortAsc(!sortAsc)}>
                                <h5>Name</h5>
                                <i className={sortAsc ? "ri-arrow-down-line" : "ri-arrow-up-line"}></i>
                            </span>
                        </div>
                        <i className="ri-layout-row-line"></i>
                    </div>
                </div>

                <Items sortAsc={sortAsc} />
            </div>
        </>

    )
}

export default Content