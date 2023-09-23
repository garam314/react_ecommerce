import { useState } from "react";
import { Form } from "react-bootstrap";



const ModalEmail = ({onEmailChange}) => {
    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(true)
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    const handleEmailChange = (e) => {
        const { value } = e.target
        setEmail(value)
        setIsValid(emailRegex.test(value))

        onEmailChange(value)
    }

    return (
        <Form.Group controlId="formBasicEmail" className="d-flex gap-3 mb-3">
            <Form.Label className="m-auto w-25">Email:</Form.Label>
            <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                isInvalid={!isValid}
                required
            />
        </Form.Group>
    )
}

export default ModalEmail