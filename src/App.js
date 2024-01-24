import {useState} from 'react';
import './style.css';
import Dropdown from './dropdown';

function App() {
  const [selectedValue, setSelectedValue] = useState('Select option');
  return (
    <div className="App">
      <h1 className="container">
        <p>React Dropdown</p>
      </h1>
      <Dropdown selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>
    </div>
  );
}

export default App;
