<template>
  <div>
    <navbar />
    <div id="cart-body" style="padding-top: 100px">
        <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <!-- <div v-for="value in prods" :key="value.id" :value="value" class="prod_card" @click="prod"> -->
        <tbody
          v-for="value in prods"
          :key="value.id"
          :value="value"
          class="prod_card"
        >
          <tr>
            <td id="cart-img"><img src="../assets/key.jpeg" alt="" /></td>
            <td>
              <div class="quantity">
                <span><button @click='minus(value)' class="bt" name="minus" value="minus">-</button></span>
                <span class="bt">{{quantity[value]}}</span>
                <span><button @click='plus(value)' class="bt" value="plus" name="plus">+</button></span>
              </div>
            </td>
            <td>53$</td>
          </tr>
          <!-- <tr>
 <td id="cart-img"><img src="./images.jpeg" alt=""></td>
 <td><input type="number"></td>
 <td>53$</td>
 </tr>
 <tr>
 <td id="cart-img"><img src="./images.jpeg" alt=""></td>
 <td><input type="number"></td>
 <td>53$</td>
 </tr> -->
        </tbody>
        <!-- </div> -->
      </table>
      <div class="out">
          <h1 style="text-align:right;">Sub-Total</h1>
        <buttons type="submit" @click="checkout">Checkout</buttons>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
export default {
  data () {
    return {
      prods: ['0', '1', '2', '3'],
      quantity: [2, 1, 1, 5]
    }
  },
  components: {
    navbar
  },
  methods: {
    plus (value) {
      console.log(this.quantity[value])
      this.$set(this.quantity, value, this.quantity[value] + 1)
    //   this.quantity[value]++
    },
    minus (value) {
      this.$set(this.quantity, value, this.quantity[value] - 1)
    //   this.quantity = this.quantity - 1
    },
    checkout () {
      console.log('checkout')
      this.$router.push('/checkout')
    }
  }
}
</script>

<style scoped>
.out{
    text-align: right;
}
buttons{
background-color: #04aa6d;
  color: white;
  padding: 14px 40px;
  /* margin: 6px 9px; */
  border: none;
  width: 100%;
  /* border-radius: 100px; */
  border: 2px solid rgb(135, 227, 17);
}
table {
  border: solid;
  width: 80vw;
}
#cart-img {
  height: 30px;
  width: 30px;
}
td {
  text-align: center;
}
#cart-body {
  display: flex;
  justify-content: center;
  margin-top: 1vh;
}
.but{
background: rgb(180, 176, 176);
 border: 1px solid #000000;
 box-sizing: border-box;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 border-radius: 2px;
 border: none;
 color: white;
 padding: 2% ;
 text-align: center;
 font-weight:bold;
 font-size:large;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
}
</style>
