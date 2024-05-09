import React from 'react';

const CharacterItem = ({ item }) => {
  const appearedInBetterCallSaul = item.better_call_saul_appearance;

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1 style={{ bottom: 0 }}>{item.name}</h1>
          <ul>
            <li>
              <strong>occupation:</strong> {item.occupation.toString()}
            </li>

            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            {appearedInBetterCallSaul.length > 0 ? (
              <li>
                <strong>Also Starred in Better Call Saul</strong>
              </li>
            ) : (
              ' '
            )}

            <br />

            <li style={{ color: 'black', fontSize: '18px' }}>
              <strong style={{ fontWeight: 'bold' }}>Actor:</strong>{' '}
              {item.portrayed}
            </li>

            <li style={{ color: '#0d0d0d', fontSize: '18px' }}>
              <strong style={{ fontWeight: 'bold' }}>DOB:</strong>{' '}
              {item.birthday}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
