const express = require("express");
const cartsRepo = require("../repositories/carts");
const productsRepo = require("../repositories/products");
const cartShowTemplate = require("../views/carts/show");

const router = express.Router();

// receive post request to add an item to the cart
router.post("/cart/products", async (req, res) => {
    // figure out the cart
    let cart;
    if (!req.session.cartId) {
        // we don't have a cart, we need to create one,
        // and store the cart id on the req.session.cartId
        // property

        cart = await cartsRepo.create({ items: [] });

        req.session.cartId = cart.id;
    } else {
        // we have a cart, let's get it from the repository
        cart = await cartsRepo.getOne(req.session.cartId);
    }

    const existingItem = cart.items.find(
        (item) => item.id === req.body.productId
    );
    if (existingItem) {
        // either increment quantity of existing product
        existingItem.quantity++;
    } else {
        // OR add new product items array
        cart.items.push({ id: req.body.productId, quantity: 1 });
    }
    await cartsRepo.update(cart.id, {
        items: cart.items,
    });

    res.redirect("/cart");
});

// receive a get request to show all items to cart
router.get("/cart", async (req, res) => {
    if (!req.session.cartId) {
        return res.redirect("/");
    }

    const cart = await cartsRepo.getOne(req.session.cartId);

    for (let item of cart.items) {
        const product = await productsRepo.getOne(item.id);

        item.product = product;
    }

    res.send(cartShowTemplate({ items: cart.items }));
});

// receive a post to delete from cart
router.post("/cart/products/delete", async (req, res) => {
    const { itemId } = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);

    const items = cart.items.filter((item) => item.id !== itemId);

    await cartsRepo.update(req.session.cartId, { items });

    res.redirect("/cart");
});

module.exports = router;
