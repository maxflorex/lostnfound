import { Action } from '@remix-run/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../redux/UserSlice'
import Actions from '../actions/actions'
import styles from './profile.module.scss'
import ProfileActions from '../profileActions/profileActions'
type Props = {
    setShowLogin: any
}

const Profile = ({ setShowLogin }: Props) => {

    const [openActions, setOpenActions] = useState('')
    const [openActionsPro, setOpenActionsPro] = useState('')
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user.value)

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

    return (
        <div className={`modal dismiss ${styles.profile}`}>
            <h3>Hi, {user.name}👋</h3>
            <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                onClick={closeModal}
            ></i>

            <button onClick={handleLogout}>LOGOUT</button>
            <h4>My Items</h4>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>When</th>
                        <th>Picture</th>
                        <th>Status</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item Title</td>
                        <td>Item Category</td>
                        <td>City Name</td>
                        <td>Country Name</td>
                        <td>Date/Time</td>
                        <td><img src="item_picture.jpg" /></td>
                        <td>Item Status</td>
                        <td>Contact Info</td>
                        <td>
                            <i className="ri-edit-2-line ri-2x" onClick={() => setOpenActions('edit')} />
                            <i className="ri-delete-bin-line ri-2x" onClick={() => setOpenActions('delele')} />
                        </td>
                    </tr>
                </tbody>
            </table>

            {openActions !== '' && <Actions closeModal={closeModalAction} openActions={openActions} />}
            {openActionsPro !== '' && <ProfileActions closeModal={closeModalAction} openActionsPro={openActionsPro} />}


            <div className={styles.danger}>
                <span onClick={() => setOpenActionsPro('delete-profile')}><i className="ri-user-unfollow-line"></i>Delete Profile</span>
                <span onClick={() => setOpenActionsPro('edit-profile')}><i className="ri-settings-4-line"></i>Edit Profile</span>
                <span onClick={() => setOpenActionsPro('delete-all')}><i className="ri-delete-bin-2-line"></i>Delete ALL Items</span>
            </div>

        </div>
    )
}

export default Profile