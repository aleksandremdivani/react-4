import "./App.css";
import { useRef, useState } from "react";
import Product from "./components/Product";
import searchIcon from './assets/search.svg';
const products = [
  {
    id: 1,
    name: "High-End Laptop",
    price: 3200,
    category: "Electronics",
    inStock: true,
    rating: 4.8,
    description: "Powerful workstation for developers and creators.",
  },
  {
    id: 2,
    name: "Ergonomic Mouse",
    price: 85,
    category: "Accessories",
    inStock: true,
    rating: 4.5,
    description: "Wireless vertical mouse designed to reduce wrist strain.",
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 150,
    category: "Accessories",
    inStock: false,
    rating: 4.9,
    description: "RGB backlit keyboard with tactile blue switches.",
  },
  {
    id: 4,
    name: "Ultra-Wide Monitor",
    price: 600,
    category: "Electronics",
    inStock: true,
    rating: 4.7,
    description: "34-inch curved display for immersive multitasking.",
  },
  {
    id: 5,
    name: "Noise-Cancelling Headphones",
    price: 250,
    category: "Audio",
    inStock: true,
    rating: 4.6,
    description: "Over-ear headphones with active noise cancellation.",
  },
];
function App() {
  const [list, setList] = useState(products);
  const inputRef = useRef();

  const handleSearch = () => {
    const searchValue = inputRef.current.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
     return product.name.toLowerCase().includes(searchValue);
    });
    setList(filteredProducts);
  };
  return (
    <>
      <div className="flex gap-[10px] p-4">
        <input
          type="text"
          placeholder="search here"
          ref={inputRef}
          className="border p-2"
        />
        <button onClick={handleSearch} className="border rounded-md">
          <img src={searchIcon} alt="search"  className="h-[40px]"/>
        </button>
      </div>

      <main>
        {list.map((item) => {
          return (
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              rating={item.rating}
              description={item.description}
              inStock={item.inStock}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
