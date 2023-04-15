import { useContext } from 'react';
import { deleteItemById } from '../../api/api';
import { ItemInterface } from '../../assets/misc';
import EditItem from '../editItem/editItem';
import styles from './actions.module.scss'
import { ItemsContext } from '../../routes/Home';
type Props = {
    closeModal: any;
    openActions: any;
    selectedId: string;
    selectedItem: any
}

const Actions = ({ closeModal, openActions, selectedId, selectedItem }: Props) => {

    const { setAddNew, addNew } = useContext(ItemsContext);

    const handleDeleteItem = (e: React.MouseEvent) => {
        e.preventDefault();
        deleteItemById(selectedId);
        setAddNew(!addNew)
    };

    return (
        <div className={`modal dismiss ${styles.actions}`} onClick={closeModal} >
            <section>
                {openActions === 'edit' ? <EditItem closeModal={closeModal} selectedItem={selectedItem} /> : <>
                    <div className={styles.message}>
                        <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                            onClick={closeModal}
                        ></i>
                        <h4>Are you sure about this?</h4>
                        <h5>You are about to <span>DELETE your profile</span></h5>
                        <div className={styles.buttons}>
                            <button className={styles.btn} onClick={handleDeleteItem}>Yes, delete ALL my items</button>
                            <button>No, cancel</button>
                        </div>
                    </div>
                </>}
            </section>
        </div >
    )
}

export default Actions