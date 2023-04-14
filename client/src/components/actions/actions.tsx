import EditItem from '../editItem/editItem';
import styles from './actions.module.scss'
type Props = {
    closeModal: any;
    openActions: any
}

const Actions = ({ closeModal, openActions }: Props) => {
    return (
        <div className={`modal dismiss ${styles.actions}`} onClick={closeModal} >
            <section>
                {openActions === 'edit' ? <EditItem closeModal={closeModal} /> : <>
                    <div className={styles.message}>
                        <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                            onClick={closeModal}
                        ></i>
                        <h4>Are you sure about this?</h4>
                        <h5>You are about to <span>DELETE your profile</span></h5>
                        <div className={styles.buttons}>
                            <button className={styles.btn}>Yes, delete ALL my items</button>
                            <button>No, cancel</button>
                        </div>
                    </div>
                </>}
            </section>
        </div >
    )
}

export default Actions