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

    const existingItem = cart.items.find(item => item.id === req.body.productId)
    if (existingItem) {
        // either increment quantity of existing product
        existingItem.quantity++
    } else {
        // OR add new product items array
        cart.items.push({id: req.body.productId, quantity: 1})
    }
    await cartsRepo.update(cart.id, {
        items: cart.items
    })

    res.send("product added to cart!")
})

// receive a get request to show all items to cart

// receive a post to delete from cart

module.exports = router