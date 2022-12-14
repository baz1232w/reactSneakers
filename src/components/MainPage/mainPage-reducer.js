const SET_PREFER = 'manePage/set-prefer'
const SET_CART = 'manePage/set-cart'
const GET_ORDERED = 'manePage/get-ordered'
const SET_TOTAL_PRICE = 'cart-reducer/set-total-price'


const initialState = {
    items: [
        {
            "id": 1,
            "code": 1000,
            "img": "https://styles.ua/content/images/6/513x390l80mc0/12140723664628.webp",
            "tittle": "Nike KD 15 ",
            "price": 5999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 2,
            "code": 2000,
            "img": "https://styles.ua/content/images/7/513x390l80mc0/56716525700911.webp",
            "tittle": "Nike Air More",
            "price": 7999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 3,
            "code": 3000,
            "img": "https://styles.ua/content/images/22/513x390l80mc0/curry-8-3023085-701-78018315426189.webp",
            "tittle": "Nike Air Max Verona",
            "price": 3999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 4,
            "code": 4000,
            "img": "https://styles.ua/content/images/19/513x390l80mc0/57115353268551.webp",
            "tittle": "Nike Blazer Mid Suede",
            "price": 3999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 5,
            "code": 5000,
            "img": "https://styles.ua/content/images/18/585x390l80mc0/81663278590642.webp",
            "tittle": "Nike Air Kukini SE",
            "price": 6999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 6,
            "code": 6000,
            "img": "https://styles.ua/content/images/42/585x390l80mc0/44706458924935.webp",
            "tittle": "Nike Air Max 97 NH",
            "price": 5999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 7,
            "code": 7000,
            "img": "https://styles.ua/content/images/41/585x390l80mc0/krossovki-air-max-verona-cz6156-101-12799451931874.webp",
            "tittle": "Nike Blazer Mid Suede",
            "price": 3999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 8,
            "code": 8000,
            "img": "https://styles.ua/content/images/10/585x390l80mc0/71790773007139.webp",
            "tittle": "Nike Blazer Mid Suede",
            "price": 3999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 9,
            "code": 9000,
            "img": "https://styles.ua/content/images/49/513x390l80mc0/97138017857141.webp",
            "tittle": "Nike Air Flight 89",
            "price": 7999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 10,
            "code": 10000,
            "img": "https://styles.ua/content/images/44/585x390l80mc0/31982693002629.webp",
            "tittle": "Nike ACG Lowcate",
            "price": 4999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 11,
            "code": 11000,
            "img": "https://styles.ua/content/images/10/585x390l80mc0/93823185377038.webp",
            "tittle": "Nike Blazer Mid Suede",
            "price": 3999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        },
        {
            "id": 12,
            "code": 12000,
            "img": "https://styles.ua/content/images/28/585x390l80mc0/52223149715072.webp",
            "tittle": "Nike Blazer Mid Suede",
            "price": 3999,
            "isPrefer": false,
            "isAdded": false,
            "isOrdered": false
        }
    ],
    totalPrice:null
}

const mainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PREFER:
            return{
                ...state,
                items: [...state.items].map(el => {
                    if(el.code === action.code){
                        el.isPrefer = action.isPrefer
                        return el
                    }
                    return  el
                })
            }
        case SET_CART:
            return{
                ...state,
                items: [...state.items].map(el => {
                    if(el.code === action.code){
                        el.isAdded = action.isAdded
                        return el
                    }
                    return  el
                })
            }
        case GET_ORDERED:
            return{
                ...state,
                items: [...state.items].map(el => {
                    if(el.isAdded){
                        el.isAdded = false;
                        el.isOrdered = true;
                        return el
                    }
                    return  el
                })
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.items.filter(el => el.isAdded).reduce((sum,el) =>sum += el.price, 0)
            }
        default:
            return state
    }

}

export const setPrefer = (code,isPrefer) => ({type: SET_PREFER, code,isPrefer})
export const setCart = (code,isAdded) => ({type: SET_CART, code, isAdded})
export const getOrdered = () => ({type: GET_ORDERED})
export const setTotalPrice = () => ({type: SET_TOTAL_PRICE})

export default mainPageReducer