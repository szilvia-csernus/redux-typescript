import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(
			state,
			action: PayloadAction<{ id: string; title: string; price: number }>
		) {
			// we get -1 if item is not found
			const itemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
		},
		removeFromCart() {
            
        },
	},
});
