import { addToCart, clearCart, reduceFromCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';


function Main() {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(reduceFromCart(product))}>Reduce from cart</button>
      <button onClick={() => dispatch(clearCart(product))}>Clear Cart</button>
      <button onClick={() => dispatch(productList(product))}>List all products</button>

    </div>
  );
}

export default Main;