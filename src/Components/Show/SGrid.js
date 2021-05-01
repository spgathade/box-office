import React from 'react';
import ShowCard from './ShowCard';
import ImageNotFound from '../not-found.png';
import { FlexGrid } from '../Styled';

const SGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          image={show.image ? show.image.medium : ImageNotFound}
          name={show.name}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default SGrid;
