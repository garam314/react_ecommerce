import "../../styles/AddCar_style.css"
import AddItem from "./AddItem"
import AddItemProvider from "../../Contexts/AddItemProvider"
import AddButton from "./AddButton"

const AddProduct = (props) => {
    const { product } = props

    return (
        <>
            <AddItemProvider start={1}>
                <AddItem stock={product.stock} callback={false} />
                <AddButton id={product.id} price={product.price}></AddButton>
            </AddItemProvider>
        </>
    )
}


export default AddProduct