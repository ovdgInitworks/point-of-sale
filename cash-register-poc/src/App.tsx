import { useState } from 'react';
import './App.css';

type Product = {
  id: number;
  name: string;
  price: number;
  vatPercentage: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const products: Product[] = [
  { id: 1, name: 'Product A', price: 10, vatPercentage: 20 },
  { id: 2, name: 'Product B', price: 15, vatPercentage: 10 },
  { id: 3, name: 'Product C', price: 20, vatPercentage: 5 },
];

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(0);

  const addToCart = () => {
    if (!selectedProduct || quantity <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === selectedProduct.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product: selectedProduct, quantity }];
    });

    setSelectedProduct(null);
    setQuantity(0);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const vatAmount = (item.product.price * item.product.vatPercentage) / 100;
      const priceWithVAT = item.product.price + vatAmount;
      return total + priceWithVAT * item.quantity;
    }, 0);
  };

  const handleCalculatorInput = (value: number) => {
    setQuantity((prevQuantity) => prevQuantity * 10 + value);
  };

  const clearQuantity = () => {
    setQuantity(0);
  };

  const removeLastDigit = () => {
    setQuantity((prevQuantity) => Math.floor(prevQuantity / 10));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Cash Register System</h1>
      </header>
      <main className="main">
        <section className="product-selection">
          <h2>Select Product</h2>
          <div className="product-buttons">
            {products.map((product) => (
              <button
                key={product.id}
                className={`product-button ${selectedProduct?.id === product.id ? 'selected' : ''}`}
                onClick={() => setSelectedProduct(product)}
              >
                {product.name} (€{product.price}, VAT: {product.vatPercentage}%)
              </button>
            ))}
          </div>
          {selectedProduct && (
            <p className="selected-product-info">
              Selected Product: {selectedProduct.name} (€{selectedProduct.price}, VAT: {selectedProduct.vatPercentage}%)
            </p>
          )}
        </section>
        <section className="calculator">
          <h2>Specify Quantity</h2>
          <div className="calculator-buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <button key={num} onClick={() => handleCalculatorInput(num)}>
                {num}
              </button>
            ))}
            <button onClick={removeLastDigit}>Backspace</button>
            <button onClick={clearQuantity}>Clear</button>
          </div>
          <p>Selected Quantity: {quantity}</p>
          <button onClick={addToCart} disabled={!selectedProduct || quantity <= 0}>
            Add to Cart
          </button>
        </section>
        <section className="shopping-cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.product.id} className="cart-item">
                <span>
                  {item.product.name} - Quantity: {item.quantity} - Total: €
                  {(
                    (item.product.price +
                      (item.product.price * item.product.vatPercentage) / 100) *
                    item.quantity
                  ).toFixed(2)}
                </span>
                <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total Amount: €{calculateTotal().toFixed(2)}</h3>
        </section>
      </main>
    </div>
  );
}

export default App;
