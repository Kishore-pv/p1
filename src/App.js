import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/p1" element={<Layout />}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
