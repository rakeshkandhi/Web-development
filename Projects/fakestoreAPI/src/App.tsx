import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface CartItem extends Product {
  quantity: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Header />
      <div className="App">
        <div className="products">
          {products.map((product: Product) => (
            <div className="product" key={product.id}>
              <div className="image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="details">
                <h2 className="title">{product.title}</h2>
                <p className="description">{product.description}</p>
                <div className="additional-info">
                  <div className="rating">
                    <span className="rate">{product.rating.rate}</span>
                    <span className="count">
                      ({product.rating.count} reviews)
                    </span>
                  </div>
                  <div className="category">{product.category}</div>
                </div>
                <div className="price">${product.price}</div>
                <div className="actions">
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
