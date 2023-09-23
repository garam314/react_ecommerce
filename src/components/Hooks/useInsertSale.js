import { useState } from "react";
import { registerSale } from "../ServicesDB/getProductsFromDB.js";

const useInsertSale = () => {
    const [isSaving, setisSaving] = useState(true)

    const insertSale = (saleData) => {
        setisSaving(true)
        registerSale(saleData).then(() => {
            setisSaving(false)
        })
            .catch((error) => {
                console.log(error)
                setisSaving(false)
            })
    }

    return {
        isSaving, insertSale
    };
};

export default useInsertSale;
