import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_products = [
  {
    id: "p1",
    price: 60,
    title: "My first Book",
    description: "Best book ever",
  },
  {
    id: "p2",
    price: 50,
    title: "My Second Book",
    description: "Amazing book ever",
  },
  {
    id: "p3",
    price: 90,
    title: "My Third Book",
    description: "Lovely book ever",
  },
];
const Products = (props) => {
  const items = Dummy_products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{items}</ul>
    </section>
  );
};

export default Products;
