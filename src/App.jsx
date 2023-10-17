import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./page/Landing";
import Navbar from "./components/Navbar";
import Copyrigth from "./components/Copyrigth";
import Store from "./page/Store";
import Basket from "./page/Basket";
import Checkout from "./page/Checkout";
import PedidoRealizado from "./page/PedidoRealizado";
import Login from "./page/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/inicio" element={<Landing />} />
          <Route path="/tienda" element={<Store/>} />
          <Route path="/cesta" element={<Basket/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/pedido_realizado" element={<PedidoRealizado/>} />
        </Routes>
        <Copyrigth/>
      </BrowserRouter>
    </>
  );
}

export default App;
