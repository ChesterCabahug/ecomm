const layout = require("../layout")

const getError = (errors, prop) => {
    try {
        return errors.mapped()[prop].msg
    } catch (error) {
        return ""
    }
}
module.exports = ({errors}) => {
    return layout({
        content: `
            <div>
                <form method="POST">
                    <input name="email" type=email placeholder="Email" />
                    ${getError(errors, "email")}
                    <input name="password" type=password placeholder="Password" />
                    ${getError(errors, "password")}
                    
                    <button>Sign In</button>
                </form>
            </div>
            `
    })
}