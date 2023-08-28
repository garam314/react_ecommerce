import NavBar from "./components/navbar/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/style.css";
import Product from './components/Product/CardProduct.jsx'
import useGetProducts from './components/Hooks/useGetProducts.js'
import { Col, Row } from "react-bootstrap";

function App() {

  const {item} = useGetProducts();

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <Row>
              {item.map((product) =>
              <Col md={4} className="mb-5">
                <Product key = {product.id} item={product}></Product>
              </Col>)}
        </Row>
      </div>
    </>
  );
}

export default App;
