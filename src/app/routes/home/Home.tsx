import React from 'react';
import Welcome from '../../components/Welcome/Welcome';
import Counter from '../../components/Welcome/Welcome';
import styles from '../../App.module.css';

function Home() {
  return (
    <>
      <Welcome />
      <Counter />
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className={styles['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className={styles['App-link']}
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
      ;
    </>
  );
}

export default Home;
