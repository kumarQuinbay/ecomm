<template>
  <main class="image">
    <merchantnavbar />
    <form>
      <h2>Sell Products</h2>
      <div style="margin: 20px auto 0; width: 500px">
        <br />
        <label for="cate" id="category">Choose a category:</label>
        <select name="cate" id="cate" required v-model="category">
          <!-- <option value="Cricket"></option> -->
          <option value="Cricket" selected>Cricket</option>
          <option value="Badminton">Badminton</option>
          <option value="Tennis">Tennis</option>
          <option value="Football">Football</option>
          <option value="Skatting">Skatting</option>
        </select>
        <br /><br />
        <div>
          <br />
          <label>Product Name</label>
          <input
            id="productName"
            class="e-input"
            type="text"
            placeholder="Enter Product Name"
            value="${productName}"
            required
            v-model="productName"
          />
          <span style="color: orange" v-if="!validproductName"
            >Required feild</span
          ><br /><br />
          <label>Product Description</label>
          <input
            id="description"
            class="e-input"
            type="text"
            placeholder="Enter Product Description"
            required
            v-model="description"
          />
          <span style="color: orange" v-if="!validdescription"
            >Required feild</span
          ><br /><br />
          <label>Product Image</label>
          <input
            id="imageURL"
            type="text"
            class="e-input"
            placeholder="Enter image URL"
            required
            v-model="imageURL"
          />
          <span style="color: orange" v-if="!validimageURL"
            >Required feild</span
          >
          <br /><br />
          <label>Product Attribute</label>
          <form class="innerform">
            <label>Colour</label>
            <input
              id="colour"
              class="e-input"
              type="text"
              placeholder="Enter colour (Red, Blue, Green)"
              required
              v-model="colour"
            />
            <span style="color: orange" v-if="!validcolour">Required feild</span
            ><br /><br />
            <span style="color: orange" v-if="!validcolourname"
              >Enter from options available (Red, Blue, Green)</span
            >
            <label>Material</label>
            <input
              id="material"
              class="e-input"
              type="text"
              placeholder="Enter material (Leather, Wooden, Rubber) "
              required
              v-model="material"
            />
            <span style="color: orange" v-if="!validmaterial"
              >Required feild</span
            ><br /><br />
            <span style="color: orange" v-if="!validmaterialname"
              >Enter from options available (Red, Blue, Green)</span
            >
            <label>Brand</label>
            <input
              id="brand"
              class="e-input"
              type="text"
              placeholder="Enter brand (Gunn, New Balance, SG) "
              required
              v-model="brand"
            />
            <span style="color: orange" v-if="!validbrand">Required feild</span
            ><br /><br />
            <span style="color: orange" v-if="!validbrandname"
              >Enter from options available (Gunn, Neu, SG)</span
            >
            <label>Age Group</label>
            <input
              id="ageGoup"
              class="e-input"
              type="text"
              placeholder="Enter age group (8+, 15+, 20+)"
              required
              v-model="ageGroup"
            />
            <span style="color: orange" v-if="!validageGroup"
              >Required feild</span
            ><br /><br />
            <span style="color: orange" v-if="!validgroupname"
              >Enter from options available (8+, 15+, 20+)</span
            >
          </form>

          <label>Quantity</label>
          <input
            id="quantity"
            class="e-input"
            type="number"
            placeholder="Enter Product Quantity"
            required
            v-model="quantity"
          />
          <span style="color: orange" v-if="!validquantity">Required feild</span
          ><br /><br />

          <label>Price</label>
          <input
            id="price"
            class="e-input"
            type="number"
            placeholder="Enter Product Price"
            required
            v-model="price"
          />
          <span style="color: orange" v-if="!validprice">Required feild</span
          ><br /><br />

          <!-- <label>Merchant Id</label>
          <input
            class="e-input"
            id="merchantId"
            type="number"
            placeholder="Enter Location"
            required
            v-model="merchantId"
          /> -->
          <!-- <span style="color: orange" v-if="!validmerchantId" -->
            <!-- >Required feild</span -->
          ><br /><br />

          <label>PinCode</label>
          <input
            class="e-input"
            id="pinCode"
            type="number"
            placeholder="Enter PinCode"
            required
            v-model="pinCode"
          />
          <span style="color: orange" v-if="!validpinCode">Required feild</span
          ><br /><br />
        </div>
      </div>
      <button @click="update" type="button">Submit</button>
    </form>
  </main>
</template>

<script>
import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'
// import navbar from '../components/navbar.vue'
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns'
import { mapActions } from 'vuex'
import Merchantnavbar from '../components/merchantnavbar.vue'
Vue.use(DropDownListPlugin)
Vue.use(VueFormulate)
export default {
  components: { Merchantnavbar },
  data () {
    return {
      category: '',
      validcategory: '',
      productName: '',
      validproductName: true,
      description: '',
      validdescription: true,
      imageURL: '',
      validimageURL: true,
      colour: '',
      validcolour: true,
      colourname: '',
      validcolourname: true,
      material: '',
      validmaterial: true,
      materialname: '',
      validmaterialname: true,
      brand: '',
      validbrand: true,
      brandname: '',
      validbrandname: true,
      ageGroup: '',
      validageGroup: true,
      groupname: '',
      validgroupname: true,
      quantity: 0,
      validquantity: true,
      price: 0,
      validprice: true,
      merchantId: 0,
      validmerchantId: true,
      pinCode: 0,
      validpinCode: true,
      detailsMerchant: {
        category: '',
        productName: '',
        description: '',
        imageURL: '',
        colour: '',
        material: '',
        brand: '',
        ageGroup: '',
        quantity: 0,
        price: 0,
        // merchantId: ,
        pinCode: 0
      }

    }
    // var Data = [
    //   { name: 'abc', Category: 'x', Id: 'item1' },
    //   { name: 'def', Category: 'x', Id: 'item2' },
    //   { name: 'ghi', Category: 'z', Id: 'item3' }
    // ]
    // return {
    //   dataSource: Data,
    //   fields: { groupBy: 'Category', text: 'name', value: 'Id' }
    // }
  },
  methods: {
    ...mapActions(['merchantUpdateProducts']),
    update () {
    //   console.log('in function')
      if (this.category !== '') {
        this.detailsMerchant.category = this.category
        this.category = true
      } else {
        this.category = false
      }
      if (this.productName !== '') {
        this.detailsMerchant.productName = this.productName
        this.validproductName = true
      } else {
        this.validproductName = false
      }
      if (this.description !== '') {
        this.detailsMerchant.description = this.description
        this.validdescription = true
      } else {
        this.validdescription = false
        // console.log('infname')
      }
      if (this.imageURL !== '') {
        this.detailsMerchant.imageURL = this.imageURL
        this.validimageURL = true
      } else {
        this.validimageURL = false
      }
      if (this.colour !== '') {
        this.detailsMerchant.colour = this.colour
        this.validcolour = true
      } else {
        this.validcolour = false
      }
      if (this.colour.toLocaleLowerCase !== 'red' || this.colour.toLocaleLowerCase !== 'blue' || this.colour.toLocaleLowerCase !== 'green') {
        // this.detailsMerchant.productName = this.productName
        this.validcolourname = true
      } else {
        this.validcolourname = false
      }
      if (this.material !== '') {
        this.detailsMerchant.material = this.material
        this.validmaterial = true
      } else {
        this.validmaterial = false
      }
      if (this.material.toLocaleLowerCase !== 'leather' || this.material.toLocaleLowerCase !== 'wooden' || this.material.toLocaleLowerCase !== 'rubber') {
        // this.detailsMerchant.productName = this.productName
        this.validmaterialname = true
      } else {
        this.validmaterialname = false
      }
      if (this.brand !== '') {
        this.detailsMerchant.brand = this.brand
        this.validbrand = true
      } else {
        this.validbrand = false
      }
      if (this.brand.toLocaleLowerCase !== 'gunn' || this.brand.toLocaleLowerCase !== 'neu' || this.brand.toLocaleLowerCase !== 'sg') {
        // this.detailsMerchant.productName = this.productName
        this.validbrandname = true
      } else {
        this.validbrandname = false
      }
      if (this.ageGroup !== '') {
        this.detailsMerchant.ageGroup = this.ageGroup
        this.validageGroup = true
      } else {
        this.validageGroup = false
      }
      if (this.ageGroup !== '8+' || this.ageGroup !== '15+' || this.ageGroup !== '20+') {
        // this.detailsMerchant.productName = this.productName
        this.validgroupname = true
      } else {
        this.validgroupname = false
      }
      if (this.quantity !== 0) {
        this.detailsMerchant.quantity = this.quantity
        this.validquantity = true
      } else {
        this.validquantity = false
      }
      if (this.price !== 0) {
        this.detailsMerchant.price = this.price
        this.validprice = true
      } else {
        this.validprice = false
      }
      if (this.merchantId !== 0) {
        this.detailsMerchant.merchantId = this.merchantId
        this.validmerchantId = true
      } else {
        this.validmerchantId = false
      }
      if (this.pinCode !== 0) {
        this.detailsMerchant.pinCode = this.pinCode
        this.validpinCode = true
      } else {
        this.validpinCode = false
      }
      if (this.validproductName === true && this.validproductName === true && this.validdescription === true && this.validimageURL === true && this.validcolour === true && this.validcolourname === true && this.validmaterial === true && this.validmaterialname === true && this.validbrand === true && this.validbrandname === true && this.validageGroup === true && this.validgroupname === true && this.validquantity === true && this.validprice === true && this.validpinCode === true) {
        // this.merchantPostData({ data: this.detailsId, success: this.successFunction })
        // this.$router.push('/merchantsproducts')merchantHomePage () {
        this.merchantUpdateProducts({ data: this.detailsMerchant, success: this.successFunction })
        this.$router.push('/merchantsproducts')
      }
    },
    successFunction () {
      window.alert('Registered successfully')
    }
  },
  created () {
    const pData = this.$route.query.product || '{}'
    const productData = JSON.parse(pData)
    this.category = productData.category.name || ''
    this.productName = productData.productName || ''
    this.description = productData.description || ''
    this.imageURL = productData.imageURL || ''
    this.colour = productData.attributes.colour || ''
    this.colourname = productData.colourname || ''
    this.material = productData.attributes.material || ''
    this.brand = productData.attributes.brand || ''
    this.ageGroup = productData.attributes.ageGroup || ''
    this.groupname = productData.groupname || ''
    this.quantity = productData.quantity || ''
    this.price = productData.price || ''
    this.merchantId = productData.merchantId || ''
    this.pinCode = productData.pinCode || ''
  }
}
</script>

<style scoped>
.innerform {
  background-color: rgb(243, 245, 247);
  border: 1px solid grey;
  /* border-color: black; */
  text-align: left;
  height: auto;
  width: auto;
  margin: 1%;
  color: black;
}
form {
  background-color: rgb(243, 245, 247);
  border: 15px solid black;
  border-color: black;
  text-align: center;
  height: auto;
  width: 50%;
  margin: 82px 0px 50px 310px;
  padding: 2%;
  color: black;
}
.image {
  padding-top: 66px;
  background-image: url(https://previews.123rf.com/images/rrraven/rrraven1110/rrraven111000003/10755544-sport-background.jpg);
  height: 1000px;
}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
