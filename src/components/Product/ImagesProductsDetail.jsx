import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from "react"


const ImagesProductsDetail = ({ product = [] }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePreviewClick = (index) => {
        setCurrentImage(index);
    };
    const style_css = {
        cursor: "pointer"
    }
    return (
        <>
            <div className='d-flex preview-images mt-5 m-auto w-75'>
                <div className='d-flex flex-column gap-3'>
                    {product.map((img, index) => (
                        <div key={index} className='d-flex justify-content-center'>
                            <img className='preview-image active w-50' style={style_css} src={img} alt={img} onClick={() => handlePreviewClick(index)} />
                        </div>
                    ))}
                </div>
                <Carousel showArrows={false} showThumbs={false} selectedItem={currentImage} showStatus={false}>
                    {product.map((img, index) => (
                        <div key={index}>
                            <img className='w-75' src={img} alt={img} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default ImagesProductsDetail