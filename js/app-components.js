//TODO: make book component that can be used in both the sale-item and cart-item
const ShopComponent = Vue.component('Shop', {
    data: function () {
        return {
            shop: [
                new Book(1, 'Charlotte\' Web','A tale, on a farm, regarding an extraordinary pig named Wilbur and his devoted friend ' +
                    'Charlotte who saves his life by writing about him in her web', 'E.B. White', 5.47, 5, 'images/web.jpg', 0),
                new Book(2, 'Madeline', 'The daily adventures of Madeline, a girl at a boarding school in Paris with eleven other girls ' +
                    'under the care of Miss Clavel', 'Ludwig Bemelmans', 10.69, 10, 'images/madeline.jpg', 0),
                new Book(3, 'The Very Hungry Caterpillar', 'The story of a small caterpillar who eats everything in sight for six days and ' +
                    'on the seventh day eats a nice leaf and feels better', 'Eric Carle', 5.06, 10, 'images/caterpillar.jpg', 0),
                new Book(4, 'Charlie and the Chocolate Factory', 'A young boy wins a tour through the most magnificent chocolate factory in ' +
                    'the world, led by the world\'s most unusual candy maker', 'Roald Dahl', 6.47, 10, 'images/charlie.jpg', 0),
                new Book(5, 'Harry Potter and the Sorcerer\'s Stone', 'Harry Potter discovers his magical heritage and heads off to Hogwarts ' +
                    'School of Witchcraft and Wizardry', 'J.K. Rowling', 9.99, 10, 'images/harry-potter.jpg', 0),
                new Book(6, 'Goodnight Moon', 'A young bunny says goodnight to the objects and creatures in a green walled bedroom, drifting to ' +
                    'sleep as the light dims and the moon glows through the window', 'Margaret Wise Brown', 5.36, 10, 'images/moon.jpg', 0),
                new Book(7, 'The Velveteen Rabbit', 'A story of a velveteen rabbit and his desire to become real through the love of his owner', 'Margery ' +
                    'Williams', 7.49, 10, 'images/rabbit.jpg', 0),
                new Book(8, 'Ramona Quimby, Age 8', 'The story of a young third-grader\'s experience as she starts a new school year at a new school, ' +
                    'and deals with family stresses', 'Beverly Cleary', 7.99, 10, 'images/ramona.jpg', 0),
                new Book(9, 'The One And Only Ivan', 'A beautiful story of friendship between a gorilla named Ivan, an elephant named Stella, and a stray' +
                    ' dog named Bob', 'Katherine Applegate', 6.96, 10, 'images/ivan.jpg', 0),
                new Book(10, 'Where the Wild Things Are', 'A young boy named Max was naughty and sent to his room without supper. Dressed in pajamas that make him' +
                    ' look like a wolf he either imagines or dreams that his room becomes a jungle', 'Maurice Sendak', 13.29, 10, 'images/wildthings.jpg'),
                new Book(11, 'Owl Moon', 'A father takes his child owling for the first time. Along the way they encounter a great horned owl', 'Jane Yolen',
                    10.29, 10, 'images/owlmoon.jpg', 0),
                new Book(12, 'The True Story of the Three Little Pigs', 'A retelling of the three little pigs from the point of view of the wolf', 'Jon Scieszka',
                    7.99, 10, 'images/pigs.jpg', 0),
                new Bookmark(13,'Fractals Bookmark Set', 'A set of 12 bookmarks with fractal designs', 4.99, 8, 'images/fractal-bookmarks.jpg',
                    0, 'card-stock'),
                new Bookmark(14, 'Fantasy Bookmark Set', 'A set of 12 fantasy themed bookmarks', '5.99', 9, 'images/fantasy-bookmarks.jpg',
                    0, 'card-stock'),
                new Bookmark(15, 'Dr. Seuss Bookmark Set', 'A set of 8 bookmarks with images from Dr. Seuss books', 7.99, 10, 'images/seuss-bookmarks.jpg',
                    0, 'card-stock'),
                new Movie(16, 'Moana', 'An adventurous teenager sails out on a daring mission to save her people.', 19.99, 7, 'images/moana.jpg',
                    0, 105, 'DVD/BLU-RAY'),
                new Movie(17, 'Encanto', 'A Columbian girl has to face the frustration of being the only member of her family without magical powers.', 24.99, 8,
                    'images/encanto.jpg', 0, 102, 'DVD/BLU-RAY'),
                new Movie(18, 'Frozen', 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter,' +
                    'her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather conditions.', 19.99, 6, 'images/frozen.jpg',
                    0, 102, 'DVD/BLU-RAY')
            ]
        }
    },
    template: `<v-row class="inventoryWindow">
                    <template v-for="item in shop">
                        <v-col cols="12" sm="6" md="2">
                            <sale-item :key="item.id" :item="item" @add-to-cart="theItemEmitted => $emit('add-to-cart', theItemEmitted)" 
                            @add-to-wish-list="theItemEmitted => $emit('add-to-wish-list', theItemEmitted)"></sale-item>
                        </v-col>
                    </template>
               </v-row>`
});


const SaleItemComponent = Vue.component('SaleItem', {
    props: {
        item: {
            type: ShopItem
        },
    },
    methods: {

    },
    template:`
<div data-app>
    <v-card class="mx-auto my-12 item-card" max-width="374">
        <v-img height="250px" width="350px" :src="item.image"></v-img>
        <v-card-title><span class="title">{{item.title}}</span></v-card-title>
        <v-card-text>
            <v-row align="center" class="mx-0">
                <div class="grey--text ms-4"></div>
            </v-row>
            <div class="my-4 text-subtitle-1">{{item.author}}</div>
            <div></div>
        </v-card-text>
        <v-card-title>$ {{item.price}}</v-card-title>
        <v-card-subtitle>In Stock: {{item.numInStock}}</v-card-subtitle>
        <v-card-text> </v-card-text>
        <v-card-actions>
            <template>
                <v-row justify="center">
                    <product-details :item="item" @add-to-cart="theItemEmitted => $emit('add-to-cart', theItemEmitted)" 
                            @add-to-wish-list="theItemEmitted => $emit('add-to-wish-list', theItemEmitted)"></product-details>
                </v-row>
            </template>
        </v-card-actions>
    </v-card>
</div>`
});

Vue.component('ProductDetails', {
    data: function () {
        return { dialog: false,}
    },
    props: {
        item: ShopItem
    },
    methods: {
        addToCart(name) {
            this.dialog = false;
            if (this.item.name === name) {
                if (this.item.numInStock === 0) {
                    return;
                }
                else {
                    this.$emit('add-to-cart', this.item);
                    this.item.numInStock--;
                }
            }
        },
        addToWishList(name) {
            this.dialog = false;
            if (this.item.name === name) {
                this.$emit('add-to-wish-list', this.item);
            }
        }
    },
    template: `<v-dialog v-model="dialog" persistent width="600px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="card-actions" color="primary" dark v-bind="attrs" v-on="on">More Information</v-btn>
                        </template>
                        <v-card class="card-outer">
                            <v-card-title>
                                <span class="text-h5">{{item.title}}</span>
                            </v-card-title>
                            <v-img class="small-image" height="250px" max-width="600px" :src="item.image"></v-img>
                            <v-card-text>
                                <v-container>
                                    <p class="text-h5">Written by: {{item.author}}</p>
                                    <p class="text-h5">Illustrated by: {{item.illustrator}}</p>
                                    <br>
                                    <p>{{item.description}}</p>
                                    <br>
                                    <strong>$ {{item.price}}</strong>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">
                                Cancel
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="addToWishList(item.name)">
                                Add to Wish List
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="addToCart(item.name)">
                                Add to Cart
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>`
})

Vue.component('PopUpList', {
    props: {
        name: {
            type: String,
            default: "Shopping Cart"
        },
        items: {
            type: Array,
        },
        icon: {
            type: String,
            default: "mdi-magnify"
        },
        tooltip: {
            type: String,
            default: "hover over me"
        },
        myClass: {
            type: String,
        }
    },
    methods: {

    },
    computed: {
        subtotal: function() {
            let subtotal = 0;
            this.items.forEach(function(item) {
                subtotal += item.price * item.numInCart;
            });
            return (Math.round(subtotal * 100)/ 100).toFixed(2);
        },
        shipping: function() {
            let shipping = 0;
            this.items.forEach(function(item) {
               shipping += item.shipping * item.numInCart;
            });
            return (Math.round(shipping * 100) / 100).toFixed(2);
        },
        total: function () {
            let subtotal = 0;
            this.items.forEach(function(item) {
                subtotal += (item.price * item.numInCart);
            });

            let shipping = 0;
            this.items.forEach(function(item) {
                shipping += (item.shipping * item.numInCart);
            });

            return (Math.round((subtotal + shipping) * 100) / 100).toFixed(2);
        }

    },

    template: `
            <v-dialog transition="dialog-top-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn class="tooltip" v-bind="attrs" v-on="on"><v-icon>{{icon}}</v-icon>
                    <p class="tooltiptext">{{tooltip}}</p>
                    </v-btn>
                </template>
                <template v-slot:default="dialog">
                    <v-card>
                        <v-toolbar color="primary mb-3" dark>{{name}}</v-toolbar>
                        <v-card-text>
                            <template>
                                <v-container class="pa-5">
                                    <v-row class="ma-5">
                                        <v-col v-for="(item, i) in items" :key="item.name" cols="12">
                                            <cart-item :class="myClass" :key="item.title" :item="item" @remove-item="theItemEmitted => $emit('remove-item', theItemEmitted)"
                                            @move-item="theItemEmitted => $emit('move-item', theItemEmitted)" @add-item="theItemEmitted => $emit('add-item', theItemEmitted)" ></cart-item>
                                        </v-col>
                                    </v-row>
                                    <v-spacer></v-spacer>
                                    <v-col class="text-right">
                                        <p class="text-right">Subtotal: $ {{subtotal}}</p>
                                        <p class="text-right">Shipping: $ {{shipping}}</p>
                                        <p>Total: $ {{total}}</p>
                                    </v-col>
                                </v-container>
                            </template>   
                        </v-card-text>
                        <v-card-actions class="justify-end">
                            <v-btn text @click="dialog.value = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>`
});

const SmallListComponent = Vue.component('CartItem', {
   props: {
        item: {
            type: ShopItem,
        }
   } ,
    methods: {
        removeItem() {
          this.$emit('remove-item', this.item);
          this.item.numInStock++;
        },

        moveItem() {
          this.$emit('move-item', this.item);
          this.item.numInStock++;
        },
        addItem() {
            if (this.item.numInStock === 0) {
                return;
            }
            else {
                this.$emit('add-item', this.item);
                this.item.numInStock--;
            }
        }
    },

    template: `
    <v-card class="cart-item mt-5">
        <div class="d-flex flex-no-wrap justify-space-between">
            <v-row>
                <v-col>
                    <v-card-title class="text-h5"><span>{{item.title}}</span></v-card-title>
                    <v-card-subtitle v-text="item.author"></v-card-subtitle>
                    <v-card-text>
                        <p>$ {{item.price}}</p>
                        <p class="no">Number in Cart: {{item.numInCart}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-row justify="space-around">
                            <v-col>
                                <v-btn class="mx-2 tooltip" fab dark small color="primary" @click="removeItem()">
                                <v-icon dark>mdi-minus</v-icon>
                                <p class="tooltiptext">Remove</p>
                                </v-btn>
                            </v-col>
                            <v-col>                          
                                <v-btn class="ma-5 tooltip" fab dark small color="primary" @click="moveItem()">
                                <v-icon dark>mdi-playlist-star</v-icon>
                                <p class="tooltiptext">Add to Wishlist</p>
                                </v-btn>
                            </v-col>
                            <v-col>                          
                                <v-btn class="ma-5 tooltip" fab dark small color="primary" @click="addItem()">
                                <v-icon dark>mdi-cart-plus</v-icon>
                                <p class="tooltiptext">Add to Cart</p>
                                </v-btn>
                            </v-col>
                        </v-row>  
                    </v-card-actions>
                </v-col>
                <v-col>
                    <v-avatar class="ma-3 flex-row-reverse" size="125" tile>
                        <v-img :src="item.image"></v-img>
                    </v-avatar>
                </v-col>
            </v-row>
        </div>
    </v-card>
    `
});
