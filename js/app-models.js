class ShopItem  {
    shipping;
    id = 0;
    title = '';
    description = '';
    price = 0.00;
    numInStock = 10;
    image = '';
    numInCart = 0;

    constructor(id, title, description, price, numInStock, image, numInCart) {
        this.shipping = 1.75;
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.numInStock = numInStock;
        this.image = image;
        this.numInCart = numInCart
    }
}


class Book extends ShopItem{
    author;

    constructor(id, title, description, author, price, numInStock, image, numInCart) {
        super(id, title, description, price, numInStock, image, numInCart);
        this.author = author;
    }
}

class Bookmark extends ShopItem{

    constructor(id, title, description, price, numInStock, image, numInCart) {
        super(id, title, description, price, numInStock, image, numInCart);
    }
}

class Movie extends ShopItem{
    runtime;
    format;

    constructor(id, title, description, price, numInStock, image, numInCart, runtime, format) {
        super(id, title, description, price, numInStock, image, numInCart);
        this.runtime = runtime;
        this.format = format;
    }
}

