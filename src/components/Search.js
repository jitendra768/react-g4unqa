import React, { useState } from 'react';

const Search = () => {
  const [list, setSearch] = useState(['Apple', 'Kiwi', 'cherry']);
  return (
    <>
      <div>
        <input placholder="type to search" />

        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
