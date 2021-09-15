import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const server = 'http://10.177.68.29:10070'
const addId = server + '/user/register'
const login = server + '/user/login'
const merchantlogin = server + '/merchant/login'
const merchantregister = server + '/merchant/register'
const merchantPostData = server + '/addProduct'
const merchantUpdateData = server + '/updateProduct'
const getAllProductByCat = server + '/es/getMerchant/' + localStorage.getItem('merchantId')
// const getAllProductByCat = server + '/es/getMerchant/' + 2
const getUpdateProductList = server + '/es/getMerchant/' + localStorage.getItem('merchantId')

export default new Vuex.Store({
  state: {
    cartItems: [],
    merchantId: null,
    dd: 44,
    allProductsList: [],
    updateProductList: []
  },
  getters: {
    getCartItems (state) {
      return state.cartItems
    },
    getMerchantId (state) {
      return state.merchantId
    },
    getAllProductsList (state) {
      return state.allProductsList
    },
    getupdateProductList (state) {
      return state.updateProductList
    }
  },
  mutations: {
    setCartItems (state, item) {
      state.cartItems.push(item)
    },
    removeCartItem (state, item) {
      const index = state.cartItems.findIndex(obj => obj.productid === item.productid)
      state.cartItems.splice(index, 1)
    },
    setMerchantId (state, mid) {
      state.merchantId = mid
    },
    setAllProductsList (state, data) {
      state.allProductsList = data
    },
    setUpdateProductList (state, data) {
      state.updateProductList = data
    }
  },
  actions: {
    postData ({ commit }, { data, success }) {
      const detailsId = {
        firstName: data.firstName,
        lastName: data.lastName,
        mobileNumber: data.mobileNumber,
        email: data.email,
        password: data.password
      }
      axios.post(addId, detailsId)
        .then(res => {
          console.log(res)
          success()
        })
    },
    fetchAllProducts ({ commit }, data) {
      axios.get(getAllProductByCat)
        .then(res => {
          console.log(res.data)
          const productData = res.data
          console.log(getAllProductByCat + '---->')
          commit('setAllProductsList', productData)
        })
        .catch(e => console.log('error', e))
    },
    fetchUpdateProductList ({ commit }, data) {
      axios.get(getUpdateProductList)
        .then(res => {
          const updatedData = res.data
          commit('setUpdateProductList', updatedData)
        })
        .catch(e => console.log('error', e))
    },
    merchantUpdateProducts ({ commit, state }, { data, success }) {
      const productInfo = {
        productName: data.productName,
        merchantId: localStorage.getItem('merchantId'),
        description: data.description,
        imageURL: data.imageURL,
        price: data.price,
        category: {
          id: ['Cricket', 'Football', 'Tennis', 'Skating', 'Badminton'].indexOf(data.category) + 1,
          name: data.category
        },
        pinCode: data.pinCode,
        quantity: data.quantity,
        attributes: {
          colour: data.colour,
          brand: data.brand,
          material: data.material,
          ageGroup: data.ageGroup
        }
      }
      axios.post(merchantUpdateData, productInfo)
        .then(res => {
          // const mId = res.data.id
          // commit('setMerchantId', mId)
          // console.log(mId)
          console.log(res)
          success()
        })
    },
    merchantPostProducts ({ commit, state }, { data, success }) {
      const productInfo = {
        productName: data.productName,
        merchantId: localStorage.getItem('merchantId'),
        description: data.description,
        imageURL: data.imageURL,
        price: data.price,
        category: {
          id: ['Cricket', 'Football', 'Tennis', 'Skating', 'Badminton'].indexOf(data.category) + 1,
          name: data.category
        },
        pinCode: data.pinCode,
        quantity: data.quantity,
        attributes: {
          colour: data.colour,
          brand: data.brand,
          material: data.material,
          ageGroup: data.ageGroup
        }
      }
      axios.post(merchantPostData, productInfo)
        .then(res => {
          // const mId = res.data.id
          // commit('setMerchantId', mId)
          // console.log(mId)
          console.log(res)
          success()
        })
    },
    merchantPostData ({ commit }, { data, success }) {
      const detailsId = {
        firstName: data.firstName,
        lastName: data.lastName,
        mobileNumber: data.mobileNumber,
        email: data.email,
        password: data.password
      }
      axios.post(merchantregister, detailsId)
        .then(res => {
          console.log(res)
          success()
        })
    },
    loginUser ({ commit }, { data, success }) {
      const body = {
        email: data.email,
        password: data.password
      }
      // console.log(body.username)
      axios.post(login, body)
        .then(res => {
          const data = res.data
          // console.log(data)
          if (data.status) {
            success()
          } else {
            alert('wrong')
          }
        })
    },
    loginMerchant ({ commit }, { data, success }) {
      const body = {
        email: data.email,
        password: data.password
      }
      // console.log(body.username)
      axios.post(merchantlogin, body)
        .then(res => {
          // const data = res.data
          console.log(res.data)
          if (res.data.status) {
            this.merchantId = res.data.id
            console.log(this.merchantId)
            localStorage.setItem('merchantId', this.merchantId)
            // commit('setMerchantId', mId)
            // console.log(mId)
            success()
          } else {
            alert('wrong')
          }
        }).catch(e => {
          alert('wrong')
        })
    }
  },

  modules: {
  }
})
