import React, { useState } from "react";
import { useProductStore } from "../store/product";
import { toast } from "react-toastify";  // Directly using toast from react-toastify
import { Button, Card, Modal, Form } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa"; // Bootstrap-compatible icons

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);
	const { deleteProduct, updateProduct } = useProductStore();
	const [showModal, setShowModal] = useState(false);

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toast.error(message); // Directly using toast
		} else {
			toast.success(message); // Directly using toast
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		setShowModal(false);
		if (!success) {
			toast.error(message); // Directly using toast
		} else {
			toast.success("Product updated successfully"); // Directly using toast
		}
	};

	return (
		<Card style={{ width: "18rem" }} className="mb-4 shadow-sm">
			<Card.Img variant="top" src={product.image} alt={product.name} />
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Rs.{product.price}</Card.Subtitle>
				<div className="d-flex justify-content-between">
					<Button variant="primary" onClick={() => setShowModal(true)}>
						<FaEdit /> Edit
					</Button>
					<Button variant="danger" onClick={() => handleDeleteProduct(product._id)}>
						<FaTrash /> Delete
					</Button>
				</div>
			</Card.Body>

			{/* Modal */}
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Update Product</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Product Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Product Name"
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								placeholder="Price"
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Image URL</Form.Label>
							<Form.Control
								type="text"
								placeholder="Image URL"
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShowModal(false)}>
						Cancel
					</Button>
					<Button variant="primary" onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
						Update
					</Button>
				</Modal.Footer>
			</Modal>
		</Card>
	);
};

export default ProductCard;
