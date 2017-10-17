//导入商品
import shop from '../api/shop'

const state = {
    products: [],
    cartProducts: [],
    checkoutStatus: null,

}


const getters = {
    allProducts: state => state.products,
    cartProducts: state => {
        return state.cartProducts.map(({ id, quantity }) => {
            const product = state.products.find(p => p.id === id)
            return {
                title: product.title,
                price: product.price,
                quantity: quantity
            }
        })
    },
    checkoutStatus: state => state.checkoutStatus
}


const actions = {
    getAllProducts: ({ commit }) => {
        shop.getProducts(products => {
            commit('GET_ALL', { products })
        })
    },
    addToCart: ({ commit }, product) => {
        if (product.inventory > 0) {
            commit('ADD_CART', { id: product.id })
        }
    },
    checkout: ({ commit }, products) => {
        //保存提交的商品
        const savedItems = [...state.cartProducts]
        commit('CHECKOUT_REQUEST');
        shop.buyProducts(
            products,
            () => commit('CHECKOUT_SUCCESS'),
            () => commit('CHECKOUT_FAIL', { savedItems }))
    }
}


const mutations = {
    ['GET_ALL'](state, { products }) {
        state.products = products;
    },
    ['ADD_CART'](state, { id }) {
        //lIST --
        state.products.find(p => p.id === id).inventory--;
        //CART ++
        const record = state.cartProducts.find(p => p.id === id);
        if (!record) {
            state.cartProducts.push({
                id: id,
                quantity: 1
            })
        } else {
            record.quantity++;
        }
    },
    //CHECKOUT
    ['CHECKOUT_REQUEST'](state) {
        state.cartProducts = []
        state.checkoutStatus = null
    },
    ['CHECKOUT_SUCCESS'](state) {
        state.checkoutStatus = 'successful'
    },
    ['CHECKOUT_FAIL'](state, { savedItems }) {
        state.cartProducts = savedItems
        state.checkoutStatus = 'failed'
    }
}


export default {
    state,
    actions,
    mutations,
    getters
}