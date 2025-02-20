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
