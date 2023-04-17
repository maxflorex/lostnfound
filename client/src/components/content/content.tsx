import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories, fakeData, ItemInterface } from '../../assets/misc'
import { defaultCategory } from '../../redux/slices/FilteredCategoryslices'
import Items from '../items/items'
import NewItemModal from '../newItem/newItem'
import styles from './content.module.scss'
import { ItemsContext } from '../../routes/Home'

type Props = {
    items: ItemInterface[],
}

const Content = ({ items }: Props) => {
    const user = useSelector((state: any) => state.user.value)
    const { setToggleItemsChange, toggleItemsChange } = useContext(ItemsContext);
    const selectedCategory = useSelector((state: any) => state.category.value)
    const filteredCat = selectedCategory !== 'ALL'
        ? items.filter((item) => item.category === selectedCategory)
        : items;

    const dispatch = useDispatch()

    const [sortAsc, setSortAsc] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState(filteredCat);

    const openModal = (e: any) => {

        if (!user.email) {
            alert('Sign in to add new items')
        } else {
            e.preventDefault();
            setToggleItemsChange(!toggleItemsChange);
        }
    };

    const handleDefault = (e: any) => {
        e.preventDefault()
        dispatch(defaultCategory())
    }

    // SEARCH BY TITLE

    function filterItemsByName(array: any, name: string) {
        const filtrado = array.filter((item: ItemInterface) => {
            return item.title.toLowerCase().includes(name.toLowerCase());
        });

        return filtrado;
    }

    const handleSearch = (event: any) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filteredCategories = filterItemsByName(filteredCat, searchTerm);
        setFiltered(filteredCategories);
    }

    useEffect(() => {
        setFiltered(filteredCat)
        setSearchTerm('')
    }, [selectedCategory, items])



    return (
        <>
            <div className="content">

                {/* TOP BAR */}
                <div className={styles.topBar}>
                    <ul>

                        <li onClick={handleDefault} className={styles.clickable}><i className="ri-archive-line" />All Items</li>
                        {selectedCategory !== 'ALL' &&
                            <>
                                <li><i className="ri-arrow-right-s-line"></i></li>
                                <li>{selectedCategory}</li>
                            </>
                        }
                    </ul>
                    <button onClick={openModal}>{toggleItemsChange ? "CLOSE FORM" : "ADD NEW"}</button>
                </div>

                {toggleItemsChange && <NewItemModal setToggleItemsChange={setToggleItemsChange} />}

                {/* MAIN CONTENT */}
                <div className={styles.searchSort}>
                    <div className="flex">
                        <form action="">
                            <label htmlFor="">SEARCH ITEM</label>
                            <input type="text" aria-autocomplete='none' className={styles.searchIcon} placeholder='SEARCH ITEMS BY NAME...' value={searchTerm} onChange={handleSearch} />

                            <i className="ri-search-line"></i>
                        </form>
                    </div>
                    <div className={styles.sort}>
                        <div className="flex">
                            <span onClick={() => setSortAsc(!sortAsc)}>
                                <h5>Name</h5>
                                <i className={sortAsc ? "ri-arrow-down-line" : "ri-arrow-up-line"}></i>
                            </span>
                        </div>
                    </div>
                </div>

                {filtered.length > 0 ? <Items sortAsc={sortAsc} filtered={filtered} /> : <div className={styles.noitems}>
                    <h3>No items</h3>
                    {!toggleItemsChange &&
                        <h5 onClick={() => setToggleItemsChange(!toggleItemsChange)}>Add one ➕</h5>
                    }
                </div>}
            </div>
        </>

    )
}

export default Content