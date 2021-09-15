<template>
<div class="back">
    <merchantnavbar/>
<section id="sidebar">
    <div>
        <h6 class="p-1 border-bottom">Category</h6>
        <form>
           <input type="checkbox">
           <label > Tennis Racquet</label><br>
           <input type="checkbox">
           <label>Tennis ball</label><br>
           <input type="checkbox">
           <label> Tennis net</label><br>
           <input type="checkbox">
           <label> Tennis Racquet String</label><br>
           <input type="checkbox">
           <label>Tennis Bag</label><br>
        </form>

    </div>
    <div>
        <h6 class="p-1 border-bottom">Filter By</h6>
        <p class="mb-2">Color</p>
        <form>
           <input type="checkbox">
           <label> Blue</label><br>
           <input type="checkbox">
           <label>Red</label><br>
           <input type="checkbox">
           <label> Green</label><br>
        </form>
    </div>
    <div>
        <h6>Offers</h6>
        <form class="ml-md-2">
            <div class="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="offers" id="nocostemi"> <label for="nocostemi" class="pl-1 pt-sm-0 pt-1">No Cost Emi</label> </div>
            <div class="form-inline border rounded p-sm-2 my-2"> <input type="radio" name="offers" id="specialprize"> <label for="specialprize" class="pl-1 pt-sm-0 pt-1">Special Prize</label> </div>
            <div class="form-inline border rounded p-md-2 p-sm-1"> <input type="radio" name="offers" id="buymoresavemore"> <label for="buymoresavemore" class="pl-1 pt-sm-0 pt-1">Buy more, Save more</label> </div>
        </form>
    </div>
</section>

 <div class="card-container">
    <div v-for="index in getAllProductsList" :key="index.productId" :value="index" class="card">
    <img class="image" v-bind:src="index.imageURL"  />
    <h4>{{index.productName}} </h4>
    <p class="price">Price -> {{index.price}}</p>
    <!-- <div v-for="index in product" :key="index.productId" :value="index" @click="update" class="card">
    <img class="image" v-bind:src="index.imageURL"  />
    <h1>{{index.productName}} </h1>
    <p class="price">Price -> {{index.price}}</p> -->
    <p>
        <router-link :to="{
          path: '/merchant',
          query: {
            product: JSON.stringify(index)
          }
        }">
        <button class="text">Update</button>
    </router-link>
    </p>
    <br>
 </div>
 </div>
</div>
</template>

<script>
import Merchantnavbar from '../components/merchantnavbar.vue'
import { mapActions, mapGetters } from 'vuex'
// import Navbar from '../components/navbar.vue'

export default {
  components: {
    Merchantnavbar
  },
  data () {
    return {
      product: [{
        productId: 5,
        imageURL: 'jds',
        productName: 'idjoi'
      }
      ]
    //   productId: 5,
    //   merchantId: 1,
    //   description: 'jewiofj',
    //   imageURL: 'jds',
    //   productName: 'idjoi',
    //   price: 979.0,
    //   category: {
    //     name: 'Tennis',
    //     id: 3
    //   },
    //   pinCode: '90',
    //   quantity: 687,
    //   rating: 0.0,
    //   attributes: {
    //     colour: 'red',
    //     material: 'leather',
    //     ageGroup: '8+',
    //     brand: 'gunn'
    }
  },

  computed: {
    ...mapGetters(['getAllProductsList'])
  },
  methods: {
    ...mapActions(['fetchAllProducts']),
    // updateProduct (product) {
    //   this.$router.push(
    //     {
    //       path: '/merchant',
    //       query: {
    //         product: JSON.stringify(product)
    //       }
    //     })
    // },
    created () {

    }
  },
  beforeMount () {
    console.log('called')
    this.fetchAllProducts()
  }

}

</script>

<style scoped>
.container {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container:hover .image {
  opacity: 0.3;
}

.container:hover .middle {
  opacity: 1;
}

.text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    margin: 50px;
    /* background-image: url('https://cdn.wallpapersafari.com/48/48/sOfeQc.jpg'); */
    background-repeat: no-repeat;
    background-position: top center;
    background-size: contain;
}

.card {
 /* max-width: 600px; */
 box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
 margin: 15px;
 text-align: center;
 font-family: arial;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 padding: 5px;
 border-radius: 4px;
 background-color: #fff;
}
.card:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.card1 {
 margin: 10px;
}
.price {
 color: grey;
 font-size: 22px;
}
.card button {
 border: none;
 outline: 0;
 padding: 12px;
 color: white;
 background-color: green;
 text-align: center;
 cursor: pointer;
 width: 100%;
 font-size: 18px;
}
.card button:hover {
 opacity: 0.7;
}
.container {
 /* //border: 1px solid black; */
 height: 50px;
 align-items: center;
 }
 .column {
 float: left;
 width: 25%;
 padding: 15px;
}
.row{
 transition: all 1.1s;
}
.row:after {
 content: "";
 display: table;
 clear: both;
}
body {
    color: grey
}

#sidebar {
    background-color:burlywood;
    width: 20%;
    padding: 20px;
    margin: 0;
    height: 100%;
    float: left
}

#products {
    width: 80%;
    padding: 10px;
    margin: 0;
    float: right
}
/* // div {
//   transition: width 1s, height 1s;
// }

// .card:hover {
//   width: 80px;
//   height: 80px;
// } */
ul {
    list-style: none;
    padding: 5px
}

li a {
    color: darkgray;
    text-decoration: none
}

li a:hover {
    text-decoration: none;
    color: darksalmon
}

.fa-circle {
    font-size: 20px
}

#red {
    color: #e94545d7
}

#teal {
    color: rgb(69, 129, 129)
}

#blue {
    color: #0000ff
}

.card {
    width: 250px;
    display: inline-block;
    height: 300px
}

.card-img-top {
    transition: width 1s, height 1s;
    width: 250px;
    height: 210px
}

.card-body p {
    margin: 2px
}

.card-body {
    padding: 0;
    padding-left: 2px
}

.filter {
    display: none;
    padding: 0;
    margin: 0
}

@media(min-width:991px) {
    .navbar-nav {
        margin-left: 35%
    }

    .nav-item {
        padding-left: 20px
    }

    .card {
        width: 190px;
        display: inline-block;
        height: 300px
    }

    .card-img-top {
        width: 188px;
        height: 210px
    }

    #mobile-filter {
        display: none
    }
}

@media(min-width:768px) and (max-width:991px) {
    .navbar-nav {
        margin-left: 20%
    }

    .nav-item {
        padding-left: 10px
    }

    .card {
        width: 230px;
        display: inline-block;
        height: 300px;
        margin-bottom: 10px
    }

    .card-img-top {
        width: 230px;
        height: 210px
    }

    #mobile-filter {
        display: none
    }
}

@media(min-width:568px) and (max-width:767px) {
    .navbar-nav {
        margin-left: 20%
    }

    .nav-item {
        padding-left: 10px
    }

    .card {
        width: 205px;
        display: inline-block;
        height: 300px;
        margin-bottom: 10px
    }

    .card-img-top {
        width: 203px;
        height: 210px
    }

    .fa-circle {
        font-size: 15px
    }

    #mobile-filter {
        display: none
    }
}

@media(max-width:567px) {
    .navbar-nav {
        margin-left: 0%
    }

    .nav-item {
        padding-left: 10px
    }

    #sidebar {
        width: 100%;
        padding: 10px;
        margin: 0;
        float: left
    }

    #products {
        width: 100%;
        padding: 5px;
        margin: 0;
        float: right
    }

    .card {
        width: 230px;
        display: inline-block;
        height: 300px;
        margin-bottom: 10px;
        margin-top: 10px
    }

    .card-img-top {
        width: 230px;
        height: 210px
    }

    .list-group-item {
        padding: 3px
    }

    .offset-1 {
        margin-left: 8%
    }

    .filter {
        display: block;
        margin-left: 70%;
        margin-top: 2%
    }

    #sidebar {
        display: none
    }

    #mobile-filter {
        padding: 10px
    }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header
    {
        overflow: hidden;
        background-color: rgb(91,112,82);
        padding: 25px;
        text-align: center;
        position:fixed;
        top:0;
        width: 100%;
    }
.container{
  display: flex;
}
</style>
