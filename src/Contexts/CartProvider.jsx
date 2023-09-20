import useLocalStorage from "../components/Hooks/useLocalStorage"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {

    const create_epoc = () => {
        const currentTimestamp = Date.now();
        const epochInSeconds = Math.floor(currentTimestamp / 1000);
        localStorage.setItem("epoc", epochInSeconds)
        return epochInSeconds
    }

    const get_epoc = () => {
        const storedValue = localStorage.getItem("epoc");
        if (storedValue === null) {
            return create_epoc()
        }
        else {
            return storedValue
        }
    }
    
    const epoc = get_epoc()
    const [items, setItems] = useLocalStorage(epoc, [])

    const add_product = (props) => {

        const item = {
            id: props.id,
            quantity: props.quantity,
        }
        const product = items.find(item => item.id === props.id)
        if (product) {
            const tmp_item = items.map((i) =>{
                if (i.id===product.id){
                    return item
                }
                return i
            })
            setItems(tmp_item)
        }
        else {
            setItems((i)=>{
                return [item, ...i]
            })
        }
    }

    return (
        <CartContext.Provider
            value={{ add_product, items}}
        >
            {children}
        </CartContext.Provider >
    )
}

export default CartProvider