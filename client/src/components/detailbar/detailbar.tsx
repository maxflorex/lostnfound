import { useState } from 'react'
import styles from './detailbar.module.scss'

type Props = {
    setHideBar: any,
    hideBar: any
}

const DetailBar = ({ setHideBar, hideBar }: Props) => {

    const categories = ['ALL', 'HOME', 'ENTERTAINMENT', 'CLOTHING', 'FAMILY', 'ELECTRONICS', 'HOBBIES', 'MISCELLANEOUS', 'VEHICLES']

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCategories, setFilteredCategories] = useState(categories);
    const [selectedCat, setSelectedCat] = useState(0)


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
    };

    return (
        <div className={`${styles.bar} ${hideBar && styles.translate}`}>
            <div className={styles.searchContainer}>
                <label htmlFor="">SEARCH CATEGORY</label>
                <input type="text" autoComplete='off' aria-autocomplete='none' value={searchTerm} onChange={handleSearch} placeholder='SEARCH CATEGORIES...' />
            </div>
            <ul className={styles.categories} >
                {filteredCategories.map((category, i) => {
                    return <div key={i}>
                        <li onClick={() => setSelectedCat(i)} className={`${selectedCat === i && styles.highlight}`}>
                            <i className={selectedCat === i ? "ri-folder-fill" : "ri-folder-line"}></i>{category}
                        </li>
                    </div>
                })}
            </ul>
        </div >


    )
}

export default DetailBar