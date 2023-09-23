import { Button, Form } from "react-bootstrap"
import "../../styles/AddCar_style.css"
import { useContext } from "react"
import { AddItemContext } from "../../Contexts/AddItemContext"
import { CartContext } from "../../Contexts/CartContext"


const AddItem = (props) => {

    const { stock, callback, id, price } = props
    const { add_product } = useContext(CartContext)
    const { quantity, update_quantity } = useContext(AddItemContext)

    const add = () => {
        if (quantity < stock) {
            if (callback)
                update_quantity({ amount: quantity + 1, callback: add_item });
            else
                update_quantity({ amount: quantity + 1 });
        }

    }
    const remove = async () => {
        if (quantity > 1) {
            if (callback)
                update_quantity({ amount: quantity - 1, callback: add_item });
            else
                update_quantity({ amount: quantity - 1 });
        }
    }

    const add_item = (updatedQuantity) => {
        const product = {
            id: id,
            quantity: updatedQuantity,
            price: price
        }
        add_product(product)
    }


    return (
        <>
            <div className="m-auto">
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
            </div>
        </>
    )
}


export default AddItem