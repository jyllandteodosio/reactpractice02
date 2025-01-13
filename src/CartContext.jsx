import { createContext, useReducer, useContext } from "react";

const initialState = {
	cart: [],
}

const cartReducer = (state, action) => {

	switch (action.type) {
		case 'add': {
			// check if item exists
			const existingItem = state.cart.find(
				(item) => item.product.id === action.product.id
			);

			// if exists, update count
			if (existingItem) {
				const updatedCart = state.cart.map((item) =>
					item.product.id === action.product.id
						? { ...item, count: item.count + action.count }
						: item
				);
				return { ...state, cart: updatedCart };
			}

			// if not, add item
			return {
				...state,
				cart: [...state.cart, { product: action.product, count: action.count }],
			};
		}
		case 'remove': {
			const updatedCart = state.cart.filter(item => item.product.id !== action.id)
			return { ...state, cart: updatedCart };
		}
		case 'increment': {
			const updatedCart = state.cart.map((item) =>
				item.product.id === action.id
					? { ...item, count: item.count + 1 }
					: item
			);
			return { ...state, cart: updatedCart };
		}
		case 'decrement': {
			const updatedCart = state.cart.map((item) =>
				item.product.id === action.id
					? { ...item, count: Math.max(item.count - 1, 1) }
					: item
			);
			return { ...state, cart: updatedCart };
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<CartStateContext.Provider value={state}>
			<CartDispatchContext.Provider value={dispatch}>
				{children}
			</CartDispatchContext.Provider>
		</CartStateContext.Provider>
	);
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext); 