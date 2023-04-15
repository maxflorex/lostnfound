import { useDispatch, useSelector } from 'react-redux'
import { deleteAllItems, deleteUser } from '../../api/api'
import EditProfile from '../editProfile/editProfile'
import styles from './profileActions.module.scss'
import { signOut } from '../../redux/slices/UserSlice'
import { useContext } from 'react'
import { ItemsContext } from '../../routes/Home'

type Props = {
    openActionsPro: any,
    closeModal: any,
    setOpenActionsPro: any,
    setShowLogin: any
}

const ProfileActions = ({ openActionsPro, closeModal, setOpenActionsPro, setShowLogin }: Props) => {
    const user = useSelector((state: any) => state.user.value)
    const { items, setToggleItemsChange, toggleItemsChange } = useContext(ItemsContext);
    const dispatch = useDispatch()

    const handleDeleteProfile = (e: any) => {
        e.preventDefault()
        deleteUser(user.id).then(() => {
            console.log('This user has been deleted.');
            dispatch(signOut())
        }).finally(() => {
            setOpenActionsPro('')
            setShowLogin(false)
        })
    }

    const ids = items.map(item => item._id);

    const handleDeleteAllItems = (e: any) => {
        e.preventDefault()
        deleteAllItems(ids).then(() => {
            console.log('All items have been deleted 😥');
            setOpenActionsPro('')
            setShowLogin(false)
            setToggleItemsChange(!toggleItemsChange)
        }).catch((err) => {
            console.log(err);

        })
    }



    return (
        <div className={`modal ${styles.profileActions}`}>
            <section>
                {openActionsPro === 'delete-profile' &&
                    <>
                        <div className={styles.message}>
                            <h4>Are you sure about this?</h4>
                            <h5>You are about to <span>DELETE your profile</span></h5>
                            <div className={styles.buttons}>
                                <button onClick={handleDeleteProfile}>Yes, DELETE PROFILE</button>
                                <button onClick={closeModal}>No, cancel</button>
                            </div>
                        </div>
                    </>}
                {openActionsPro === 'edit-profile' && <EditProfile closeModal={closeModal} setShowLogin={setShowLogin} />}
                {openActionsPro === 'delete-all' &&
                    <>
                        <div className={styles.message}>
                            <h4>Are you sure about this?</h4>
                            <h5>You are about to <span>DELETE ALL the items</span> you have posted so far</h5>
                            <div className={styles.buttons}>
                                <button onClick={handleDeleteAllItems}>Yes, delete ALL MY ITEMS</button>
                                <button onClick={closeModal}>No, cancel</button>
                            </div>
                        </div>
                    </>}
            </section>
        </div>
    )
}

export default ProfileActions;