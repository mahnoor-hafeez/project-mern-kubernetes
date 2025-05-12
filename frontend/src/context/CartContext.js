import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useReducer, useEffect } from 'react';
// Define the initial state
const initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
};
// Create a cart context
const CartContext = createContext({
    state: initialState,
    dispatch: () => null,
    addToCart: () => { },
    removeFromCart: () => { },
    updateQuantity: () => { },
    clearCart: () => { }
});
// Create cart reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existingItemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
            let updatedItems;
            if (existingItemIndex >= 0) {
                updatedItems = state.items.map((item, index) => index === existingItemIndex
                    ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
                    : item);
            }
            else {
                updatedItems = [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }];
            }
            return {
                ...state,
                items: updatedItems,
                totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
                totalPrice: updatedItems.reduce((total, item) => total + item.price * item.quantity, 0)
            };
        }
        case 'REMOVE_FROM_CART': {
            const updatedItems = state.items.filter(item => item.productId !== action.payload);
            return {
                ...state,
                items: updatedItems,
                totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
                totalPrice: updatedItems.reduce((total, item) => total + item.price * item.quantity, 0)
            };
        }
        case 'UPDATE_QUANTITY': {
            const updatedItems = state.items.map(item => item.productId === action.payload.productId
                ? { ...item, quantity: action.payload.quantity }
                : item);
            return {
                ...state,
                items: updatedItems,
                totalItems: updatedItems.reduce((total, item) => total + item.quantity, 0),
                totalPrice: updatedItems.reduce((total, item) => total + item.price * item.quantity, 0)
            };
        }
        case 'CLEAR_CART':
            return initialState;
        default:
            return state;
    }
};
// Create cart provider
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState, () => {
        // Initialize from localStorage if available
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : initialState;
    });
    // Update localStorage when cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);
    // Helper functions
    const addToCart = (item) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { ...item, quantity: 1 }
        });
    };
    const removeFromCart = (productId) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: productId
        });
    };
    const updateQuantity = (productId, quantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { productId, quantity }
        });
    };
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };
    return (_jsx(CartContext.Provider, { value: {
            state,
            dispatch,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }, children: children }));
};
// Create a hook to use the cart context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
