import NavBar from "../navbar/NavBar.jsx";
import CardGridProduct from "../Product/CardGridProduct.jsx";
import useGetProductProps from "../Hooks/useGetProductProps.js";
import { useParams } from "react-router";
import "./MainPage.css";

function MainPage() {
  const filters = useParams();
  const { item } = useGetProductProps(filters);
  
  return (
    <>
      <NavBar />
      <CardGridProduct products={item} />
    </>
  );
}

export default MainPage;
