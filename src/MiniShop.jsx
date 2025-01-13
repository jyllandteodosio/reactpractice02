import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import Cart from "./Cart";

const MiniShop = () => {
	return (
		<CartProvider>
			<Router>
				<Cart />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:id" element={<ProductPage />} />
				</Routes>
			</Router>
		</CartProvider>
	);
};

export default MiniShop;