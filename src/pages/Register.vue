<template>
<main class='container'>
  <div class='row'>
    <section class="logo">
        <div id="circle"></div>
        <h1 style="font-size: 40px">ghkas</h1>
    </section>
    <section class="info">
      <div class="row">
      <div class="registration" ><u><h1 style="font-size: 30px; font-family: cursive; padding-left: 26%;     padding-top: 25%;">Registration page</h1></u></div>
      </div>
      <div class="registration-form"></div>
        <div class="container1">
          <div class='wrap'>
            <p>Firstname</p>
            <input type="text" placeholder="first name" name="fname" id="firstName" required v-model="fname">
            <span style="color: orange" v-if="!validFname">Required feild</span>
             <br>
             <p>Lastname</p>
            <input type="text" placeholder="last name" name="lname" id="lastName" required v-model="lname">
            <span style="color: orange" v-if="!validLname">Required feild</span>
             <br>
             <p>Phone number</p>
            <input type="number" placeholder="Phone number" name="pnum" id="mobileNumber" required v-model.number="phn">
            <span style="color: orange" v-if="phn===0">Required feild</span>&nbsp;
            <span style="color: orange" v-if="!validPnum">Enter correct phone number</span>
             <br>
             <p>Email address</p>
            <input type="email" placeholder="Enter email" name="enum" id="email" required v-model="email">
            <span style="color: orange" v-if="!validEmail">Wrong email</span>
             <br>
             <p>Password</p>
            <input type="password" placeholder="Enter password" name="psw" id="password" required v-model="pass">
            <span style="color: orange" v-if="!validPass">Wrong email</span>
             <br>
                 <br> <br>
            <button type="submit" @click='ubtnclick'>User Register</button>
            <button type="submit" @click='mbtnclick'>Merchant Register</button>

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
      fname: '',
      validFname: true,
      lname: '',
      validLname: true,
      phn: 0,
      validPnum: true,
      email: '',
      validEmail: true,
      pass: '',
      validPass: true,
      detailsId: {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['postData']),
    ...mapActions(['merchantPostData']),

    ubtnclick () {
      console.log('in function')
      if (this.fname !== '') {
        this.detailsId.firstName = this.fname
        this.validFname = true
      } else {
        this.validFname = false
        console.log('infname')
      }
      if (this.lname !== '') {
        this.detailsId.lastName = this.lname
        this.validLname = true
      } else {
        this.validLname = false
        console.log('inlname')
      }
      if (this.phn !== 0 && this.phn > 999999999 && this.phn < 10000000000) {
        this.detailsId.mobileNumber = this.phn
        this.validPnum = true
      } else {
        this.validPnum = false
        console.log('inphnum')
      }
      if (this.pass !== '') {
        this.detailsId.password = this.pass
        this.validPass = true
      } else {
        this.validPass = false
        console.log('pass')
      }
      if (this.email.includes('@')) {
        this.detailsId.email = this.email
        this.validEmail = true
      } else {
        this.validEmail = false
        console.log('mail')
      }
      if (this.validFname === true && this.validLname === true && this.validPnum === true && this.validPass === true && this.validEmail === true) {
        this.postData({ data: this.detailsId, success: this.successFunction })
        this.$router.push('/Login')
      }
    },
    mbtnclick () {
      console.log('in function')
      if (this.fname !== '') {
        this.detailsId.firstName = this.fname
        this.validFname = true
      } else {
        this.validFname = false
        console.log('infname')
      }
      if (this.lname !== '') {
        this.detailsId.lastName = this.lname
        this.validLname = true
      } else {
        this.validLname = false
        console.log('inlname')
      }
      if (this.phn !== 0 && this.phn > 999999999 && this.phn < 10000000000) {
        this.detailsId.mobileNumber = this.phn
        this.validPnum = true
      } else {
        this.validPnum = false
        console.log('inphnum')
      }
      if (this.pass !== '') {
        this.detailsId.password = this.pass
        this.validPass = true
      } else {
        this.validPass = false
        console.log('pass')
      }
      if (this.email.includes('@')) {
        this.detailsId.email = this.email
        this.validEmail = true
      } else {
        this.validEmail = false
        console.log('mail')
      }
      if (this.validFname === true && this.validLname === true && this.validPnum === true && this.validPass === true && this.validEmail === true) {
        this.merchantPostData({ data: this.detailsId, success: this.successFunction })
        this.$router.push('/Login')
      }
    },
    successFunction () {
      window.alert('Registered successfully')
    }
  }

}
</script>

<style scoped>
.wrap{
  align-items: center;
  width: 300px;
}
.logo{
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
}
.row{
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
  padding: 21% 35% 17% 31%;;
  background: linear-gradient(167.74deg, rgba(32, 46, 31, 0.83) 16.9%, rgba(25, 116, 17, 0.58) 89.92%);
  border-radius: 10%;
}
.registration {
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
        p{
            text-align: left;
            color: white;
            margin-bottom: 0px;
        }
        input[type=email], input[type=password], input[type=text], input[type=number]{
             width: 100%;
             padding: 12px 20px;
             margin: 8px 0;
             display: inline-block;
             border: 2px solid rgb(135, 227, 17);
             box-sizing: border-box;
        }
        button {
            background-color: #04AA6D;
            color: black;
            padding: 14px 20px;
            margin: 6px 9px;
            border: none;
            width: 100%;
            border-radius: 100px;
            border: 2px solid rgb(135, 227, 17);
        }
</style>
