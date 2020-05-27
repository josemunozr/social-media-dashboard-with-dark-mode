import React from 'react';
import Header from './components/Header';
import IndicatorsContainer from './components/IndicatorsContainer';
import MainCardsContainer from './components/MainCardsContainer';
import MainCard from './components/MainCard';
import './assets/styles/App.scss';

const App = () => (
  <>
    <Header />
    <IndicatorsContainer>
      <MainCardsContainer>
        <MainCard />
      </MainCardsContainer>
    </IndicatorsContainer>
  </>
);

export default App;
