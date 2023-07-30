import './App.css';

import {useDispatch} from 'react-redux'
import {addToCart} from './redux/action'

function App() {

  const dispatch = useDispatch();
  const dummyItem = {
    name: "Asus Tuf",
    model: "FX 505",
    color: "Black"
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(dummyItem))}>Add to cart!!</button>
    </div>
  );
}

export default App;
