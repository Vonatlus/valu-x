import { FC, useContext, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import './App.css';
import PICTURES from './images';
import { ValuX } from './ValuXContext';

const images = [PICTURES.dogs, PICTURES.cats, PICTURES.chubaka, PICTURES.dyno, PICTURES.planets];
const btnColor = ['lightgreen', 'green', 'yellow', 'orange', 'violet'];

const App: FC = () => {
  const { setFooter, setHeader, setLeftPanel, setRightPanel, setMain } = useContext(ValuX);
  const [color, setColor] = useState('lightgreen');

  const randomizer = () => {
    let index = [0, 1, 2, 3, 4],
      randomIndex = [],
      i = index.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      randomIndex.push(index[j]);
      index.splice(j, 1);
    }

    setMain(images[randomIndex[0]]);
    setFooter(images[randomIndex[1]]);
    setHeader(images[randomIndex[2]]);
    setLeftPanel(images[randomIndex[3]]);
    setRightPanel(images[randomIndex[4]]);

    setColor(btnColor[randomIndex[0]]);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <LeftPanel />
        <Main />
        <RightPanel />
      </div>
      <Footer />
      <button
        className="btn"
        onClick={randomizer}
        style={{backgroundColor: color}}
      >
        Random
      </button>
    </div>
  );
}

export default App;
