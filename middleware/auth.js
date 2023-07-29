import { KUDAMONO_AUTH_SECRET } from "@/utils/constant"

export default function (req, res, next){
    try {
        const authToken = req.headers.auth_token
        if (!authToken) throw new Error('auth token required')
        if (String(authToken) !== KUDAMONO_AUTH_SECRET) throw new Error('auth token wrong')
        next()
    } catch (error) {
        res.status(400).json({
            status: 'unauthorized',
            message: error
        })
    }
}