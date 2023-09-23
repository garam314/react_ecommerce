import useGetProductByID from "../Hooks/useGetProducts"
import "../../styles/Checkout_style.css"
import LoadingSpinner from "../Spinner/Spinner.jsx"
import { format_price } from "../../utils/utils"
import AddItem from "../Product/AddItem"
import { Link } from "react-router-dom"
import { SwalContext } from "../../Contexts/SwalContext"
import { CartContext } from "../../Contexts/CartContext"
import { useContext } from "react"


const ShowCart = (props) => {
    const { id } = props
    const { isloading, item } = useGetProductByID(id)
    const [product] = item
    const { question_yesno } = useContext(SwalContext)
    const { remove_product } = useContext(CartContext)


    if (isloading) return (<LoadingSpinner />)

    const style_img = {
        backgroundImage: `url(${decodeURI(product['img'][0])})`,
        minWidth: "100px",
        minHeight: "200px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }


    const remove_item = async () => {
        const result = await question_yesno({ title: "Eliminar item", text: "Esta Seguro Que Desea Continuar?", title_toast: "Quitado", text_toast:"Producto Quitado Del Carro" })
        if (result) {
            remove_product({ id: id })

        }
    }

    return (
        <>
            <div className="row mt-5 m-auto">
                <div id="mini-img" className="col-4 text-center p-0 " style={style_img}>
                </div>
                <div className="col-8  border border-dark">
                    <div className="mt-2">
                        <p className="m-0 p-0"><span className="fw-bold">Producto:</span> {product.short_name}</p>
                        <p className="m-0 p-0"><span className="fw-bold">Valor: </span>{format_price(product.price)}</p>
                        <Link to={`/product/${id}`}>Detalle</Link>
                        <div className="mt-5">
                            <AddItem stock={product.stock} callback={true} id={id} price={product.price} />
                        </div>
                        <div className="mb-3">
                            <Link onClick={remove_item}>Quitar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShowCart