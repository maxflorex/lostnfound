import EditProfile from '../editProfile/editProfile'
import styles from './profileActions.module.scss'

type Props = {
    openActionsPro: any,
    closeModal: any
}

const ProfileActions = ({ openActionsPro, closeModal }: Props) => {


    return (
        <div className={`modal dismiss ${styles.profileActions}`} onClick={closeModal}>
            <section>

                {openActionsPro === 'delete-profile' &&
                    <>
                        <div className={styles.message}>
                            <h4>Are you sure about this?</h4>
                            <h5>You are about to <span>DELETE your profile</span></h5>
                            <div className={styles.buttons}>
                                <button>Yes, delete ALL my items</button>
                                <button>No, cancel</button>
                            </div>
                        </div>
                    </>}
                {openActionsPro === 'edit-profile' && <EditProfile closeModal={closeModal} />}
                {openActionsPro === 'delete-all' &&
                    <>
                        <div className={styles.message}>
                            <h4>Are you sure about this?</h4>
                            <h5>You are about to <span>DELETE ALL the items</span> you have posted so far</h5>
                            <div className={styles.buttons}>
                                <button>Yes, delete ALL my items</button>
                                <button>No, cancel</button>
                            </div>
                        </div>
                    </>}
            </section>
        </div>
    )
}

export default ProfileActions