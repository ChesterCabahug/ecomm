const express = require("express")
const cartsRepo = require("../repositories/carts")

const router = express.Router()

// receive post request to add an item to the cart
router.post("/cart/products", async (req, res) => {
    // figure out the cart
    let cart
    if(!req.session.cartId) {
        // we don't have a cart, we need to create one,
        // and store the cart id on the req.session.cartId
        // property

        cart = await cartsRepo.create({items: []})

        req.session.cartId = cart.id
    } else {
        // we have a cart, let's get it from the repository
        cart = await cartsRepo.getOne(req.session.cartId)
    }

    console.log(cart)
    // either increment quantity of existing product or 
    // OR add new product items array


    res.send("product added to cart!")
})

// receive a get request to show all items to cart

// receive a post to delete from cart

module.exports = router