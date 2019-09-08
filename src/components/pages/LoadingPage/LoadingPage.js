import React from 'react';

import styles from './LoadingPage.module.css';

const LoadingPage = () => (
  <div className={styles.loader}>
    <img className='loader__image' src='/images/loader3.gif' alt='Loading...' />
  </div>
);

export { LoadingPage as default };
