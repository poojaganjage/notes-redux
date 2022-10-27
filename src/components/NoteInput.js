import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addNote} from '../redux/notes/notesSlice';
import {nanoid} from 'nanoid';
import ColorButton from './ColorButton';

function NoteInput() {
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('red');

  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.items;
  });
  console.log(items);

  const addNewNote = () => {
    if(text == "") {
      alert("Enter Something!");
      return;
    }
    const note = items.filter((item) => item.note === text); // => if inside for loop and executes for each n every element into the array.
    if(note.length > 0) {
      alert("This Note Exists in the Store!");
      return;
    }
    dispatch(addNote({id: nanoid(5), note: text, bgColor: bgColor}));
  }
  return (
    <div className='textarea-box'>
      <textarea className='textarea-input' placeholder='Enter your note here...' value={text} onChange={(e) => setText(e.target.value)} />
      <div className={"textarea-inner-container"}>
        <ColorButton bgColor={bgColor} setBgColor={setBgColor} />
        <button className='btn-add' onClick={addNewNote}>Add</button>
      </div>
    </div>
  );
}
export default NoteInput;
