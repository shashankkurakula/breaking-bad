import React from 'react';

import QuoteItem from './QuoteItem';
import Spinner from '../ui/Spinner';

const QuotesGrid = ({ isLoading, items, characters }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <QuoteItem key={item.quote_id} item={item} characters={characters} />
      ))}
    </section>
  );
};

export default QuotesGrid;
