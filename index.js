const express = require("express")
const { restart } = require("nodemon")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input name="email" type=email placeholder="Email" />
                <input name="password" type=password placeholder="Password" />
                <input name="passwordConfirmation" type=password placeholder="Confirm Password" />
                <button>Sign Up</button>
            </form>
        </div>
    `)
})



app.post("/",(req, res) => {
    console.log(req.body)
    res.send("Account Created!")
})

app.listen(3000, () => {
    console.log("listening...")
})