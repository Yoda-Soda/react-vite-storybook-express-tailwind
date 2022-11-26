import React from 'react';
import styles from './App.module.css';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/home/Home';

function App(): JSX.Element {
  return (
    <Router>
      <div className={styles.App}>
        <header>
          <ul>
            <Link to={'home'}>
              <button>home</button>
            </Link>
            <Link to={'about'}>
              <button>about</button>
            </Link>
          </ul>
          <h1>header</h1>
        </header>
        <main className={styles['App-header']}>
          <Switch>
            <Route path="/about">
              <main>About</main>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
