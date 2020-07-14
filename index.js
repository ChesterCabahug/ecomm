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
    req.on("data", data => {
        const parsed = data.toString("utf8").split("&")
        const formData = {}
        for (let pair of parsed) {
            const [key, value] = pair.split("=")
            formData[key] = value
        }
        console.log(formData)
    })
    res.send("Account Created!")
})

app.listen(3000, () => {
    console.log("listening...")
})