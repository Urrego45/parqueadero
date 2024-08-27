import jwt from "jsonwebtoken";


export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        console.log('aaaaaaaaaaaaaaaaa')
        return res.status(401).json({ message: "Acceso denegado sin el 'Token'." })
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token invalido." })

        req.user = user

        next()
    })

}


