import React from 'react';
import { Carousel } from "react-bootstrap"
import useGetImagesProductsByID from '../Hooks/useGetImagesProductsByID.js'

const CardCarousel = (props) => {
    const id_product = props.id_product
    const { images } = useGetImagesProductsByID(id_product)
    return (
        <>
            <Carousel fade>
                {images.map((img) =>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={img.path_img}
                            alt={img.img_id}
                        />
                    </Carousel.Item>)
                }
            </Carousel>
        </>
    )
}

export default CardCarousel