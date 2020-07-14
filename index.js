const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send(`
        <div>
            <form>
                <input type=email placeholder="Email" />
                <input type=password placeholder="Password" />
                <input type=password placeholder="Confirm Password" />
                <button>Sign Up</button>
            </form>
        </div>
    `)
})

app.listen(3000, () => {
    console.log("listening...")
})