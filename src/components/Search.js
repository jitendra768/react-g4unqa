import React, { useState } from 'react';

const Search = () => {
  const [list, setSearch] = useState(['Apple', 'Kiwi', 'cherry']);
  const[searchText,setSearchText] = useState("");

  const searchFilter = list.filter((item)=>item.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <>
      <div>
        <input placholder="type to search" onChange={(e)=>setSearchText(e.target.value)}/>

        <ul>
          {searchFilter.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
