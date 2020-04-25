export const BASE_URL = 'https://mapi.sendo.vn'
export const LOGIN_API = 'http://localhost:4000/login'
export const PRODUCTS_API = BASE_URL + '/mob/product/search?p=1&q=ao+khoac'
export const BASE_URL_IMAGE = 'https://media3.scdn.vn'

export const makeProductDetailApi = id => {
    return `${BASE_URL}/mob/product/${id}/detail`
}

export const makeProductsApi = (page, query) => {
    return `${BASE_URL}/mob/product/search?p=${page}&q=${query}`

}


