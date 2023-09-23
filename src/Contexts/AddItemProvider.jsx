import { useState } from "react";
import { AddItemContext } from "./AddItemContext";

export const AddItemProvider = ({ children, start }) => {
    const [quantity, setQuantity] = useState(start)

    const update_quantity = (props) => {
        const { amount, callback } = props
        setQuantity(amount)
        if (typeof callback === "function") {
            callback(amount);
        }
    }

    return (
        <AddItemContext.Provider value={{ quantity, setQuantity, update_quantity }}>
            {children}
        </AddItemContext.Provider>
    );
};

export default AddItemProvider