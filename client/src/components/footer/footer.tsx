import styles from './footer.module.scss'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.txt}>Made with ❤️ by Max Flores</p>
    </footer>
  )
}

export default Footer