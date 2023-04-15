import { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/slices/UserSlice'
import Actions from '../actions/actions'
import styles from './profile.module.scss'
import ProfileActions from '../profileActions/profileActions'
import { ItemsContext } from '../../routes/Home'
import { ItemInterface } from '../../assets/misc'

type Props = {
    setShowLogin: any
}

const Profile = ({ setShowLogin }: Props) => {
    const { items } = useContext(ItemsContext);
    const [openActions, setOpenActions] = useState('')
    const [openActionsPro, setOpenActionsPro] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user.value)
    const [selectedItem, setSelectedItem] = useState([])
    const [selectedId, setSelectedId] = useState('')
    const filteredByEmail = items.filter((item: any) => item.contact === user.email);

    const closeModal = (e: any) => {
        e.preventDefault()
        setShowLogin(false)
        document.body.style.overflow = 'auto'
    }

    const closeModalAction = (e: any) => {
        e.preventDefault()
        setOpenActions('')
        setOpenActionsPro('')
    }

    const handleLogout = (e: any) => {
        e.preventDefault()

        dispatch(signOut())
        setShowLogin(false)
        document.body.style.overflow = 'auto'
    }

    const handleEditItem = (data: any) => {
        setOpenActions('edit')
        setSelectedItem(data)
    }

    const handleDeletetItem = (id: string) => {
        setOpenActions('delete')
        setSelectedId(id)
    }


    return (
        <div className={`modal dismiss ${styles.profile}`}>
            <h3>Hi, {user.name}👋</h3>
            <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                onClick={closeModal}
            ></i>

            <button onClick={handleLogout}>LOGOUT</button>
            {filteredByEmail && filteredByEmail.length > 0 &&
                <>
                    <h4>My Items</h4>

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Picture</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredByEmail.map((item: ItemInterface, i: number) => (
                                <tr key={i}>
                                    <td>{item.title}</td>
                                    <td><img src={item.picture} /></td>
                                    <td>{item.status}</td>
                                    <td className={styles.actions}>
                                        <i className="ri-edit-2-line ri-2x" onClick={() => handleEditItem(item)} />
                                        <i className="ri-delete-bin-line ri-2x" onClick={() => handleDeletetItem(item._id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            }

            {openActions !== '' && <Actions closeModal={closeModalAction} openActions={openActions} setOpenActions={setOpenActions} selectedId={selectedId} selectedItem={selectedItem} />}
            {openActionsPro !== '' && <ProfileActions closeModal={closeModalAction} openActionsPro={openActionsPro} setOpenActionsPro={setOpenActionsPro} setShowLogin={setShowLogin} />}


            <div className={styles.danger}>
                <section>
                    <i className="ri-spam-2-line ri-2x"></i>
                </section>
                <span onClick={() => setOpenActionsPro('delete-profile')}><i className="ri-user-unfollow-line"></i>Delete Profile</span>
                <span onClick={() => setOpenActionsPro('edit-profile')}><i className="ri-settings-4-line"></i>Edit Profile</span>
                <span onClick={() => setOpenActionsPro('delete-all')}><i className="ri-delete-bin-2-line"></i>Delete ALL Items</span>
            </div>

        </div>
    )
}

export default Profile