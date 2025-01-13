import { useCartState, useCartDispatch } from "./CartContext";

const Cart = () => {
	const { cart } = useCartState();
	const dispatch = useCartDispatch();

	const handleIncrement = (id) => {
		dispatch({ type: "increment", id });
	};

	const handleDecrement = (id) => {
		dispatch({ type: "decrement", id });
	};

	const handleRemove = (id) => {
		dispatch({ type: "remove", id });
	};

	return (
		<div className="shopping-cart">
			<h2>Shopping Cart</h2>
			{console.log(cart)}
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul style={{ listStyleType: "none", padding: 0 }}>
					{cart.map((item) => (
						<li className="cart-product" id={item.product.id} key={item.product.id} >
							{console.log(item)}
							<img src={item.product.image} alt={item.product.name} />
							<div>
								<h3>{item.product.name}</h3>
								<div className="count-control">
									<span className="increment" onClick={() => handleIncrement(item.product.id)}>+</span>
									<span className="count">{item.count}</span>
									<span className="decrement" onClick={() => handleDecrement(item.product.id)}>-</span>
								</div>
							</div>
							<button onClick={() => handleRemove(item.product.id)}>
								Remove
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Cart;