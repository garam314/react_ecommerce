import React from "react";
import Product from "./CardProduct.jsx";
import { Col, Container, Row } from "react-bootstrap";

const CardGridProduct = ({ products = [] }) => {
  return (
    <Container className="mt-5">
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-5">
            <Product item={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGridProduct;
