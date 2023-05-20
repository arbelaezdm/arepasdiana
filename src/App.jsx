import Header from "../src/components/header/Header";
import Slider from "../src/components/slider/Slider";
import Productos from "../src/components/productos/Productos";
import Footer from "../src/components/footer/Footer";
import Whatsapp from "../src/components/whatsapp/Whatsapp";
import Puntos from "../src/components/puntos/Puntos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Productos />
      <Whatsapp />
      <Puntos />
      <Footer />
    </>
  );
}

export default App;
