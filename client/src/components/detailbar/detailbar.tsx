import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../../assets/misc'
import { getCategory } from '../../redux/slices/FilteredCategoryslices'
import styles from './detailbar.module.scss'
import { log } from 'console'

type Props = {
    hideBar: any
}

const DetailBar = ({ hideBar }: Props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state: any) => state.category.value)

    function filterCategoriesByName(categoriesArray: any, name: string) {
        const filteredCategories = categoriesArray.filter((category: string) => {
            return category.toLowerCase().includes(name.toLowerCase());
        });

        return filteredCategories;
    }

    const handleSearch = (event: any) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filteredCategories = filterCategoriesByName(categories, searchTerm);
        setFilteredCategories(filteredCategories);
    }

    return (
        <div className={`${styles.bar} ${hideBar && styles.translate}`}>
            <div className={styles.searchContainer}>
                <label htmlFor="">SEARCH CATEGORY</label>
                <input type="text" autoComplete='off' aria-autocomplete='none' value={searchTerm} onChange={handleSearch} placeholder='SEARCH CATEGORIES...' />
            </div>
            <ul className={styles.categories} >
                {filteredCategories.map((category, i) => {
                    return <div key={i}>
                        <li onClick={() => dispatch(getCategory(category))} className={`${selectedCategory === category && styles.highlight}`}>
                            <i className={selectedCategory === category ? "ri-folder-fill" : "ri-folder-line"}></i>{category}
                        </li>
                    </div>
                })}
            </ul>
        </div >


    )
}

export default DetailBar