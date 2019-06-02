<template>
  <v-layout row wrap>
    <v-flex xs12>
    <v-carousel>
      <v-carousel-item
        v-for="(article, index)  in articles"
        :src="article.src"
        :key="index"
      >
      </v-carousel-item>

      </v-carousel>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      
      return {
        articles: [
          {
            src: 'https://i0.wp.com/cdn.vanguardngr.com/wp-content/uploads/2018/10/pdp-members.gif?fit=412%2C230&ssl=1'
          },
          {
            src: 'https://cdn.punchng.com/wp-content/uploads/2019/06/02173535/Trump-and-Meghan.jpg'
          },
          {
            src: 'https://cdn.punchng.com/wp-content/uploads/2019/01/28153616/Pope-Francis1.jpg'
          },
          {
            src: 'https://cdn.punchng.com/wp-content/uploads/2018/10/01183201/Pastor-William-Kumuyi-and-President-Muhammadu-Buhari.jpg'
          }
        ],
        
      }
    }
  }
</script>
<style scoped>
.title{
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size:2em;
  padding:30px;
  position: absolute;
  margin-left: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: text-bottom;
}
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
  .title{
    margin: 0 30px 0 60px; 
  }
}
</style>
