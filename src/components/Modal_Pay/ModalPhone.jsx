import { useState } from "react";
import { Form } from "react-bootstrap";



const ModalPhone = () => {
    const [phone, setPhone] = useState()
    const [isValid, setIsValid] = useState(true)
    const phoneNumberRegex = /^(?:\+\d{1,3}\s?)?(\d{1,4}[-\s]?){6,14}\d{1,4}$/

    const handlePhoneChange = (e) => {
        const { value } = e.target
        setPhone(value)
        setIsValid(phoneNumberRegex.test(value))
    }

    return (
        <Form.Group controlId="formBasicEmail" className="d-flex gap-3 mb-3">
            <Form.Label className="m-auto w-25">Teléfono:</Form.Label>
            <Form.Control
                type="number"
                placeholder="Teléfono"
                value={phone}
                onChange={handlePhoneChange}
                isInvalid={!isValid}
            />
            <Form.Control.Feedback type="invalid">
                Ingrese Teléfono Valido
            </Form.Control.Feedback>
        </Form.Group>
    )
}

export default ModalPhone