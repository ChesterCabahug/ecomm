const express = require("express")

const router = express.Router()

// receive post request to add an item to the cart
router.post("/cart/products", (req, res) => {
    console.log(req.body.productId)
    res.send("product added to cart!")
})

// receive a get request to show all items to cart

// receive a post to delete from cart

module.exports = router