import {useState} from 'react';
import './App.sass';

function App() {
  const [title] = useState('RestaurantFinder')
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
