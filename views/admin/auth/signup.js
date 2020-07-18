const layout = require("../layout")

const getError = (errors, prop) => {
    // prop === "email" || "password" || "passwordConfirmation"
    try {
        return errors.mapped()[prop].msg
    } catch (err) {
        return ""
    }
}

module.exports = ({
    req,
    errors
}) => {
    return layout({
        content: `
            <div>
                Your id is: ${req.session.userId}
                <form method="POST">
                    <input name="email" type=name placeholder="Email" />
                    ${getError(errors, "email")}
                    <input name="password" type=name placeholder="Password" />
                    ${getError(errors, "password")}
                    <input name="passwordConfirmation" type=name placeholder="Confirm Password" />
                    ${getError(errors, "passwordConfirmation")}
                    <button>Sign Up</button>
                </form>
            </div>
            `
    })
}