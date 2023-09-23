import { useState } from "react";
import { Form } from "react-bootstrap";



const ModalPhone = ({onPhoneChange}) => {
    const [phone, setPhone] = useState("")
    const [isValid, setIsValid] = useState(true)
    const phoneNumberRegex = /^\d+$/

    const handlePhoneChange = (e) => {
        const { value } = e.target
        setPhone(value)
        setIsValid(phoneNumberRegex.test(value))

        onPhoneChange(value)
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
        </Form.Group>
    )
}

export default ModalPhone