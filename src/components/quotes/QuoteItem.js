import React from 'react';
const QuoteItem = ({ item, characters }) => {
  const author = item.author;
  const quote = item.quote;

  var img = '';

  characters.forEach((character) => {
    if (author === character.name) {
      img = character.img;
    }
  });

  var text_size = '25px';
  if (quote.length < 30) {
    text_size = '45px';
  } else if (quote.length < 50) {
    text_size = '37px';
  } else if (quote.length < 80) {
    text_size = '30px';
  } else if (quote.length < 100) {
    text_size = '25px';
  } else if (quote.length < 130) {
    text_size = '23px';
  } else if (quote.length > 130) {
    text_size = '20px';
  }

  return (
    <div className='card'>
      <div className='card-inner'>
        <div
          className='card-front'
          style={{
            backgroundColor: '#333333',
            // borderRadius: '5%',
            padding: '20px',
          }}
        >
          <p
            style={{
              fontSize: text_size,
              wordWrap: 'break-Word ',
            }}
          >
            {quote}
          </p>
          {/* <br /> */}
          <p
            style={{
              position: 'absolute',
              fontSize: '12px',
              bottom: 0,
              padding: '15px',
              right: 0,
            }}
          >
            - {item.author}
          </p>
        </div>
        <div className='card-back2'>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
