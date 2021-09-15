<template>
  <main class='screen'>
    <navbar />
    <div class="main">
      <div class="topnav">
        <router-link to="/extra" class="categories">Cricket</router-link>
        <router-link to="/extra" class="categories">Badminton</router-link>
        <router-link to="/extra"  class="categories">Tennis</router-link>
        <router-link to="/extra"  class="categories">Football</router-link>
        <router-link to="/extra"  class="categories">Skating</router-link>
      </div>
      <slider />
      <div class="fixy">
        <h2 style= "margin:0px; padding:2%;"><u>Shop by Categories</u></h2>
      </div>
      <!-- <div class="container">
                <div class="row">
                  <div class="column">
                    <a href = '_'><img class='imgs' src='https://media.istockphoto.com/photos/closeup-of-red-cricket-ball-and-bat-sitting-on-grass-picture-id177427917?k=20&m=177427917&s=612x612&w=0&h=kr-FOxME8KOnnhYsuR6WFAfB-Hv_ch20Fz5xnzeSU10=' width='102%' height='200'></a>
                  </div>
                  <div class="column">
                    <a href=" "><img class="imgs" src='https://w0.peakpx.com/wallpaper/587/891/HD-wallpaper-badminton-racket-sports-equipment-closeup.jpg' width='120%' height="200"></a>
                </div>
                </div>
                <div class="row">
                   <div class="column">
                    <a href=" "><img class="imgs" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPunT_GTdH_jyx2yloVHlV2JFrv8YKRpI_g&usqp=CAU" width="102%" height="200"></a>
                   </div>
                   <div class="column">
                    <a href=" "><img class="imgs" src="file:///Users/gadiyaramsaidurgaharshitha/Desktop/football.jpeg " width="110%" height="200"></a>
                   </div>
                </div>
                <div class="row">
                  <div class="column">
                    <a href=" "><img class="imgs" src="file:///Users/gadiyaramsaidurgaharshitha/Desktop/shuttle.jpeg " width="102%" height="200"></a>
                  </div>
                </div>

        </div> -->
      <span v-for="cat in categories" :key="cat.id" :value="cat">
        <div class="each_big_category">
          <div style="text-align: left">
            <h2 style="margin-left: 1%">Category: {{ cat }}</h2>
          </div>
          <div class="prod_group">
            <span
              v-for="value in prods"
              :key="value.id"
              :value="value"
              class="prod_card"
              @click="prod"
            >
              <div style="display: flex; justify-content: center">
                <img src="../assets/Daco_86557.png" alt="" id="prod_img" />
              </div>
              <div>
                <br />
                <div style="font-size: large">Product Title</div>
              </div>
              <div>
                <div style="font-size: large; font-weight: bold">$ 33.76</div>
              </div>
              <br />
            </span>
          </div>
          <br />
        </div>
        <br /><br />
      </span>
    </div>
  </main>
</template>

<script>
import navbar from '../components/navbar.vue'
import slider from '../components/slider.vue'
export default {
  components: {
    navbar,
    slider
  },
  data () {
    return {
      name: 'naman',
      categories: ['Cricket', 'Badminton', 'Tennis', 'Football', 'Skating'],
      prods: ['1', '2', '3', '4', '5']
    }
  },
  methods: {
    prod () {
      this.$router.push('/product')
    }
  }
}
</script>

<style scoped>
.screen{
  width:100vw;
}
.main {
  padding-top: 66px;
  background:linear-gradient(167.74deg, rgba(32, 46, 31, 0.83) 16.9%, rgba(25, 116, 17, 0.58) 89.92%);
}
body {
  padding: 0px;
  background-color: rgb(41, 51, 40);
  text-align: right;
}

.header {
  overflow: hidden;
  background-color: rgb(91, 112, 82);
  padding: 25px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
}
.fixy {
  background-color: rgb(91, 112, 82);
  /* padding: 5px; */
  text-align: center;
  width: 100%;
}
input[type="text"] {
  width: 40%;
  padding: 10px;
  text-align: center;
}
.topnav {
  background-color: rgb(56, 67, 50);
  text-align: center;
  width: 100%;
}
.categories:link,
a:visited {
  background-color: rgb(56, 67, 50);
  color: white;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.categories:hover,
a:active {
  background-color: black;
}
.column {
  float: left;
  width: 45%;
  padding: 5px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.head_category
{
 padding: 0% 0% 0% 0.5%;
 border: 0px solid black;
 border-radius: 5px;
}
.cat_dropdown
{
 width: 17.5%;
 background-color: #FAE2A6;
 padding: 0.5%;
 border: 0.5px solid gray;
 border-radius: 5px;
}
.four_category
{
 display: flex;
 justify-content: space-between;
 margin: 1% 0% 2% 0%;
}
.cat_span
{
 height: fit-content;
 width: 23%;
 /* margin: 1% 2% 1% 0%; */
 border: 0.5px solid black;
 border-radius: 6px;
 padding-top: 1%;
 background: linear-gradient(180deg, #FAE2A6 0%, #ffff 100%);
}
#elogo
{
 zoom: 30%;
 text-align: center;
}
#prod_img
{
 height: 220px;
 width: 150px;
 text-align: center;
}
.full_body
{
 margin: 1% 1% 0% 1%;
}
.each_big_category
{
 border: 3px solid rgb(145, 140, 140);
 border-radius: 20px;
 background-color: antiquewhite;
 margin:2%;
}
.prod_group
{
 display: flex;
 justify-content: space-between;
}
.prod_card
{
 width: 15%;
 height: fit-content;
 margin: 0% 1% 1% 1%;
 /* border:1px solid black; */
 border-radius: 6px;
 padding: 1% 1% 1% 1%;
 background-color: white;
}
</style>
