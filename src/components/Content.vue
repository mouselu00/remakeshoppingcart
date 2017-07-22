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
                                            <span class="headline">Re:Make React Maker App</span>
                                        </v-flex>
                                        <v-flex class="text-xs-right">
                                            <v-dialog v-model="dialog" persistent class="text-xs-right">
                                                <v-btn fab slot="activator">
                                                    <v-icon large v-badge="{ value: items.length, left: false}" class="grey--text text--lighten-1">shopping_cart</v-icon>
                                                </v-btn>
                                                <v-card>
                                                    <v-card-title class="headline">Use !Google's location service?</v-card-title>
                                                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Disagree</v-btn>
                                                        <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">Agree</v-btn>
                                                    </v-card-actions>
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
                        <v-btn flat class="orange--text">BUY</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
    
        </v-layout>
    </div>
</template>

<script>
export default {
    name: 'content',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            dialog: false,
            items: [],
        }
    },
    created() {
        this.$http.get('https://demojson.herokuapp.com/cart').then((data) => {
            return data.json()
        }).then((res) => {
            this.items = res
            console.log(this.items)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
