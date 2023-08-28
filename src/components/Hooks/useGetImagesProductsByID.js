import { useEffect, useState } from 'react'
import { getImageByID } from '../ServicesDB/getProductsFromDB.js'


const useGetImagesProductsByID = (id) => {
    const [images, setImage] = useState([]);

    useEffect(() => {
        getImageByID(id).then((e) => {
            setImage(e)
        });
    }, [id]);

    return {
        images
    };
};

export default useGetImagesProductsByID