import { ItemInterface } from '../../assets/misc'
import Single from '../single/single'
import styles from './items.module.scss'

type Props = {
    sortAsc: any;
    filtered: ItemInterface[];
}

const Items = ({ sortAsc, filtered }: Props) => {

    const sortedItems = filtered.sort((a, b) => {
        if (sortAsc) {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });    

    return (
        <div className={styles.itemGroup}>
            <Single data={filtered} />
        </div>
    )
}

export default Items