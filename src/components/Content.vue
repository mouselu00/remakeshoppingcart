<template>
  <div class="content">
    
    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-media height="400" src="/static/mtbg.jpg">
            <v-container fill-height fluid>
              <v-layout fill-height align-end>
                <v-flex xs12>
                  <v-layout jusitfy-space-between>
                    <v-flex>
                      <span class="headline">Re:Make React Maker App to Vue + Vuetify App</span>
                    </v-flex>
                    <v-flex class="text-xs-right">
                      <v-dialog v-model="dialog" persistent class="text-xs-right">
                        <v-btn fab slot="activator">
                          <v-icon large v-badge="{ value: carts.length, left: false}" class="grey--text text--lighten-1">shopping_cart</v-icon>
                        </v-btn>
                        <v-card>
                          <v-list two-line>
                            <v-list-tile avatar ripple v-for="(cart, index) in carts" v-bind:key="cart.id">
                              <v-list-tile-content>
                                <v-list-tile-title>{{ cart.title }}</v-list-tile-title>
                                <v-list-tile-sub-title class="grey--text text--darken-4">$ {{ cart.price }}</v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{ cart.desc }}</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <v-btn flat fab @click.native="remove(index)">
                                  <v-icon class="grey--text text--lighten-1">remove_shopping_cart</v-icon>
                                </v-btn>
                              </v-list-tile-action>
                              <v-divider v-if="index + 1 < cart.length"></v-divider>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>
                                $ {{ carts.reduce((acc, item) => (acc += item.price), 0) }}
                              </v-list-tile-content>
                              <v-list-action>
                                <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
                              </v-list-action>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-dialog>
                    </v-flex>
                  </v-layout>
  
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  
    <ContentDetial :items='items' :carts='carts' @addToCart='addToCart'></ContentDetial>

  </div>
</template>

<script>

import ContentDetial from './ContentDetial.vue'

export default {
  name: 'content',

  components: {
    ContentDetial
  },

  data() {
    return {
      dialog: false,
      items: [],
      carts: [],
    }
  },
  created() {
    this.$http.get('https://demojson.herokuapp.com/cart').then((data) => {
      return data.json()
    }).then((res) => {
      this.items = res
    })
  },
  methods: {
    addToCart(index) {
      const cart = this.items.find((data) => {
        return data.id == index
      })
      this.carts.push(cart)
    },

    remove(index) {
      this.carts.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
