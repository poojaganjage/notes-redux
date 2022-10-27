import React from 'react';
import {useSelector} from 'react-redux';
import NodeItem from './NoteItem';

function Content() {
  const items = useSelector((state) => {
    return state.items;
  });
  const searchText = useSelector((state) => {
    return state.searchText;
  });
  let filteredText = items;
  if(searchText && searchText != "") {
    filteredText =  filteredText.filter((note) => note.note.toLowerCase().includes(searchText.toLowerCase()));
    console.log(filteredText);
  } else {
    filteredText =  items;
    console.log(filteredText);
  }
  return (
    <div>
      <NodeItem items={filteredText} focus={items.length > 0} />
    </div>
  );
}
export default Content;
