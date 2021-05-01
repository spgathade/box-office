import React from 'react';
import Naav from './Naav';
import Title from './Title';

const MainPage = ({ children }) => {
  return (
    <div>
      <Title
        Title="Box-Office"
        Subtitle="Are you looking for some Shows or Actor.?"
      />
      <Naav />
      {children}
    </div>
  );
};

export default MainPage;
