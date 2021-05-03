import React from 'react';
import { TitleWrapper } from './Titlestyled';

const title = ({ Title, Subtitle }) => {
  return (
    <TitleWrapper>
      <div>
        <h1>{Title}</h1>
        <p>{Subtitle}</p>
      </div>
    </TitleWrapper>
  );
};

export default title;
