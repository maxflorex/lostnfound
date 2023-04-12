import styles from './login.module.scss'

type Props = {
  setShowLogin: any
}

const Login = ({ setShowLogin }: Props) => {

  const closeModal = (e: any) => {
    if (e.target.classList.contains('dismiss')) {
      setShowLogin(false);
      document.body.style.overflow = 'auto'
    }
  };

  return (
    <div className='modal dismiss' onClick={closeModal}>
      <h1>Login</h1>
    </div>
  )
}

export default Login