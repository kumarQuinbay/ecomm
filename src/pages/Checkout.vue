<template>
<main class="mains" @click="redirect">
<div class="payment" >
<img :src="checkgif" />
<h1><b>Thankyou for Shopping!!</b></h1></div>
<div class="back"><h1><b>Click anywhere on screen, to got back to home page!!</b></h1></div>

</main>
</template>

<script>
import check from '../assets/check-circle.gif'
export default {
  data () {
    return {
      checkgif: check
    }
  },
  methods: {
    redirect () {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
.payment{
        display: flex;
    justify-content: center;
    align-items: center;
}
.mains{
    height: 100vh;
}
.back{
    text-align: -webkit-center;
}
</style>
