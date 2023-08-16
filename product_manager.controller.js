const Product = require("../models/product_manager.model")

module.exports.testApi = (req, res) => {
    
    res.json({status: "ok"})
}

module.exports.allProducts = (req, res) => {
    Product.find()
    .then(productList => res.json(productList))
    .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.json(err))
}

module.exports.addProduct = (req, res) => {
    Product.create(req.body)
    .then(createdProduct => res.json(createdProduct))
    .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}