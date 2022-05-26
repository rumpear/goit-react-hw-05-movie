import { useState } from 'react';

export const SearchForm = ({ onQuery, onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onQuery(input);
    onSearch({ query: input });
  };

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
