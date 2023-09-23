import { useState, useContext } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { CartContext } from "../../Contexts/CartContext"
import { format_price, get_date } from "../../utils/utils"
import useInsertSale from "../Hooks/useInsertSale"

const ModalPay = () => {
    const { isSaving, insertSale } = useInsertSale()
    const [show, setShow] = useState(false)
    const { items } = useContext(CartContext)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    //EMAIL
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;


    //PHONE
    const [phone, setPhone] = useState('')
    const [isValidPhone, setIsValidPhone] = useState(true)
    const phoneNumberRegex = /^\d+$/


    //NAME
    const [clientName, setClientname] = useState('')



    const handleEmailChange = (e) => {
        const { value } = e.target
        setEmail(value)

        if (value.length > 0)
            setIsValidEmail(emailRegex.test(value))
        else
            setIsValidEmail(true)
    }

    const handlePhoneChange = (e) => {
        const { value } = e.target
        setPhone(value)

        if (value.length > 0)
            setIsValidPhone(phoneNumberRegex.test(value))
        else
            setIsValidPhone(true)
    }

    const handleNamehange = (e) => {
        const { value } = e.target
        setClientname(value)
    }

    const total = format_price(items.reduce((accumulator, item) => {
        return (accumulator + (item.price * item.quantity))
    }, 0))

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const sale = {
            total: total,
            detail: items,
            date: get_date()
        }

        insertSale(sale)


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
                                onChange={handleNamehange}
                                value={clientName}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="d-flex gap-3 mb-3">
                            <Form.Label className="m-auto w-25">Teléfono:</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Teléfono"
                                value={phone}
                                onChange={handlePhoneChange}
                                isInvalid={!isValidPhone}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="d-flex gap-3 mb-3">
                            <Form.Label className="m-auto w-25">Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                isInvalid={!isValidEmail}
                                required
                            />
                        </Form.Group>
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