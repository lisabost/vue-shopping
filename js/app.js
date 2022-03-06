const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    // data: all the data for the app
    data: function() {
        return {
            cartList: [],
            wishList: [],
            dialog: false,

        }
    },
    // methods: usually "events" triggered by v-on:
    methods: {
        removeIt: function (item){
            // change cart/wish depending on what list it was in
            if (this.cartList.indexOf(item) >= 0) {
                if (this.cartList[this.cartList.indexOf(item)].numInCart > 1)
                {
                    this.cartList[this.cartList.indexOf(item)].numInCart--;
                    this.item.numInStock++;
                }
                else {
                    this.cartList.splice(this.cartList.indexOf(item), 1);
                    this.item.numInStock++;
                }

            }
            if (this.wishList.indexOf(item) >= 0) {
                this.wishList.splice(this.wishList.indexOf(item), 1);
            }
        },
        moveIt: function (item) {
            if (this.cartList.indexOf(item) >= 0) {
                this.wishList.push(item);
                this.cartList.splice(this.cartList.indexOf(item), 1);
                this.wishList[this.wishList.indexOf(item)].numInCart = 0;
            }
        },
        addIt: function (item) {
            if (item.numInStock === 0) {
                return;
            }
            else {
                if (this.wishList.indexOf(item) >= 0) {
                    if (this.cartList.indexOf(item) >= 0) {
                        this.cartList[this.cartList.indexOf(item)].numInCart++;
                    }
                    else {
                        this.cartList.push(item);
                        this.cartList[this.cartList.indexOf(item)].numInCart++;
                    }
                this.wishList.splice(this.wishList.indexOf(item), 1);
                }
            }

        },
        addToCart: function (item) {
            if (this.cartList.indexOf(item) >= 0) {
                this.cartList[this.cartList.indexOf(item)].numInCart++;
            }
            else {
                this.cartList.push(item);
                this.cartList[this.cartList.indexOf(item)].numInCart++;
            }

        },
        addToWishList: function (item) {
            this.wishList.push(item);
        }

    },
    // computed: values that are updated and cached if dependencies change
    computed: {
        inventoryList: function (){
            return this.productList.filter(function(item){
                return item.category === "for-sale"
            });
        },
    },
    //mounted:  called after the instance has been mounted,
    mounted: function() {
        // using local storage - two function get, set
        // replace local array with one in local storage
        // if (localStorage.getItem('productList')){
        //     this.productList = JSON.parse(localStorage.getItem('productList'));
        // }
    },
    // watch: calls the function if the value changes
    // https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
    watch: {
        // productList: {
        //     // call this function before the data in shoppingList changes
        //     handler: function (newList){
        //         // store in local storage
        //         localStorage.setItem('productList', JSON.stringify(newList))
        //     },
        //     // watch nested properties as well
        //     deep: true
        // }
    }
});
