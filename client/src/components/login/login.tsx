import { useState } from 'react';
import Signup from '../signup/signup';
import styles from './login.module.scss'

type Props = {
  setShowLogin: any
}

const Login = ({ setShowLogin }: Props) => {

  const [signingUp, setSigningUp] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle login logic here
  };

  const closeModal = (e: any) => {
    if (e.target.classList.contains('dismiss')) {
      setShowLogin(false);
      document.body.style.overflow = 'auto'
    }
  };

  return (
    <div className='modal dismiss' onClick={closeModal}>

      {!signingUp ?

        <form onSubmit={handleSubmit} className={styles.form}>
          <i className={`ri-close-circle-fill ri-2x dismiss ${styles.close}`}
            onClick={closeModal}
          ></i>
          <h3>Login</h3>
          <div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-autocomplete='none'
              placeholder='Enter your email...'
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-autocomplete='none'
              placeholder='Enter your password...'
            />
          </div>
          <button type="submit">Login</button>
          <p>Not registered? <span onClick={() => setSigningUp(true)}>Create an account</span></p>
        </form>
        :
        <Signup setSigningUp={setSigningUp} />}


    </div>
  )
}

export default Login