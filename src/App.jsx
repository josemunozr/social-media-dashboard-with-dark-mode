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
  const [theme, setToggleTheme] = useState('lightTheme');
  useEffect(() => {
    fetch('../initialState.json')
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleClickSwitch = () => {
    const currentTheme = (theme === 'lightTheme') ? 'darkTheme' : 'lightTheme';
    setToggleTheme(currentTheme);
  };

  return (
    <div className={theme}>
      <Header theme={theme} handleClickSwitch={handleClickSwitch} />
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
        {
          data.overview && data.overview.length > 0 && (
            <OverviewContainer>
              {
                data.overview.map((item) => (
                  <OverviewCard key={item.id} {...item} />
                ))
              }
            </OverviewContainer>
          )
        }
      </IndicatorsContainer>
    </div>
  );
};

export default App;
