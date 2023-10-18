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
import Suscripcion from "./page/Suscripcion";
import ParaEmpresas from "./page/ParaEmpresas";
import SobreNosotros from "./page/SobreNosotros";
import Contacto from "./page/Contacto";
import OfertasTrabajo from "./page/OfertasTrabajo";
import PoliticasPrivacidad from "./page/PoliticasPrivacidad";
import PoliticaCookies from "./page/PoliticaCookies";
import TerminosCondiciones from "./page/TerminosCondiciones";
import CondicionesCopyright from "./page/CondicionesCopyright";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/tienda" element={<Store/>} />
          <Route path="/cesta" element={<Basket/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/pedido_realizado" element={<PedidoRealizado/>} />
          <Route path="/suscripcion" element={<Suscripcion/>} />
          <Route path="/para_empresas" element={<ParaEmpresas/>} />
          <Route path="/sobre_nosotros" element={<SobreNosotros/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/ofertas_trabajo" element={<OfertasTrabajo/>} />
          <Route path="/politicas_de_privacidad" element={<PoliticasPrivacidad/>} />
          <Route path="/política_de_cookies" element={<PoliticaCookies/>} />
          <Route path="/términos_y_condiciones" element={<TerminosCondiciones/>} />
          <Route path="/copyright" element={<CondicionesCopyright/>} />
        </Routes>
        <Copyrigth/>
      </BrowserRouter>
    </>
  );
}

export default App;
