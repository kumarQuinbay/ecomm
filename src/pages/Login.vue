<template>
<main class='container'>
  <div class='row'>
    <section class="logo">
        <div id="circle"></div>
        <h1 style="font-size: 40px">ghkas</h1>
    </section>
    <section class="info">
      <div class='row1'>
    <div class="login" ><u><h1 style="font-size: 30px; font-family: cursive; padding-left: 170px; padding-top: 100px">Login page</h1></u></div>
    </div>
    <div class="login-form"></div>
            <div class="container1">
              <div class='pass'>
                <img src="../assets/Daco_4087530.png" class="lock">&nbsp;
                <p>Email Address</p>
                </div>
                <input type="email" placeholder="email@address.com" name="uname" required v-model="email">
                <span style="color: orange" v-if="!validEmail">Wrong email</span>
                 <br>
                 <div class='pass'>
                 <img src="../assets/Daco_86557.png" class="lock">&nbsp;
                <p>Password</p>
                </div>
                <input type="password" placeholder="Enter Password" name="psw" required v-model='pass'>
                <span style="color: orange" v-if="!validPass">Required feild</span>
                     <br> <br>
                     <div class="click">
                <button type="button" @click="ulogin">User Login</button>
                <button type="button" @click="mlogin">Merchant Login</button>
                <button type="button" @click='btnclick'>Register</button>
                </div>
            </div>
  </section>
  </div>
</main>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      validEmail: true,
      pass: '',
      validPass: true
    }
  },
  methods: {
    ...mapActions(['loginMerchant', 'loginUser']),
    btnclick () {
      this.$router.push('/Register')
    },
    gotoHomePage () {
      this.$router.push('/Home')
    },
    gotoMerchentProductPage () {
      this.$router.push('/merchantsproducts')
    },
    ulogin () {
      if (this.email.includes('@')) {
      } else {
        // alert('wrong email')
        this.validEmail = false
      }
      if (this.pass !== '') {} else {
        this.validPass = false
      }
      if (this.validEmail === true && this.validPass === true) {
        this.loginUser({
          data: {
            email: this.email,
            password: this.pass
          },
          success: this.gotoHomePage
        })
      }
    },
    mlogin () {
      if (this.email.includes('@')) {
      } else {
        // alert('wrong email')
        this.validEmail = false
      }
      if (this.pass !== '') {} else {
        this.validPass = false
      }
      if (this.validEmail === true && this.validPass === true) {
        this.loginMerchant({
          data: {
            email: this.email,
            password: this.pass
          },
          success: this.gotoMerchentProductPage
        })
      }
    }
  }
}
</script>

<style scoped>
.pass{
  display: flex;
  align-items: baseline;
}
.lock{
  height: 15px;
}
.click{
  display: flex;
}
.info{
  /* width: 50%; */
}
.logo{
  /* width: 50%; */
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
}
.row{
  background-image: url(https://www.wallpaperkiss.com/wimg/b/228-2280576_big.jpg);
  display: flex;
  justify-content: space-evenly;
  height: 100%;
}
.row1{
  display: flex;
  justify-content: space-evenly;
}
.container{
  width: 100%;
  background: linear-gradient(167.74deg, rgba(32, 46, 31, 0.83) 16.9%, rgba(25, 116, 17, 0.58) 89.92%);
  height: 100vh;
}
.container1{
  width: 100%;
  /* padding: 100px; */
  border-radius: 10%;
  padding: 50% 40% 26% 39%;
  background: linear-gradient(167.74deg, rgba(32, 46, 31, 0.83) 16.9%, rgba(25, 116, 17, 0.58) 89.92%);
}
.login {
  text-align: center;
  height:60px;
  width: 100%;
  color: white;
  margin-bottom: 30px;

}
#circle {
  width: 25px;
  height: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: white;
}
p {
  text-align: left;
  color: white;
  margin-bottom: 0px;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid rgb(135, 227, 17);
  box-sizing: border-box;
}
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 6px 9px;
  border: none;
  width: 100%;
  border-radius: 100px;
  border: 2px solid rgb(135, 227, 17);
}
</style>
