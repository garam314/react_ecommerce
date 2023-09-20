import { useEffect, useState } from 'react'
import { getProduct } from '../../db/getFireStore'


const useGetProductByID = (id) => {
    const [item, setItem] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [iserror, setIserror] = useState(false);

    useEffect(() => {
        setIsloading(true)
        setIserror(false)
        getProduct(id).then((e) => {
            setItem(e)
        })
            .catch(() => {
                setIserror(true)
            })
            .finally(() => {
                setIsloading(false)
            })
    }, [id]);

    return { isloading, iserror, item }
};

export default useGetProductByID