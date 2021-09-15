<template>
  <main class="container1">
    <div @click="backToHome" class="logo">
      <div id="circle"></div>
      <h3 style="font-size: 24px; color: white">ghkas</h3>
    </div>
    <ul class="menu">
      <li @mouseover="listOne = true" @mouseleave="listOne = false">
        <a href="#" style="padding: 8px">All Item</a>

        <transition name="fade" style="padding: 8px">
          <ul v-if="listOne" @click="listOne = false">
            <li>
              <router-link to="/extra" @click="cricket">Cricket</router-link>
            </li>
            <li>
              <router-link to="/extra" @click="badminton"
                >Badminton</router-link
              >
            </li>
            <li>
              <router-link to="/extra" @click="tennis">Tennis</router-link>
            </li>
            <li>
              <router-link to="/extra" @click="football">Football</router-link>
            </li>
            <li>
              <router-link to="/extra" @click="skating">Skating</router-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>

    <div class="header">
      <input type="text" placeholder="search" name="search" />
    </div>
    <button @click="merchantAdd">ADD PRODUCT</button>
    <div class="profile">
      <div id="square">
        <h1
          style="
            font-size: 15px;
            color: white;
            margin: 11px 0px 0px 11px;
            /* padding: 0px; */
            /* justify-content: center; */
            text-align: center;
          "
        >
          Hi
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      listOne: false
    }
  },
  computed: {
    ...mapGetters(['getCartItems']),
    x () {
      let sum = 0
      this.getCartItems.forEach((obj) => {
        sum += obj.quanity
      })
      return sum
    }
  },
  methods: {
    backToHome () {
      this.$router.push('/home')
    },
    cart () {
      this.$router.push('/cart')
    },
    badminton () {
      this.$router.push('/badminton')
    },
    cricket () {
      this.$router.push('/cricket')
    },
    tennis () {
      this.$router.push('/tennis')
    },
    football () {
      this.$router.push('/football')
    },
    skating () {
      this.$router.push('/skating')
    },
    merchantAdd () {
      this.$router.push('/merchant')
    }
  }
}
</script>

<style scoped>
.menu {
  font: 14px/1.5 "Open Sans", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  display: block;
  padding: 8px;
  color: #fff;
  text-decoration: none;
}

.menu li {
  display: block;
  float: left;
  position: relative;
  background: #222;
  color: #fff;
  min-width: 180px;
}

.menu li ul {
  position: absolute;
  left: 0;
  top: 30px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #333;
  transition: background 0.2s;
}

.menu li ul li:hover {
  background: #444;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#circle {
  width: 25px;
  height: 25px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: white;
}
#square {
  width: 85px;
  height: 40px;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: #293328;
}
.header {
  overflow: hidden;
  /* background-color: rgb(91,112,82); */
  text-align: center;
  /* position:fixed; */
  top: 0;
  /* width: 100%; */
}
.container1 {
  display: flex;
  top: 0;
  /* padding: 24px; */
  position: fixed;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  background-color: rgb(91, 112, 82);
}
.profile {
  display: flex;
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
}
.btn {
  border-radius: 0%;
  font-weight: bold;
  /* background: teal; */
  /* border: teal; */
}
.btn:hover {
  background: #014921;
}
input {
  border-radius: 0%;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}
.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
