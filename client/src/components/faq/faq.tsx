import styles from './faq.module.scss'

type Props = {
  setOpenFaq: any
}

const Faq = ({ setOpenFaq }: Props) => {

  const closeModal = (e: any) => {
    if (e.target.classList.contains('dismiss')) {
      setOpenFaq(false);
    }
  };

  return (
    <div className={styles.box}>
      <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
        onClick={closeModal}
      ></i>
      <i className={`ri-arrow-left-s-fill ri-3x ${styles.arrow}`}></i>
      <h6>Questions?</h6>
      <h5>
        <a href="mailto:maxblute@gmail.com">
          Contact me
        </a>
      </h5>
    </div>
  )
}

export default Faq