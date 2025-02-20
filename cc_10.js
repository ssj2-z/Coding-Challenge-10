// Task 1 Creating Products
class Product {
    constructor(name,id, price, stock) {
        this.name = name; this.id; this.price = price; this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quatity) {
        this.stock -= quantity;
    }
}

// Test Cases
const product1 = new Product("Laptop", 101, 1200, 10);
console.log(product1.getDetails());

// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

product1.updateStock(3);
console.log(product1.getDetail());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2 Creating Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; this.product = product; this.quantity = quantity; this.totalPrice = this.product.price * this.quantity; this.product.updateStock(this.quantity);
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}

// Test Cases
const order1 = new Order(501, product1, 2);
console.log(order1.getOrderDetails());

// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(product1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: 1200, Stock: 5" (Stock reduced)

// Task 3 Creating Inventory Classes
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(product.getDetails());
        });
    }
}

// Test Cases
const inventory = new Inventory(); inventory.addProduct(product1); inventory.listProducts();

// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

//Task 4 Implementing Order Management
class Inventory {
    constructor() {
        this.products = []; this.order = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(this.products.getDetails());
        });
    }

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity); this.orders.push(order);
            console.log(`Order placed successfully: ${order.getOrderDetails()}`);
        } else {
            console.log(`Insufficient stock for product: ${product.name}`);
        }
    }

    listOrders() {
        this.orders.forEach(order => {
            console.log(order.getOrderDetails());
        });
    }
}

// Test cases
const inventory = new Inventory();
inventory.addProduct(product1); inventory.placeOrder(601, product1, 2); inventory.listOrders();

// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(product1.getDetails());

// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Task 5 Implementing Product Restocking
class Inventory {
    constructor() {
        this.products = []; this.order = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    listProducts() {
        this.products.forEach(products => {
            console.log(product.getDetails());
        });
    }

    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, this.products, quantity); this.order.push(order);
            console.log(`Order placed successfully: ${order.getOrderDetails()}`);
        } else {
            console.log(`Insufficient stock for product: ${product.name}`);
        }
    }

    listOrders() {
        this.order.forEach(order => {
            console.log(order.getOrderDetails());
        });
    }

    restockProduct(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock += quantity;
            console.log(`Product restocked successfully: ${product.getDetails()}`);
        } else {
            console.log(`Product with ID: ${productId} not found.`);
        }
    }
}

// Test cases 
const inventory = new Inventory();
inventory.addProduct(product1);

inventory.placeOrder(601, product1, 2); inventory.listOrders();

// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2 Total Price: $2400"

console.log(product1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

inventory.restockProduct(101, 5);

console.log(product1.getDetails());
// Expecteed output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"
