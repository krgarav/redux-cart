import { cartAction } from '../../store/cart-reducer';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useDispatch} from "react-redux"
const Products = (props) => {
  const dispatch = useDispatch()
  const onAddHandler =()=>{
    dispatch(cartAction.addToCart())
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
          onAdd={onAddHandler}
        />
      </ul>
    </section>
  );
};

export default Products;
