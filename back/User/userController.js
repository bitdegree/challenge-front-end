const User = require('./User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

signUp = async (req, res) => {
    try {
        const user = new User(req.body)
        if (req.file) user.profileImgURL = req.file.path
        const createdUser = await user.save()
        if (!createdUser) throw res.json()
        res.json('register success')
    } catch (e) {
        res.status(400).json(e)
    }
}

logIn = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user) throw 'wrong email or password'

        const confirm = await bcrypt.compare(req.body.password, user.password)

        const token = jwt.sign({ _id: user._id.toHexString() }, 'secretasIsEnvFailo')
        user.tokens.push({token})

        await user.save()

        if (confirm) res.header('token', token).json(user.name)
        if (!confirm) throw 'wrong email or password'
    } catch (e) {
        res.status(401).json(e)
    }
}

logOut = async (req, res) => {
    const token = req.token
    const user = req.user
    try {
        await user.update({
            $pull : {
                tokens: {
                    token
                }
            }
        })
        res.json('successful logout')
    } catch (e) {
        res.status(400).json(e)
    }
}

module.exports = {
    signUp,
    logIn,
    logOut
}
