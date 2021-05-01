import React, { useState } from 'react';
import MainPage from './MainPage';
import AGrid from './Actor/AGrid';
import SGrid from './Show/SGrid';
import { ApiGET } from './URL';

const Home = () => {
  const [Input, setInput] = useState('');
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
      <input
        type="text"
        placeholder="Search Shows or Actor"
        onChange={OnInputChange}
        onKeyDown={OnkeyDown}
        value={Input}
      />
      <div>
        <label htmlFor="showsearch">
          <input
            type="radio"
            checked={ShowSearch}
            value="shows"
            onChange={OnRadioChange}
            id="showsearch"
          />
          Shows
        </label>
        <label htmlFor="actorsearch">
          <input
            type="radio"
            checked={!ShowSearch}
            onChange={OnRadioChange}
            value="people"
            id="actorsearch"
          />
          Actor
        </label>
      </div>

      <button type="button" onClick={OnSearch}>
        Search
      </button>
      {RenderOutput()}
    </MainPage>
  );
};
export default Home;
