const express = require("express")

const router = express()


router.get("/", async(req, res) => {
    res.send("products!!!")
})

module.exports = router