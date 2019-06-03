<template>
  <v-flex>
    <v-flex xs12 sm6 pb-3 offset-sm3 v-for="(article, index) in articles" :key="index">
      <v-card>
        <img
          :src="article.urlToImage"
          width="100%"
          height="200px"
        >

        <v-card-title primary-title>
          <div>
            <div class="headline">{{article.title}}</div>
          </div>
        </v-card-title>

        <v-card-text>
          {{article.content}}
        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat :href="article.url" target="_blank">Open</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>

  </v-flex>
</template>
<script>
  export default {
    data: () => ({
      show: false
    }),
    async asyncData({$axios}){
      const {articles} = await $axios.$get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=af4129710bf14609b57b33cc43239681');
      return{articles};
    }
  }
  
</script>
