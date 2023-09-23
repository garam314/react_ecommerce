import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MenuRouter from "./components/ReactRouter/ReactRouter";
import CartProvider from "./Contexts/CartProvider"
import SwalProvider from "./Contexts/SwalProvider";

function App() {
  return (
    <SwalProvider>
      <CartProvider>
        <MenuRouter />
      </CartProvider>
    </SwalProvider>

  )
}
export default App;
