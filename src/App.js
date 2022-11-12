import './App.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <div className="App">
            
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<ProductList />} />
              <Route path="product" element={<ProductDetail />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
