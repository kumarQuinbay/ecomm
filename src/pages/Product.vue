<template>
    <main>
        <navbar />
        <br><br><br><br><br>
        <div class="row">
            <div class="column1">
                <img src='https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?k=20&m=177427917&s=612x612&w=0&h=kr-FOxME8KOnnhYsuR6WFAfB-Hv_ch20Fz5xnzeSU10='
                    class='img'>
                <br><br>
                <div class="carts">
                <button @click="addItem" :disabled="itemadded"> ADD TO CART </button><br>
                <button @click="removeItem" :disabled="!itemadded"> REMOVE FROM CART </button><br>
                </div>
                <p><b>Available offers</b></p>
                <p>Special PriceExtra ₹55 off(price inclusive of discount)</p>
                <p><b>Bank Offer</b> 5% Unlimited Cashback on Axis Bank Credit Card T&C </p>
                <p><b>Bank Offer</b> 20% off on 1st txn with Amex Network Cards issued by ICICI Bank,SBI Cards T&C</p>
            </div>
            <div class="column2">
                <h2> PRODUCT TITLE </h2>
                <hr> <br>
                <h3> <b>30/-</b> </h3>
                <p style="color: green"> 50% off</p> <br>
                <h2> PRODUCT DESCRIPTION </h2>
                <hr>
                <p> Bean bag covers are made from leatherette fabric which is double-stitched with superior seam and
                    tear strength. They are built to be durable, comfortable and are a great addition to the
                    contemporary home</p><br>
                <p><b>Warranty Details:</b> 1 year limited warranty against manufacturing defects</p>
                <br>
                <!-- product colour -->
                <h3>Choose Color</h3>
                <button class='pcolor'> color1 </button>
                <button class='pcolor'> color2 </button>
                <button class='pcolor'> color3 </button>

                <h3> Merchant Details </h3>
                <hr>
                <p> Bean bag covers are made from leatherette fabric which is double-stitched with superior seam and
                    tear strength. They are built to be durable, comfortable and are a great addition to the
                    contemporary home </p> <br>
                <h2>Customer Review</h2>
                <hr>
            </div>
        </div>
    </main>
</template>

<script>
import navbar from '../components/navbar.vue'
import { mapMutations } from 'vuex'
export default {
  components: {
    navbar
  },
  data () {
    return {
      itemadded: false
    }
  },
  methods: {
    ...mapMutations(['setCartItems', 'removeCartItem']),
    addItem () {
      this.setCartItems({
        productid: 'dsufs',
        quanity: 1
      })
      this.itemadded = true
    },
    removeItem () {
      this.itemadded = false
      this.removeCartItem({
        productid: 'dsufs'
      })
    }
  }
}

</script>

<style scoped>
.carts{
  display: flex;
}
    .img {
        top: 50px;
        margin: 30px;
        width: 70%;
        border-radius: 2%;
    }

    button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        margin: 30px;
    }

    button:disabled {
      background-color: rgb(197, 197, 197);
    }

    .column1 {
        float: left;
        width: 50%;
        padding: 5px;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    main {
        background-color: rgb(247, 248, 247);
    }

    .pcolor {
        background-color: rgb(243, 245, 247);
        border: 2px solid black;
        border-color: black;
        cursor: pointer;
        color: black;
    }

    .pcolor:hover {
        background-color: rgb(220, 235, 202);
    }
</style>>
