import{
    SET_CART_SUCCESS,
    DELETE_CART_SUCCESS,
    UPDATE_CART_SUCCESS
} from './cartTypes'

export const setCart=(product)=>async(dispatch)=>{
    console.log(product)
    const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

    const duplicates = cart.filter(cartItem => cartItem._id === product._id);

    if (duplicates.length === 0) {
		const productToAdd = {
			...product,
		};

		cart.push(productToAdd);

		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
            type: SET_CART_SUCCESS,
            payload: cart
        })
	}
}

export const deleteCart = product => async dispatch => {
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];

	const updatedCart = cart.filter(cartItem => cartItem._id !== product._id);

	localStorage.setItem('cart', JSON.stringify(updatedCart));

	dispatch({
		type: DELETE_CART_SUCCESS,
		payload: updatedCart,
	});
};

export const updateCart = (product, qty) => async dispatch => {
    console.log('update hit')
	const cart = localStorage.getItem('cart')
		? JSON.parse(localStorage.getItem('cart'))
		: [];
    
    for(let cartItem of cart){
        if(cartItem._id===product._id){
            cartItem.qty = qty
        }
    }

	localStorage.setItem('cart', JSON.stringify(cart));

	dispatch({
		type: UPDATE_CART_SUCCESS,
		payload: cart,
	});
};


