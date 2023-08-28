import { Card, Button } from 'react-bootstrap'
import "./product.style.css"



const Product = (props) => {
    const p = props.item
    console.log(process.env)
    return(
            <Card>
                <Card.Img src={p.image[0]}/>
                <Card.Header>{p.description}
                    <Card.Body>
                        <Card.Title>
                            {p.name}
                        </Card.Title>
                        <Card.Text>
                            ${p.price}
                        </Card.Text>
                        <Button variant='info'>Detalle</Button>
                    </Card.Body>
                </Card.Header>
            </Card>
    )
}

export default Product;