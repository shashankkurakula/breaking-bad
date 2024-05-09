import React, { useState, useEffect } from 'react';
import axios from 'axios';

import QuotesGrid from './QuotesGrid';

const Quotes = ({api}) => {
  const [characters, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      const result = await axios.get(
        `${api}/quotes`
      );
      setQuotes(result.data);
      setIsLoading(false);
    };
    const fetchCharacters = async () => {
      const result = await axios.get(
        `${api}/characters`
      );
      setCharacters(result.data);
      setIsLoading(false);
    };
    fetchQuotes();
    fetchCharacters();
  }, [api]);

  return (
    <div className='container'>
      <QuotesGrid
        isLoading={isLoading}
        items={quotes}
        characters={characters}
      />
    </div>
  );
};

export default Quotes;
