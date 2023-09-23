import { useState, useContext } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { CartContext } from "../../Contexts/CartContext"
import { format_price, get_date } from "../../utils/utils"
import useInsertSale from "../Hooks/useInsertSale"
import ModalEmail from "./ModalEmail"
import ModalPhone from "./ModalPhone"
import { SwalContext } from "../../Contexts/SwalContext"
import { useNavigate } from "react-router"

const ModalPay = () => {
    const { isSaving, insertSale } = useInsertSale()
    const [show, setShow] = useState(false)
    const { items, clear_localStarage } = useContext(CartContext)
    const [emailValue, setEmailValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [clientName, setClientname] = useState("")
    const { question_yesno } = useContext(SwalContext)
    const navigate  = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleEmailChange = (value) => {
        setEmailValue(value);
      };
      const handlePhoneChange = (value) => {
        setPhoneValue(value);
      };

    //NAME
    
    if (!isSaving)
    {
        clear_localStarage()
        navigate("/")
    }


    const handleNameChange = (e) => {
        const { value } = e.target
        setClientname(value)
    }

    const total = format_price(items.reduce((accumulator, item) => {
        return (accumulator + (item.price * item.quantity))
    }, 0))

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const sale = {
            total: total,
            detail: items,
            date: get_date(),
            email: emailValue,
            phone: phoneValue,
            client_name: clientName
        }
        const result = await question_yesno({ title: "Pagar", text: "Esta Seguro De Continuar?", title_toast: "Pagar", text_toast:"Su Compra Fue Exitosa" })
        if (result){
            insertSale(sale)
            setShow(false)
        }

    };

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Pagar
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        Total a Pagar: {total}
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleFormSubmit}>
                    <Modal.Body>
                        <Form.Group className="d-flex gap-3 mb-3">
                            <Form.Label className="m-auto w-25">Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                onChange={handleNameChange}
                                value={clientName}
                                required
                            />
                        </Form.Group>
                        <ModalEmail onEmailChange={handleEmailChange}/>
                        <ModalPhone onPhoneChange={handlePhoneChange}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit">
                            Pagar
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}


export default ModalPay