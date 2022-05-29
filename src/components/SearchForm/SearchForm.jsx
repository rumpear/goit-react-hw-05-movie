import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const SearchForm = ({ onSearch, query }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ query: input });
  };

  useEffect(() => {
    if (query) {
      setInput(query);
    }
  }, [query]);

  return (
    <>
      <form action="">
        <input
          name="search"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value.trim())}
        />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  query: PropTypes.string,
};
