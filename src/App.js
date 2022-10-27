import Header from './components/Header';
import NoteInput from './components/NoteInput';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <NoteInput />
      <Content />
    </div>
  );
}
export default App;
