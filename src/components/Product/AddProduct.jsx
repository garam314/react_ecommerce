import { Button, Form } from "react-bootstrap"
import "../../styles/AddCar_style.css"
import { useContext, useState } from "react"
import { CartContext } from "../../Contexts/CartContext"

const AddProduct = (props) => {
    const [quantity, setQuantity] = useState(1)
    const { product } = props

    const { add_product } = useContext(CartContext)
    const stock = product.stock


    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }

    }
    const remove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const add_item = () => {
        if (quantity > 0) {
            product['quantity'] = quantity
            add_product(product)
        }
    }

    return (
        <>
            <div className="row-cols-6 d-flex gap-2 justify-content-center">
                <div className="col-2 text-center">
                    <Button style={{ width: "40px" }} onClick={remove}>-</Button>
                </div>
                <div className="col-2 mb-auto mt-auto">
                    <Form.Control className="p-0 text-center" type="number" size="sm" min={1} value={quantity} readOnly />
                </div>
                <div className="col-2 text-center">
                    <Button style={{ width: "40px" }} onClick={add}>+</Button>
                </div>
            </div>
            <div className="text-center">
                <p className="text-primary">Disponibles: {stock}</p>
            </div>
            <div className="text-center">
                <Button onClick={() => add_item()}>Agregar</Button>
            </div>
        </>
    )
}


export default AddProduct