import { useState } from 'react'
import { fakeData } from '../../assets/misc'
import Single from '../single/single'
import styles from './items.module.scss'

type Props = {
    sortAsc: any;
}

const Items = ({ sortAsc }: Props) => {

    const sortedItems = fakeData.sort((a, b) => {
        if (sortAsc) {
            return a.title.localeCompare(b.title);
        } else {
            return b.title.localeCompare(a.title);
        }
    });

    return (
        <div className={styles.itemGroup}>
            <Single data={sortedItems} />
        </div>
    )
}

export default Items