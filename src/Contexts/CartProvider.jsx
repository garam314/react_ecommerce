import { CarContext } from "./CartContext"

const CarProvider = ({ children }) => {

    const add_product = (props) => {

        const [epoc_exist, epoc] = get_epoc()

        const item = {
            id: props.id,
            quantity: props.quantity,
        }

        if (epoc_exist) {
            const items = JSON.parse(localStorage.getItem(epoc))
            const product = items.find(item => item.id === props.id)
            if (product) {
                product.quantity = props.quantity
            }
            else {
                items.push(item)
            }
            localStorage.setItem(epoc, JSON.stringify(items))
        }
        else {
            localStorage.setItem(create_epoc(), JSON.stringify([item]))
        }
    }



    const get_epoc = () => {
        const storedValue = localStorage.getItem("epoc");
        if (storedValue === null) {
            return [false, storedValue]
        }
        else {
            return [true, storedValue]
        }
    }


    const create_epoc = () => {
        const currentTimestamp = Date.now();
        const epochInSeconds = Math.floor(currentTimestamp / 1000);
        localStorage.setItem("epoc", epochInSeconds)
        return epochInSeconds
    }

    return (
        <CarContext.Provider
            value={{ add_product, }}
        >
            {children}
        </CarContext.Provider >
    )
}

export default CarProvider