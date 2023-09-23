import NavBar from "../navbar/NavBar";
import ShowCart from "../Cart/ShowCart";
import { CartContext } from "../../Contexts/CartContext"
import { useContext } from "react"
import { Container } from "react-bootstrap";
import AddItemProvider from "../../Contexts/AddItemProvider";
import "../../styles/Checkout_style.css"
import { format_price } from "../../utils/utils";
import ModalPay from "../Modal_Pay/ModalPay";

const Checkout = () => {
    const { items } = useContext(CartContext)

    const total = format_price(items.reduce((accumulator, item) => {
        return (accumulator + (item.price * item.quantity))
    }, 0))

    if (items.length === 0) {
        return (
            <>
                <NavBar />
                <Container className="text-center container-void">
                    <div className="m-auto">
                        <h3>Tu Carro Esta Vacio</h3>
                    </div>
                </Container>
            </>
        )
    }


    return (
        <>
            <NavBar />
            <Container>
                {items.map((item) => {
                    return (
                        <AddItemProvider key={item.id} start={item.quantity}>
                            <ShowCart id={item.id} />
                        </AddItemProvider>
                    )
                })}
                <Container className="text-center mt-5 mb-5 bg-info-subtle">
                    <div>
                        <p className="h3 fw-bold "> <span className="fw-bold  h5">Total: </span>{total}</p>
                    </div>
                    <div>
                        <ModalPay />
                    </div>
                </Container>
            </Container>
        </>

    )
}

export default Checkout