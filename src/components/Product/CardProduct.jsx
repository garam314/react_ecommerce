import { Card, Button } from "react-bootstrap";
import "./product.style.css";
import CardCarousel from "./CardCarousel.jsx";

const Product = (props) => {
  // TODO: Change por destructruture item
  // const { item: p } = props

  // TODO: what is p???, variable is not descriptive
  const p = props.item;
  return (
    <Card>
      <CardCarousel key={p.id} id_product={p.id} />
      <Card.Img />
      <Card.Header>
        {p.description}
        <Card.Body>
          <Card.Title>{p.short_name}</Card.Title>
          <Card.Text>${p.price}</Card.Text>
          <Button variant="info">Detalle</Button>
        </Card.Body>
      </Card.Header>
    </Card>
  );
};

export default Product;
