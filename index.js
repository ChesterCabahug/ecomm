const express = require("express")
const {
    restart
} = require("nodemon")
const bodyParser = require("body-parser")
const cookieSession = require("cookie-session")
const authRouter = require("./routes/admin/auth")
const adminProductsRouter = require("./routes/admin/products")
const productsRouter = require("./routes/products")
const cartsRouter = require("./routes/carts")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieSession({
    keys: ["lksjlkj32j0s090920wqwq09"]
}))

app.use(authRouter)
app.use(adminProductsRouter)
app.use(productsRouter)
app.use(cartsRouter)



app.listen(3000, () => {
    console.log("listening...")
})