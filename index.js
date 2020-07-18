const express = require("express")
const {
    restart
} = require("nodemon")
const bodyParser = require("body-parser")
const cookieSession = require("cookie-session")
const authRouter = require("./routes/admin/auth")

const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieSession({
    keys: ["lksjlkj32j0s090920wqwq09"]
}))
app.use(authRouter)




app.listen(3000, () => {
    console.log("listening...")
})