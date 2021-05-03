import React, { useState } from 'react';
import MainPage from '../MainPage';
import AGrid from '../Actor/AGrid';
import SGrid from '../Show/SGrid';
import { ApiGET } from '../URL';
import { useLastQuery } from '../custom-hoooks';
import {
  SearchInput,
  RadioInputWrapper,
  SearchButtonWrapper,
} from './homestyled';
import ModifiedRadio from '../ModifiedRadio';

const Home = () => {
  const [Input, setInput] = useLastQuery('');
  const [Result, setResult] = useState(null);
  const [SearchOption, setSearchOption] = useState('shows');
  const ShowSearch = SearchOption === 'shows';

  const OnSearch = () => {
    ApiGET(`/search/${SearchOption}?q=${Input}`).then(Results => {
      setResult(Results);
    });
  };

  const OnInputChange = ev => {
    setInput(ev.target.value);
  };

  const OnRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const OnkeyDown = ev => {
    if (ev.keyCode === 13) {
      OnSearch();
    }
  };
  const RenderOutput = () => {
    if (Result && Result.length === 0) {
      return <div>No Results</div>;
    }
    if (Result && Result.length > 0) {
      return Result[0].show ? <SGrid data={Result} /> : <AGrid data={Result} />;
    }
    return null;
  };
  return (
    <MainPage>
      <SearchInput
        type="text"
        placeholder="Search Shows or Actor"
        onChange={OnInputChange}
        onKeyDown={OnkeyDown}
        value={Input}
      />
      <RadioInputWrapper>
        <div>
          <ModifiedRadio
            label="Shows"
            id="showsearch"
            checked={ShowSearch}
            value="shows"
            onChange={OnRadioChange}
          />
        </div>
        <div>
          <ModifiedRadio
            label="Actors"
            id="actorsearch"
            checked={!ShowSearch}
            value="people"
            onChange={OnRadioChange}
          />
        </div>
      </RadioInputWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={OnSearch}>
          Search
        </button>
      </SearchButtonWrapper>
      {RenderOutput()}
    </MainPage>
  );
};
export default Home;
