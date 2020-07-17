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


app.get("/signup", (req, res) => {
    res.send(`
        <div>
            Your id is: ${req.session.userId}
            <form method="POST">
                <input name="email" type=email placeholder="Email" />
                <input name="password" type=password placeholder="Password" />
                <input name="passwordConfirmation" type=password placeholder="Confirm Password" />
                <button>Sign Up</button>
            </form>
        </div>
    `)
})



app.post("/signup", async (req, res) => {
    const {email, password, passwordConfirmation} = req.body

    const existingUser = await usersRepo.getOneBy({email})

    if(existingUser) {
        return res.send("email in use")
    }
    if(password !== passwordConfirmation) {
        return res.send("Passwords must match")
    }
    
    // create a user in our user repo to represent this person
    const user = await usersRepo.create({email, password})

    // store the id of that user inside the users' cookie
    req.session.userId = user.id


    res.send("Account Created!")
})

app.get("/signout", (req, res) => {
    req.session = null
    res.send("you are logged out")
})

app.get("/signin", (req, res) => {
    res.send(`
    <div>
        <form method="POST">
            <input name="email" type=email placeholder="Email" />
            <input name="password" type=password placeholder="Password" />
            
            <button>Sign In</button>
        </form>
    </div>
    `)
})

app.post("/signin", async (req, res) => {
    const { email, password } = req.body

    const user = await usersRepo.getOneBy({ email })
    if(!user) {
        return res.send("Email not found!")
    }

    if(user.password !== password) {
        return res.send("Invalid password!")
    }

    req.session.userId = user.id

    res.send("You are sign in!")
})

app.listen(3000, () => {
    console.log("listening...")
})