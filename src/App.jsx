import React from 'react';
import Header from './components/Header';
import IndicatorsContainer from './components/IndicatorsContainer';
import MainCardsContainer from './components/MainCardsContainer';
import OverviewContainer from './components/OverviewContainer';
import MainCard from './components/MainCard';
import OverviewCard from './components/OverviewCard';
import './assets/styles/App.scss';

const App = () => {
  return (
    <>
      <Header />
      <IndicatorsContainer>
        <MainCardsContainer>
          <MainCard />
        </MainCardsContainer>
        <OverviewContainer>
          <OverviewCard />
        </OverviewContainer>
      </IndicatorsContainer>
    </>
  );
};

export default App;
