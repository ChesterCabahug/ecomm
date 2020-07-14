const express = require("express")
const { restart } = require("nodemon")
const app = express()


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

app.post("/", (req, res) => {
    res.send("Account Created!")
})

app.listen(3000, () => {
    console.log("listening...")
})