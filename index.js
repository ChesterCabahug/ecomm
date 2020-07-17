const express = require("express")
const { restart } = require("nodemon")
const bodyParser = require("body-parser")
const cookieSession = require("cookie-session")
const usersRepo = require("./repositories/users")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({
    keys: ["lksjlkj32j0s090920wqwq09"]
}))




app.listen(3000, () => {
    console.log("listening...")
})