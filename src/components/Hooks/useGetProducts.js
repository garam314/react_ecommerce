import { useEffect, useState } from 'react'
import { getAllProducts } from '../ServicesDB/getProductsFromDB.js'


const useGetProducts = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getAllProducts().then((e) => {
            setItem(e)
        });
    }, []);

    return {
        item
    };
};

export default useGetProducts