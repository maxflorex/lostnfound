import { fakeData, Item } from '../../assets/misc'
import Single from '../single/single'
import styles from './items.module.scss'

type Props = {
    sortAsc: any;
    // filteredCat: any;
    filtered: Item[];
}

const Items = ({ sortAsc, filtered }: Props) => {

    const sortedItems = fakeData.sort((a, b) => {
        if (sortAsc) {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });

    // console.log(filtered);
    

    return (
        <div className={styles.itemGroup}>
            <Single data={filtered} />
        </div>
    )
}

export default Items