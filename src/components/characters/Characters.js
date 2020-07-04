import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterGrid from './CharacterGrid';
import Search from '../ui/Search';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setCharacters(result.data);
      setIsLoading(false);
    };
    fetchCharacters();
  }, [query]);

  return (
    <div className='container'>
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={characters} />
    </div>
  );
};

export default Characters;
