import { Card, Button } from "react-bootstrap";
import '../../styles/product.style.css'
import CardCarousel from "./CardCarousel.jsx";
import { Link } from 'react-router-dom'
import { format_price } from '../../utils/utils.js'

const Product = (props) => {
  // TODO: Change por destructruture item
  // const { item: p } = props

  // TODO: what is p???, variable is not descriptive
  const p = props.item;
  return (
    <Card>
      <CardCarousel key={p.id} id_product={p.id} />
      <Card.Header>
        {p.serie}
        <Card.Body>
          <Card.Title>{p.short_name}</Card.Title>
          <Card.Text>{format_price(p.price)}</Card.Text>
          <Link to={`/product/${p.id}`}>
            <Button variant="info">Detalle</Button>
          </Link>
        </Card.Body>
      </Card.Header>
    </Card>
  );
};

export default Product;
