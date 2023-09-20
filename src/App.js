import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MenuRouter from "./components/ReactRouter/ReactRouter";
import CartProvider from "./Contexts/CartProvider"

function App() {
  return (
    <CartProvider>
      <MenuRouter />
    </CartProvider>
    
  )
}
export default App;
