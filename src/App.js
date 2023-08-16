
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import CreatePage from './views/CreatePage';
import TestPage from './views/TestPage';
import Details from './views/Details';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <p>
        <Link to ="/products">Dashboard</Link> |
        <Link to ="/products/add"> Create Product</Link>
      </p>
      <Routes>
        <Route path='/apitest' element={<TestPage />} />
        <Route path='/products' element={<Dashboard />} />
        <Route path='/products/add' element={<CreatePage />} />
        <Route path='/products/:id' element={<Details />} />
        <Route path='/products/:id/edit' element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
