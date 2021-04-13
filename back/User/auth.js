const jwt = require('jsonwebtoken')
const User = require('./User')

userMiddleware = async (req, res, next) => {
    const token = req.header('token')

    try {
        const decoded = await jwt.verify(token, 'secretasIsEnvFailo')
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if (!user) throw 'auth failed'
        if (!req.body.email) {
    		res.json(user.name)
    	}
        req.user = user
        req.token = token
        next()
    } catch (e) {
        res.status(401).json(e)
    }
}

module.exports = userMiddleware
