import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Products from './components/Products';
import { Routes, Route } from "react-router-dom"
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    const data = await (await (await fetch('https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products')).json());
    setProducts(data);
  }
  useEffect(() => { fetchProduct() }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Products products={products} /><Cart /></>} />
        <Route path='cart' element={<Cart />} />
      </Routes>

    </div>
  )
}

export default App
