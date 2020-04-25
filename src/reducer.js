import { FILTER, GET_PRODUCT,GET_INPUT_CART, GET_PRODUCTS_SUCCESS, GET_PRODUCTSFAIL, ADD_TO_CART_DETAIL_PAGE, ADD_TO_CART, GET_PRODUCTS_START, LOGIN_START, LOGIN_FAIL, LOGIN_RESET, LOGIN_SUCCESS, GET_PRICE, GET_MIN_PRICE, GET_MAX_PRICE, GET_INDEX_IMAGE, GET_INDEX_CART, DELETE_CART } from "./actions";

const initialState = {
    products: [],
    productsByPrice: [],
    category: '',
    product: undefined,
    index: -1,
    id: '',
    status: 'Start Loading',
    page: 1,
    cart: [],
    query: 'ao khoac',
    auth: {
        isLogged: false,
        message: ''
    },
    loginStatus: false,
    totalPrice: [],
    minPrice: 0,
    maxPrice: 0,
    inputCart: [],
    indexCart:[],
    value:'',
    indexImage: 0,
    isFilter: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER: {
            return { ...state, category: action.category }
        }
        case GET_PRODUCT: {
            return { ...state, product: action.product, }
        }
        case GET_PRODUCTS_START: {

            return { ...state, products: action.isNewSearch ? [] : state.products, status: 'start', errMsg: '' }
        }
        case GET_PRODUCTS_SUCCESS: {
            const { minPrice,maxPrice } = state
            const newProducts = [...state.products, ...action.products]
            const newProductsFilter1 = newProducts.filter((product)=> {
                return parseInt(product.price,10) < maxPrice
            })
            const newProductsFilter2 = newProductsFilter1.filter((product)=> {
                return parseInt(product.price,10) > minPrice
            })
            console.log(action.isFilter)
            return { ...state, products: action.isFilter ? newProductsFilter2 : newProducts , status: 'success', page: action.page, query: action.query , isFilter:action.isFilter}
        }
        case GET_PRODUCTSFAIL: {
            return { ...state, errMsg: action.errMsg, status: 'fail' }
        }
        case ADD_TO_CART: {
            const { cart, products, totalPrice,inputCart,indexCart } = state;
            console.log(products)
            console.log('index'+ action.index)
            const selectedProduct = products[action.index]
            console.log(selectedProduct)
            cart.push(selectedProduct)
            totalPrice.push(selectedProduct.price)
            inputCart.push(1)
            indexCart.push(action.index)
            for(let i = 0; i < cart.length-1; i++) {
                const checkProduct = cart[i];
                if(checkProduct.product_id == selectedProduct.product_id|| checkProduct.id == selectedProduct.id){
                    cart.splice(cart.length-1,1)
                    inputCart[i] = inputCart[i] + 1
                    inputCart.splice(inputCart.length-1,1)
                    totalPrice[i] = totalPrice[i] + totalPrice[totalPrice.length-1]
                    totalPrice.splice(totalPrice.length-1,1)
                    indexCart.splice(indexCart.length-1,1)
                }
            } 
            return { ...state, cart: [...cart], totalPrice: [...totalPrice] }
        }
        case GET_INDEX_CART: {
            const {indexCart} = state
            indexCart.push(action.index)
            return {...state, indexCart:[...indexCart]}
        }
        case GET_INPUT_CART: {
            const { inputCart } = state
            const intnum = parseInt(action.num,10)
            inputCart[action.index] = intnum
            return {...state, inputCart: [...inputCart]}
        }
        case LOGIN_START: {
            return { ...state, auth: { isLogged: false, message: '' } }
        }
        case LOGIN_SUCCESS: {
            return { ...state, auth: action.auth, loginStatus: true }
        }
        case LOGIN_FAIL: {
            return { ...state, auth: action.auth, loginStatus: false }
        }
        case LOGIN_RESET: {
            return { ...state, auth: action.auth }
        }
        case GET_PRICE: {
            const { totalPrice } = state
            totalPrice[action.index] = action.priceIndex
            return { ...state, totalPrice: [...totalPrice] }
        }
        case GET_MIN_PRICE: {
            return {...state,minPrice:action.minPrice}
        }
        case GET_MAX_PRICE: {
            return {...state,maxPrice:action.maxPrice}
        }
        case GET_INDEX_IMAGE: {
            return {...state, indexImage:action.indexImage}
        }
        case ADD_TO_CART_DETAIL_PAGE: {
            const {cart,totalPrice,inputCart,indexCart} = state
            cart.push(action.product)
            totalPrice.push(action.product.price)
            inputCart.push(1)
            for(let i = 0; i < cart.length-1; i++) {
                const checkProduct = cart[i];
                if(checkProduct.id == action.product.id){
                    cart.splice(cart.length-1,1)
                    inputCart[i] = inputCart[i] + 1
                    inputCart.splice(inputCart.length-1,1)
                    totalPrice[i] = totalPrice[i] + totalPrice[totalPrice.length-1]
                    totalPrice.splice(totalPrice.length-1,1)
                    indexCart.splice(indexCart.length-1,1)
                }
            } 
            return {...state, cart:[...cart]}
        }
        case DELETE_CART: {
            return {...state, cart:[], totalPrice:[], inputCart:[],indexCart:[]}
        }
        default: return state;
    }
}
export default reducer