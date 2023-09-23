import { Container } from "react-bootstrap";
import { format_price } from '../../utils/utils.js'

function DescriptionProducts(props = {}) {
    const { product } = props

    return (
        <>
            <Container>
                <div className="bg-warning text-center h3 p-2 mb-5">
                    {`${product.short_name} - ${format_price(product.price)}`}
                </div>
                <div>
                    <div>
                        <p className="fst-italic">{product.description}</p>
                    </div>
                    <div>
                        <p className="mb-1"><span className="fw-bold">Nombre: </span> {product.name}</p>
                        <p className="mb-1"><span className="fw-bold">Fabricante: </span>{product.trademark}</p>
                        <p className="mb-1"><span className="fw-bold">Serie: </span>{product.serie}</p>
                        <div>
                            <p className="mb-1"><span className="fw-bold">Caterogia: </span>{product.category.join(" - ")}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default DescriptionProducts