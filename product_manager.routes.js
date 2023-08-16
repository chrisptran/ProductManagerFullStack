const ProductController = require("../controllers/product_manager.controller")

module.exports = (app) => {
    app.get("/api/test", ProductController.testApi)
    app.get("/api/products", ProductController.allProducts)
    app.get("/api/products/:id", ProductController.oneProduct)
    app.post("/api/products", ProductController.addProduct)
    app.put("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
}