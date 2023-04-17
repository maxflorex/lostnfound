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
    selectedItem: any;
    setOpenActions: any
}

const Actions = ({ closeModal, openActions, selectedId, selectedItem, setOpenActions }: Props) => {

    const { setToggleItemsChange, toggleItemsChange } = useContext(ItemsContext);

    const handleDeleteItem = (e: React.MouseEvent) => {
        e.preventDefault();
        deleteItemById(selectedId);
        setToggleItemsChange(!toggleItemsChange)
        setOpenActions('')
    };

    return (
        <div className={`modal ${styles.actions}`}>
            <section>
                {openActions === 'edit' ? <EditItem closeModal={closeModal} selectedItem={selectedItem} setOpenActions={setOpenActions} /> : <>
                    <div className={styles.message}>
                        <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                            onClick={closeModal}
                        ></i>
                        <h4>Are you sure about this?</h4>
                        <h5>You are about to <span>DELETE this item</span></h5>
                        <div className={styles.buttons}>
                            <button className={styles.btn} onClick={handleDeleteItem}>Yes, delete this item</button>
                            <button onClick={closeModal}>No, cancel</button>
                        </div>
                    </div>
                </>}
            </section>
        </div >
    )
}

export default Actions