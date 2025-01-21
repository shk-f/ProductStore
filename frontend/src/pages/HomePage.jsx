import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);

	return (
		<Container className="py-5">
			<h2 className="text-center mb-5">
				<span className="bg-gradient text-primary">Current Products 🚀</span>
			</h2>

			<Row className="g-4">
				{products.length > 0 ? (
					products.map((product) => (
						<Col xs={12} md={6} lg={4} key={product._id}>
							<ProductCard product={product} />
						</Col>
					))
				) : (
					<Col xs={12}>
						<Card className="text-center">
							<Card.Body>
								<Card.Title>No products found 😢</Card.Title>
								<Link to="/create">
									<Button variant="link" className="text-primary">
										Create a product
									</Button>
								</Link>
							</Card.Body>
						</Card>
					</Col>
				)}
			</Row>

			{products.length === 0 && (
				<div className="text-center mt-3">
					<Spinner animation="border" variant="primary" />
				</div>
			)}
		</Container>
	);
};

export default HomePage;
