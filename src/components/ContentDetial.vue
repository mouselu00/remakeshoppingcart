<template>
  <v-layout row wrap align-end class="mt-2">
      <v-flex xs4 v-for="item in items" :key="item.id">
        <v-card class="mb-2">
          <v-card-media class="white--text" height="200px" :src="item.img">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ item.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text">$ {{ item.price }}</span>
              <br>
              <span>{{ item.desc }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
              <v-btn flat class="orange--text" @click.native="add(item.id)" :disabled="dis(item.id)">BUY</v-btn>  
          </v-card-actions>
        </v-card>
      </v-flex>
  
    </v-layout>
</template>
<script>
  export default{
    name: 'ContentDetial',

    props: ['items' , 'carts'],

    data(){
      return {
        disabled: false,
      }
    },

    methods: {
      add(id){
        this.$emit('addToCart' , id)
        this.disabled = true
      },
      dis(index) {
        const bool = this.carts.find((data) => data.id === index)
        return bool ? true : false
      },
    }

  }
</script>