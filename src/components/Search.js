import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSearchText} from '../redux/notes/notesSlice';

function Search() {
  const searchText = useSelector((state) => {
    return state.searchText;
  });
  console.log(searchText);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value));
  }
  return (
    <div>
      <input type='text' className='search-box' value={searchText} onChange={handleChange} placeholder='search' />
    </div>
  );
}
export default Search;
