import React from "react";
import { Carousel } from "react-bootstrap";
import useGetImagesProductsByID from "../Hooks/useGetImagesProductsByID.js";

const CardCarousel = (props) => {
  // TODO: dont use snake case, use camel case.
  const id_product = props.id_product;

  const { images } = useGetImagesProductsByID(id_product);
  return (
    <>
      <Carousel fade>
        {images.map((img) => (
          <Carousel.Item key={img}>
            <img className="d-block" src={img} alt={img} />
          </Carousel.Item>
         
        ))}
      </Carousel>
    </>
  );
};

export default CardCarousel;
