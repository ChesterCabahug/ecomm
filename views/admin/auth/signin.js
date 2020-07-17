const layout = require("../layout")
module.exports = () => {
    return layout({
        content: `
            <div>
                <form method="POST">
                    <input name="email" type=email placeholder="Email" />
                    <input name="password" type=password placeholder="Password" />
                    
                    <button>Sign In</button>
                </form>
            </div>
            `
    })
}