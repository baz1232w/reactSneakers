const initialState = {
    logo:{
        tittle:'REACT SNEAKERS',
        afterTittle:'Магазин лучших кроссовок'
    },
    navigation:{
      cart:0,
      prefer:false,
    }
}

const headerReducer = (state = initialState,action) => {
    return state
}

export default headerReducer