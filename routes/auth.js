import express from 'express';

const authRouter = express.Router()

authRouter.get('/', (req, res) => {
    res.send('auth')
})

authRouter.get('/register', (req, res) => {
    res.send('auth')
})

export default authRouter;