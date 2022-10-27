import React from 'react';

function NoteItem({items, focus}) {
  return (
    <div className='note-container'>
        {items.length > 0 ? items.map((item) => (
            <div key={item.id} className='note-item' style={{backgroundColor: item.bgColor}}>
                {item.note}
            </div>
        )) : focus && <div className='note-not-found'>Note Not Found!!!</div>}
    </div>
  );
}
export default NoteItem;
