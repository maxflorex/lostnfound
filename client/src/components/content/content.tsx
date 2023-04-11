import styles from './content.module.scss'

type Props = {}

const Content = (props: Props) => {
    return (
        <div className="content">
            <div className={styles.topBar}>
                <ul>
                    <li><i className="ri-archive-line"></i></li>
                    <li>All Items</li>
                    <li><i className="ri-arrow-right-s-line"></i></li>
                    <li>Item Collection</li>
                    <li><i className="ri-arrow-right-s-line"></i></li>
                    <li>Main</li>
                </ul>
                <button>ADD NEW ITEM</button>
            </div>
        </div>
    )
}

export default Content