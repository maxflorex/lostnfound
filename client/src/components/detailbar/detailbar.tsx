import styles from './detailbar.module.scss'

type Props = {}

const DetailBar = (props: Props) => {
    return (


        <div className={styles.bar}>
            <div className={styles.searchContainer}>
                <label htmlFor="">SEARCH ITEM</label>
                <input type="text" autoComplete='off' aria-autocomplete='none'/>
            </div>
        </div>


    )
}

export default DetailBar