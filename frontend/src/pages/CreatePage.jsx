import React, { useState } from "react";
import { useProductStore } from "../store/product";
import { Toast, Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify"; // Correct import of toast

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast.error(message);  // Use toast for error
		} else {
			toast.success(message);  // Use toast for success
		}
		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<Container>
			<Row className="justify-content-center mt-5">
				<Col md={6}>
					<Card>
						<Card.Body>
							<Card.Title className="text-center mb-4">Create New Product</Card.Title>
							<Form>
								<Form.Group className="mb-3">
									<Form.Label>Product Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter product name"
										name="name"
										value={newProduct.name}
										onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Price</Form.Label>
									<Form.Control
										type="number"
										placeholder="Enter product price"
										name="price"
										value={newProduct.price}
										onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
									/>
								</Form.Group>
								<Form.Group className="mb-3">
									<Form.Label>Image URL</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter image URL"
										name="image"
										value={newProduct.image}
										onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
									/>
								</Form.Group>

								<Button variant="primary" onClick={handleAddProduct} className="w-100">
									Add Product
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default CreatePage;
