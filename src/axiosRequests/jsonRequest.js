import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {'Content-Type': 'application/json'}
});

const jsonRequest = {
    getItems: async () => {
        const response = await instance.get('items')
        return response.data
    },

    getItem: async (id) => {
        const response = await instance.get(`items/${String(id)}`)
        return response.data
    },

    setToCart: async (item) => {
        await instance.post('cart', {...item})
    },

    getItemsInCart: async () => {
        const response = await instance.get('cart')
        return response.data
    },

    deleteItemFromCart : async (id) => {
        await instance.delete(`cart/${String(id)}`)

    },

    addToPrefer : async (item) => {
        await instance.post(`favorite`,{...item})
    },

    getPreferItems : async ()=> {
        const response = await instance.get('favorite')
        return response.data
    },

    preferItem : async (id,item)=>{
        await instance.put(`items/${id}`,{...item})
    },

    addToHistory: async (items) =>{
      await instance.post('profile', items)
    },

    getProfileItems : async () =>{
      const response = await instance.get('profile')
        return response.data
    },
}

export default jsonRequest