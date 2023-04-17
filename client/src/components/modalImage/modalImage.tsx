import styles from './modalImage.module.scss'

type Props = {
    url: string,
    setSelectdImage: any
}

const ModalImage = ({ url, setSelectdImage }: Props) => {

    const closeModal = () => {
        setSelectdImage('')
        document.body.style.overflow = 'auto'
    }

    return (
        <div className='modal'>
            <div className={styles.imageContainer}>
                <i
                    className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
                    onClick={closeModal}
                ></i>
                <img src={url} alt="" />
            </div>
        </div>
    )
}

export default ModalImage