const Product = ({name, price, category, inStock, rating, description}) => (
  <div className="border">
    <h2>{name}</h2>
    <p>{price}$</p>
    <p>{inStock ? "In stock" : "Out of stock"}</p>
    <p>category:{category}</p>
    <p>{description}</p>
    <p>⭐{rating}</p>
  </div>
);

export default Product;