import React from 'react';
import ActorCard from './ActorCard';
import ImageNotFound from '../not-found.png';
import { FlexGrid } from '../Styled';

const AGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          gender={person.gender}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          image={person.image ? person.image.medium : ImageNotFound}
        />
      ))}
    </FlexGrid>
  );
};

export default AGrid;
