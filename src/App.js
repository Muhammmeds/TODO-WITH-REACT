import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListDetails from './components/ListDetails';

function App() {
  const [list , setList] = useState([])

  console.log(list)
  return (
    <div className='body'>
    <Header setList={setList} list={list}/>
    <ListDetails list={list} setList={setList} />
    </div>
  );
}

export default App;
