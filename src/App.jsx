import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeliveryHistory from "./pages/DeliveryHistory/DeliveryHistory";
import Header from "./components/Header/Header";
import Shipment from "./pages/Shipment/Shipment";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DeliveryHistory />} />
          <Route path="/shipment/:orderId" element={<Shipment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
