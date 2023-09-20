import NavBar from "../navbar/NavBar.jsx";
import CardGridProduct from "../Product/CardGridProduct.jsx";
import useGetProductProps from "../Hooks/useGetProductProps.js";
import { useParams } from "react-router";
import LoadingSpinner from "../Spinner/Spinner.jsx"

import "./MainPage.css";

function MainPage() {
  const filters = useParams();
  const { isloading, item } = useGetProductProps(filters);

  if (isloading) return (<LoadingSpinner />)
  return (
    <>
      <NavBar />
      <CardGridProduct products={item} />
    </>
  );
}

export default MainPage;
