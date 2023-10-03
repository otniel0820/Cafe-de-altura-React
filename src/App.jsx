import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./page/Landing";
import Navbar from "./components/Navbar";
import Copyrigth from "./components/Copyrigth";
import Store from "./page/Store";
import Basket from "./page/Basket";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/tienda" element={<Store/>} />
          <Route path="/cesta" element={<Basket/>} />
        </Routes>
        <Copyrigth/>
      </BrowserRouter>
    </>
  );
}

export default App;
