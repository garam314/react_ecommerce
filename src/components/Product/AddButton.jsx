import { Button } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
import { AddItemContext } from "../../Contexts/AddItemContext"
import { SwalContext } from "../../Contexts/SwalContext"

const AddButton = (props) => {
    const { id, price } = props
    const { add_product } = useContext(CartContext)
    const { quantity } = useContext(AddItemContext)
    const { information } = useContext(SwalContext)

    const add_item = () => {
        const product = {
            id: id,
            quantity: quantity,
            price: price
        }
        add_product(product)
        information({ title: "Agregado", text: "Tu Producto ha sido Agregado" })
    }



    return (
        <div className="text-center">
            <Button onClick={() => add_item()}>Agregar</Button>
        </div>
    )
}


export default AddButton