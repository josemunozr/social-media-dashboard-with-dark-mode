import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import IndicatorsContainer from './components/IndicatorsContainer';
import MainCardsContainer from './components/MainCardsContainer';
import OverviewContainer from './components/OverviewContainer';
import MainCard from './components/MainCard';
import OverviewCard from './components/OverviewCard';
import './assets/styles/App.scss';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('../initialState.json')
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <IndicatorsContainer>
        {
          data.main && data.main.length > 0 && (
            <MainCardsContainer>
              {
                data.main.map((item) => (
                  <MainCard key={item.id} {...item} />
                ))
              }
            </MainCardsContainer>
          )
        }
        <OverviewContainer>
          <OverviewCard />
        </OverviewContainer>
      </IndicatorsContainer>
    </>
  );
};

export default App;
