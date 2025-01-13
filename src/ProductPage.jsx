import { useParams } from "react-router-dom";
import { products } from "./products";
import { useCartDispatch } from "./CartContext";

const ProductPage = () => {
	const { id } = useParams();
	const product = products.find((p) => p.id === parseInt(id));
	const dispatch = useCartDispatch();

	const handleAddToCart = () => {
		dispatch({ type: "add", product, count: 1 });
	};

	if (!product) {
		return <p>Product not found.</p>;
	}

	return (
		<div>
			<h1>{product.name}</h1>
			<img src={product.image} alt={product.name} />
			<p>{product.description}</p>
			<button onClick={handleAddToCart}>Add to Cart</button>
		</div>
	);
};

export default ProductPage;