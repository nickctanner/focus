import React, { useContext } from 'react';

import NotesContext from '../../context/notes-context';
import CredentialsContext from '../../context/credentials-context';
import { startLogout } from '../../actions/auth';

import styles from './Header.module.css';

const Header = () => {
  const { focus } = useContext(NotesContext);
  const { userEmail, userAvatar } = useContext(CredentialsContext);

  return (
    <header>
      <div
        className={styles.header}
        style={{ visibility: focus ? 'hidden' : 'visible' }}
      >
        <div className={styles.headerTitle}>
          <h1>Focus</h1>
          <p>Simple. Clean. Done.</p>
        </div>
        <div className={styles.headerProfile}>
          <div className={styles.credentials}>
            <span>{userEmail}</span>
            <img src={userAvatar || '/images/user.png'} alt="User's Avatar" />
          </div>
          <button
            className='button log'
            style={{ display: focus ? 'none' : 'block' }}
            title='Sign Out'
            onClick={startLogout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header as default };
