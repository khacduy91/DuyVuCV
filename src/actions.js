import { makeProductsApi, makeProductDetailApi, LOGIN_API } from "./apis";

export const FILTER = 'FILTER';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCTSFAIL = 'GET_PRODUCTSFAIL'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_START = 'GET_PRODUCTS_START'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_RESET = 'LOGIN_RESET'
export const ADD_TO_CART = 'ADD_TO_CART'
export const GET_PRICE = 'GET_PRICE'
export const GET_PRODUCT_BY_PRICE = 'GET_PRODUCT_BY_PRICE'
export const GET_PRICE_VALUE_FILTER = 'GET_PRICE_VALUE_FILTER'
export const GET_INPUT_CART = 'GET_INPUT_CART'
export const GET_MIN_PRICE = 'GET_MIN_PRICE'
export const GET_MAX_PRICE = 'GET_MAX_PRICE'
export const GET_INDEX_IMAGE = 'GET_INDEX_IMAGE'
export const GET_INDEX_CART = 'GET_INDEX_CART'
export const ADD_TO_CART_DETAIL_PAGE = 'ADD_TO_CART_DETAIL_PAGE'
export const DELETE_CART = 'DELETE_CART'
export const filter = category => ({
    type: FILTER,
    category: category
})


export const getProduct = product => ({
    type: GET_PRODUCT,
    product
})

export const getProductsSendoSuccess = (products, page, query,isFilter) => ({
    type: GET_PRODUCTS_SUCCESS,
    products,
    page,
    query,
    isFilter,
})
export const getProductsSendoFail = errMsg => ({
    type: GET_PRODUCTSFAIL,
    errMsg
})

export const getProductsStart = (isNewSearch) => ({
    type: GET_PRODUCTS_START,
    isNewSearch,
})
export const getProductsSendo = (query, page = 1, isNewSearch = false, isFilter = false) => {
    return dispatch => {
        dispatch(getProductsStart(isNewSearch))
        fetch(makeProductsApi(page, query))
            .then(res => res.json())
            .then(json => {
                dispatch(getProductsSendoSuccess(json.data, page, query,isFilter))
            })
            .catch(err => {
                console.error(err)
                dispatch(getProductsSendoFail("We have a problem with connection"))
            })

    }
}

export const getProductDetailSendo = (id) => {
    return dispatch => {
        fetch(makeProductDetailApi(id))
            .then(res => res.json())
            .then(json => {
                dispatch(getProduct(json))
            })
            .catch(err => console.error(err))
    }

}

export const loginStart = () => ({
    type: LOGIN_START
})
export const loginSuccess = (auth) => ({
    type: LOGIN_SUCCESS,
    auth
})
export const loginFail = (auth) => ({
    type: LOGIN_FAIL,
    auth
})
export const resetAuth = auth => ({
    type: LOGIN_RESET,
    auth
})

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginStart())
        fetch(LOGIN_API, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                if (json.isLogged) {
                    localStorage.setItem('AUTH', JSON.stringify(json))
                    dispatch(loginSuccess(json))
                }
                else dispatch(loginFail(json))
            })
            .catch(err => {
                console.error(err);
                dispatch(loginFail({ message: err.message }))
            })
    }
}

export const getIndexCart = (index) => ({
    type: GET_INDEX_CART,
    index
})
export const getInputCart = (num,index) => ({
    type: GET_INPUT_CART,
    num,
    index
})

export const getPrice = (priceIndex,index)=>({
    type: GET_PRICE,
    priceIndex,
    index
})
export const addToCart = (index) => ({
  type: ADD_TO_CART,
  index
})
export const getMinPrice = (minPrice) => ({
    type: GET_MIN_PRICE,
    minPrice
})
export const getMaxPrice = (maxPrice) => ({
    type: GET_MAX_PRICE,
    maxPrice
})

export const getIndexImage = (indexImage)=> ({
    type: GET_INDEX_IMAGE,
    indexImage
}) 

export const addToCartDetailPage = (product)=> ({
    type: ADD_TO_CART_DETAIL_PAGE,
    product
})

export const deleteCart =(cart,totalPrice,inputCart,indexCart)=>({
    type: DELETE_CART,
    cart,
    totalPrice,
    inputCart,
    indexCart,
})