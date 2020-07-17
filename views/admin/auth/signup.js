module.exports = ( { req } ) => {
    return `
    <div>
        Your id is: ${req.session.userId}
        <form method="POST">
            <input name="email" type=email placeholder="Email" />
            <input name="password" type=password placeholder="Password" />
            <input name="passwordConfirmation" type=password placeholder="Confirm Password" />
            <button>Sign Up</button>
        </form>
    </div>
    `
}