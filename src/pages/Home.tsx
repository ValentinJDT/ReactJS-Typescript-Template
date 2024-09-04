import { FC } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const [tHome] = useTranslation('home');

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{tHome('title')}</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
};

export default Home;
