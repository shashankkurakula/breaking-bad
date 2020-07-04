import React, { useState, useEffect } from 'react';
import axios from 'axios';

import QuotesGrid from './QuotesGrid';

const Quotes = () => {
  const [characters, setCharacters] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      const result = await axios.get(
        `https://breakingbadapi.com/api/quotes?series=Breaking+Bad`
      );
      setQuotes(result.data);
      setIsLoading(false);
    };
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      setCharacters(result.data);
      setIsLoading(false);
    };
    fetchQuotes();
    fetchCharacters();
  }, []);

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
