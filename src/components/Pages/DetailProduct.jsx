import { Container } from "react-bootstrap";
import NavBar from "../navbar/NavBar"
import useGetProducts from "../Hooks/useGetProducts";
import { useParams } from "react-router";
import ImagesProductsDetail from "../../components/Product/ImagesProductsDetail"
import DescriptionProducts from "../../components/Product/DescriptionProducts.jsx"
import LoadingSpinner from "../Spinner/Spinner.jsx"
import AddProduct from "../Product/AddProduct"


function DetailProduct() {
    const filters = useParams();
    const { isloading, item } = useGetProducts(filters.id)

    if (isloading) return (<LoadingSpinner />)

    const [product] = item
    return (
        <>
            <NavBar />
            <Container>
                <div className="m-auto mt-5 mb-5 rounded-4 w-75 bg-dark-subtle">
                    <div className="m-0 row">
                        <div className="row-cols-6 m-0 mb-5">
                            < ImagesProductsDetail product={product.img} />
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="d-flex gap-3 justify-content-center mb-5">
                            <div>
                                <AddProduct product={product} />
                            </div>
                        </div>
                        <DescriptionProducts product={product}></DescriptionProducts>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default DetailProduct