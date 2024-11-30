import React from 'react';
import { BrowserRouter as Router, Route, useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return <h1>Product Detail for Product ID: {id}</h1>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/product/1">Product 1</Link>
        <Link to="/product/2">Product 2</Link>
      </nav>
      <Route path="/product/:id" component={ProductDetail} />
    </Router>
  );
}

export default App;
