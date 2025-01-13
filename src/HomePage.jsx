import { Link } from "react-router-dom";
import { products } from "./products";
import { useCartDispatch } from "./CartContext";

const HomePage = () => {
	const dispatch = useCartDispatch();

	const handleAddToCart = (product) => {
		dispatch({ type: "add", product, count: 1 });
	};

	return (
		<div className="product-list">
			<h1>Product List</h1>
			<div>
				{products.map((product) => (
					<div className="product-list-item" key={product.id} >
						<img src={product.image} alt={product.name} />
						<h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
						<p>{product.description}</p>
						<button onClick={() => handleAddToCart(product)}>Add to Cart</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomePage;